"use client";

import { useEffect, useState, type ReactNode } from "react";

/**
 * Ascunde CTA-urile de start și oferă în loc lista de așteptare, odată ce cele
 * 5.000 de rapoarte gratuite au fost epuizate. Dacă verificarea eșuează,
 * presupunem că mai sunt locuri — nu blocăm utilizatorii dintr-o eroare de rețea.
 */
export function CapacityGate({ children }: { children: ReactNode }) {
  const [full, setFull] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/capacity")
      .then((res) => res.json())
      .then((data) => {
        if (!cancelled) setFull(Boolean(data.full));
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  if (!full) return <>{children}</>;

  return (
    <section className="mx-auto max-w-3xl px-4 py-4 sm:px-6 lg:px-8">
      <div className="rounded-2xl bg-gradient-to-br from-indigo-50 to-violet-50 p-8 text-center ring-1 ring-slate-900/5">
        <h2 className="text-xl font-bold text-ink">
          Cele 5.000 de locuri gratuite au fost ocupate.
        </h2>
        <p className="mt-3 text-[13px] text-slate-600">
          Lasă-ne emailul și te notificăm pentru viitoarele sesiuni.
        </p>
        <WaitlistInline />
      </div>
    </section>
  );
}

function WaitlistInline() {
  const [audience, setAudience] = useState<"YOUTH" | "PARENT">("YOUTH");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, audience }),
      });
    } finally {
      setStatus("done");
    }
  }

  if (status === "done") {
    return <p className="mt-6 text-[13px] font-medium text-brand">Te-am notat pe listă!</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto mt-6 flex max-w-md flex-col gap-2 sm:flex-row">
      <label htmlFor="waitlist-audience" className="sr-only">
        Audiență
      </label>
      <select
        id="waitlist-audience"
        value={audience}
        onChange={(e) => setAudience(e.target.value as "YOUTH" | "PARENT")}
        className="rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-[13px] text-ink"
      >
        <option value="YOUTH">Tânăr</option>
        <option value="PARENT">Părinte</option>
      </select>
      <label htmlFor="waitlist-email" className="sr-only">
        Email
      </label>
      <input
        id="waitlist-email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="emailul@tau.md"
        className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-[13px] text-ink"
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-lg bg-brand px-5 py-2.5 text-[13px] font-semibold text-white hover:bg-brand-dark disabled:opacity-50"
      >
        Trimite
      </button>
    </form>
  );
}
