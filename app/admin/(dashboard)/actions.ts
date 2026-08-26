"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/db";
import { ADMIN_COOKIE_NAME } from "@/lib/admin-auth";
import type { ReportStatus } from "@prisma/client";

export async function logoutAction() {
  const cookieStore = await cookies();
  cookieStore.delete(ADMIN_COOKIE_NAME);
  redirect("/admin/login");
}

export async function updateReportStatusAction(formData: FormData) {
  const submissionId = String(formData.get("submissionId") ?? "");
  const status = String(formData.get("status") ?? "") as ReportStatus;

  if (!submissionId || !["NOT_PROCESSED", "IN_PROGRESS", "SENT"].includes(status)) {
    return;
  }

  await prisma.contact.update({
    where: { submissionId },
    data: { reportStatus: status },
  });

  revalidatePath("/admin/submissions");
}
