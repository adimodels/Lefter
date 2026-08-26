"use client";

import { useEffect, useState } from "react";
import { ButtonLink } from "@/components/ui/Button";

export function AudienceCtaButtons() {
  const [full, setFull] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/capacity")
      .then((res) => res.json())
      .then((data) => {
        if (!cancelled) setFull(Boolean(data.full));
      })
      .catch(() => {
        // dacă verificarea eșuează, presupunem că mai sunt locuri disponibile
      });
    return () => {
      cancelled = true;
    };
  }, []);

  if (full) {
    return <WaitlistInline />;
  }

  return (
    <div className="flex flex-col sm:flex-row items-center gap-4">
      <ButtonLink href="/test/tineri" size="lg" variant="primary">
        Sunt tânăr (15–25)
      </ButtonLink>
      <ButtonLink href="/test/parinti" size="lg" variant="ghost">
        Sunt părinte
      </ButtonLink>
    </div>
  );
}

function WaitlistInline() {
  const [audience, setAudience] = useState<"YOUTH" | "PARENT">("YOUTH");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "done">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
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
    return <p className="text-white/90">Te-am notat pe listă — revenim cu vești în curând!</p>;
  }

  return (
    <div className="max-w-md">
      <p className="text-white font-medium mb-3">
        Cele 5.000 de locuri gratuite au fost ocupate. Lasă-ne emailul și te notificăm pentru
        viitoarele sesiuni.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
        <select
          value={audience}
          onChange={(e) => setAudience(e.target.value as "YOUTH" | "PARENT")}
          className="rounded-xl border border-white/30 bg-white/10 px-3 py-2 text-white"
        >
          <option className="text-slate-900" value="YOUTH">
            Tânăr
          </option>
          <option className="text-slate-900" value="PARENT">
            Părinte
          </option>
        </select>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="emailul@tau.md"
          className="w-full rounded-xl border border-white/30 bg-white/10 px-4 py-2 text-white placeholder:text-white/60"
        />
        <button
          type="submit"
          disabled={status === "submitting"}
          className="rounded-xl bg-amber-500 px-5 py-2 font-semibold text-slate-900 hover:bg-amber-400"
        >
          Trimite
        </button>
      </form>
    </div>
  );
}
