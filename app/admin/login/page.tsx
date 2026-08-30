"use client";

import Image from "next/image";
import { useActionState } from "react";
import { loginAction, type LoginState } from "./actions";

const initialState: LoginState = undefined;

export default function AdminLoginPage() {
  const [state, formAction, pending] = useActionState(loginAction, initialState);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <form action={formAction} className="w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        {/* Logo-ul e crem, deci are nevoie de o pastilă închisă pe acest fundal deschis. */}
        <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-ink">
          <Image src="/logo.png" alt="Adi Academy" width={811} height={1011} className="h-9 w-auto" />
        </span>
        <h1 className="text-xl font-bold text-slate-900 mb-1">Adi Academy — Admin</h1>
        <p className="text-sm text-slate-500 mb-6">Acces echipă intern.</p>

        <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-2">
          Parolă
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          autoFocus
          className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
        />

        {state?.error && <p className="mt-3 text-sm text-red-600">{state.error}</p>}

        <button
          type="submit"
          disabled={pending}
          className="mt-6 w-full rounded-full bg-brand px-5 py-3 font-semibold text-white hover:bg-brand-dark disabled:opacity-50"
        >
          {pending ? "Se verifică..." : "Intră"}
        </button>
      </form>
    </div>
  );
}
