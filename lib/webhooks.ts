import type { Audience } from "@prisma/client";

type NotificationPayload = {
  submissionId: string;
  audience: Audience;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
};

/**
 * Best-effort: eșecul acestor integrări nu trebuie să blocheze răspunsul
 * către utilizator. Fiecare funcție înghite propriile erori și le loghează.
 */
export async function sendTelegramNotification(payload: NotificationPayload) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) return;

  const audienceLabel = payload.audience === "YOUTH" ? "Tânăr" : "Părinte";
  const text = [
    "🔔 Submission nou — Adi Academy",
    `Nume: ${payload.firstName} ${payload.lastName}`,
    `Audiență: ${audienceLabel}`,
    `Email: ${payload.email}`,
    `Telefon: ${payload.phone}`,
    `Data: ${new Date().toLocaleString("ro-RO", { timeZone: "Europe/Chisinau" })}`,
  ].join("\n");

  try {
    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text }),
    });
    if (!res.ok) {
      console.error("Telegram notification failed", await res.text());
    }
  } catch (error) {
    console.error("Telegram notification error", error);
  }
}

type SheetsRowPayload = {
  submissionId: string;
  audience: Audience;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  age: number;
  gender: string;
  livingArea: string;
  county: string | null;
  answers: Record<string, unknown>;
  createdAt: string;
};

export async function sendToSheetsWebhook(payload: SheetsRowPayload) {
  const url = process.env.SHEETS_WEBHOOK_URL;
  if (!url) return;

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      console.error("Sheets webhook failed", await res.text());
    }
  } catch (error) {
    console.error("Sheets webhook error", error);
  }
}
