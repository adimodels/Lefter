"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, audience: "YOUTH" }),
      });
      setStatus(res.ok ? "done" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return <p className="text-[12px] text-slate-300">Mulțumim! Te-am adăugat pe listă.</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <label htmlFor="newsletter-email" className="sr-only">
        Emailul tău
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Emailul tău"
        className="w-full rounded-lg border border-white/15 bg-white/[0.07] px-3.5 py-2.5 text-[12px] text-white placeholder:text-slate-500 focus:border-brand focus:outline-none"
      />
      <button
        type="submit"
        disabled={status === "sending"}
        aria-label="Abonează-te"
        className="flex shrink-0 items-center justify-center rounded-lg bg-brand px-3.5 transition-colors hover:bg-brand-dark disabled:opacity-50"
      >
        <Send className="h-4 w-4 text-white" strokeWidth={1.8} />
      </button>
    </form>
  );
}
