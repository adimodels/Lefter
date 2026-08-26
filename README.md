# Adi Academy — Landing Page & Test de Autoevaluare

Landing page și sistem de test online pentru Programul Național de
Autoevaluare și Dezvoltare Personală (Adi Academy, Moldova).

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS v4
- MongoDB + Prisma (`^6`)
- Zod pentru validare

## Configurare locală

1. Copiază `.env.example` în `.env` și completează valorile (minim
   `DATABASE_URL`, `ADMIN_PASSWORD`, `ADMIN_SESSION_SECRET`).
2. Instalează dependențele și generează clientul Prisma + sincronizează
   schema cu baza de date:

   ```bash
   npm install
   npx prisma db push
   ```

3. Pornește serverul de dezvoltare:

   ```bash
   npm run dev
   ```

   Deschide [http://localhost:3000](http://localhost:3000).

## Structură

- `app/page.tsx` — landing page
- `app/test/tineri`, `app/test/parinti` — cele două teste (wizard client-side)
- `app/api/submit`, `app/api/capacity`, `app/api/waitlist` — API-uri publice
- `app/admin` — panou intern (parolă comună din `ADMIN_PASSWORD`)
- `lib/questions/{youth,parent}.ts` — conținutul integral al celor două teste
- `prisma/schema.prisma` — schema MongoDB (colecții separate pentru date
  anonimizate vs. date de contact, conform Legii nr. 133/2011)

## Integrări opționale

Telegram (`TELEGRAM_BOT_TOKEN` / `TELEGRAM_CHAT_ID`) și Google Sheets
(`SHEETS_WEBHOOK_URL`) sunt apelate direct din `/api/submit` la fiecare
submission reușit. Dacă variabilele lipsesc, integrarea respectivă e pur și
simplu ignorată (nu blochează trimiterea testului).
