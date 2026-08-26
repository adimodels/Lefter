"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import type { Audience } from "@prisma/client";

export function WaitlistForm({ audience }: { audience: Audience }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "done" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, audience }),
      });
      setStatus(res.ok ? "done" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-slate-900">Te-am notat pe listă!</h2>
        <p className="mt-4 text-slate-600">
          Te vom anunța pe {email} de îndată ce se deschid noi sesiuni gratuite.
        </p>
      </div>
    );
  }

  return (
    <div className="text-center py-8">
      <h2 className="text-2xl font-bold text-slate-900">
        Cele 5.000 de locuri gratuite au fost ocupate.
      </h2>
      <p className="mt-4 max-w-md mx-auto text-slate-600">
        Lasă-ne emailul și te notificăm pentru viitoarele sesiuni.
      </p>
      <form onSubmit={handleSubmit} className="mt-6 flex max-w-sm mx-auto gap-2">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="emailul@tau.md"
          className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
        />
        <Button type="submit" disabled={status === "submitting"}>
          Trimite
        </Button>
      </form>
      {status === "error" && (
        <p className="mt-3 text-sm text-red-600">A apărut o eroare. Încearcă din nou.</p>
      )}
    </div>
  );
}
