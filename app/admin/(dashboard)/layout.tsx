import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import { logoutAction } from "./actions";

export default function AdminDashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <span className="flex items-center gap-2.5 font-bold text-slate-900">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-ink">
                <Image
                  src="/logo.png"
                  alt="Adi Academy"
                  width={811}
                  height={1011}
                  className="h-6 w-auto"
                />
              </span>
              Adi Academy · Admin
            </span>
            <nav className="flex items-center gap-4 text-sm font-medium text-slate-600">
              <Link href="/admin" className="hover:text-slate-900">
                Dashboard
              </Link>
              <Link href="/admin/submissions" className="hover:text-slate-900">
                Submisii
              </Link>
            </nav>
          </div>
          <form action={logoutAction}>
            <button type="submit" className="text-sm font-medium text-slate-500 hover:text-slate-800">
              Ieși
            </button>
          </form>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">{children}</main>
    </div>
  );
}
