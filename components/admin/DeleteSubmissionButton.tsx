"use client";

import { Trash2 } from "lucide-react";
import { deleteSubmissionAction } from "@/app/admin/(dashboard)/actions";

export function DeleteSubmissionButton({
  submissionId,
  name,
  redirectToList = false,
  variant = "icon",
}: {
  submissionId: string;
  name: string;
  /** Folosit pe pagina de detaliu: după ștergere, nu mai există ce afișa acolo. */
  redirectToList?: boolean;
  variant?: "icon" | "labeled";
}) {
  return (
    <form
      action={deleteSubmissionAction}
      onSubmit={(e) => {
        if (!window.confirm(`Ștergi definitiv submisia lui ${name}? Nu poate fi anulat.`)) {
          e.preventDefault();
        }
      }}
    >
      <input type="hidden" name="submissionId" value={submissionId} />
      {redirectToList && <input type="hidden" name="redirectToList" value="1" />}
      {variant === "icon" ? (
        <button
          type="submit"
          aria-label={`Șterge submisia lui ${name}`}
          className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-red-50 hover:text-red-600"
        >
          <Trash2 className="h-4 w-4" strokeWidth={1.8} />
        </button>
      ) : (
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-lg border border-red-200 px-3.5 py-2 text-[13px] font-medium text-red-600 transition-colors hover:bg-red-50"
        >
          <Trash2 className="h-4 w-4" strokeWidth={1.8} />
          Șterge submisia
        </button>
      )}
    </form>
  );
}
