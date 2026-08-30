import type { Answers, Category } from "./types";

export type FormattedAnswer = {
  questionId: string;
  prompt: string;
  /** Răspunsul, gata de afișat. Mai multe linii pentru ranking / multi-select. */
  lines: string[];
  answered: boolean;
};

export type FormattedCategory = {
  id: string;
  title: string;
  answers: FormattedAnswer[];
};

function labelOf(options: { value: string; label: string }[], value: string) {
  return options.find((o) => o.value === value)?.label ?? value;
}

/**
 * Transformă răspunsurile brute stocate în baza de date în text citibil,
 * folosind aceleași definiții de întrebări ca testul. Fără asta, în admin
 * s-ar vedea doar coduri („A", „C") și liste de slug-uri.
 */
export function formatAnswers(categories: Category[], answers: Answers): FormattedCategory[] {
  return categories.map((category) => ({
    id: category.id,
    title: category.title,
    answers: category.questions.map((question) => {
      const raw = answers[question.id];
      const empty: FormattedAnswer = {
        questionId: question.id,
        prompt: question.prompt,
        lines: ["— fără răspuns —"],
        answered: false,
      };
      if (raw === undefined || raw === null) return empty;

      switch (question.kind) {
        case "single":
          return {
            questionId: question.id,
            prompt: question.prompt,
            lines: [`${raw} — ${labelOf(question.options, String(raw))}`],
            answered: true,
          };

        case "multi-select-max":
          return {
            questionId: question.id,
            prompt: question.prompt,
            lines: (raw as string[]).map((v) => labelOf(question.options, v)),
            answered: true,
          };

        case "ranking":
          return {
            questionId: question.id,
            prompt: question.prompt,
            lines: (raw as string[]).map((v, i) => `${i + 1}. ${labelOf(question.items, v)}`),
            answered: true,
          };

        case "top-n-ordered":
          return {
            questionId: question.id,
            prompt: question.prompt,
            lines: (raw as string[]).map((v, i) => `${i + 1}. ${labelOf(question.options, v)}`),
            answered: true,
          };

        case "scale-slider":
          return {
            questionId: question.id,
            prompt: question.prompt,
            lines: [`${raw} din ${question.max} (${question.min} = ${question.minLabel}, ${question.max} = ${question.maxLabel})`],
            answered: true,
          };

        case "pair-choice-group": {
          const record = raw as Record<string, string>;
          return {
            questionId: question.id,
            prompt: question.prompt,
            lines: question.pairs.map((pair) => {
              const picked = record[pair.id];
              const text = picked === "A" ? pair.optionA : picked === "B" ? pair.optionB : "—";
              return pair.prompt ? `${pair.prompt}: ${text}` : text;
            }),
            answered: true,
          };
        }

        default:
          return empty;
      }
    }),
  }));
}
