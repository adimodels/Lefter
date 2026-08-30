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

export async function deleteSubmissionAction(formData: FormData) {
  const submissionId = String(formData.get("submissionId") ?? "");
  if (!submissionId) return;

  // Contact și Submission trăiesc în colecții separate (fără relație Prisma
  // între ele, intenționat — vezi schema), deci se șterg separat.
  await Promise.all([
    prisma.contact.deleteMany({ where: { submissionId } }),
    prisma.submission.deleteMany({ where: { submissionId } }),
  ]);

  // Eliberează locul din pragul de 5.000 de rapoarte gratuite.
  await prisma.counter.updateMany({
    where: { id: "main", count: { gt: 0 } },
    data: { count: { decrement: 1 } },
  });

  revalidatePath("/admin/submissions");
  revalidatePath("/admin");

  // Din pagina de detaliu, submisia ștearsă nu mai există — nu are sens să
  // rămânem pe un 404, așa că întoarcem utilizatorul la listă.
  if (formData.get("redirectToList")) {
    redirect("/admin/submissions");
  }
}
