import type { Answers, Category, Question } from "./types";

function isQuestionAnswered(question: Question, value: unknown): boolean {
  switch (question.kind) {
    case "single": {
      return typeof value === "string" && question.options.some((o) => o.value === value);
    }
    case "multi-select-max": {
      return (
        Array.isArray(value) &&
        value.length > 0 &&
        value.length <= question.max &&
        value.every((v) => question.options.some((o) => o.value === v))
      );
    }
    case "ranking": {
      return (
        Array.isArray(value) &&
        value.length === question.items.length &&
        question.items.every((item) => value.includes(item.value))
      );
    }
    case "top-n-ordered": {
      return (
        Array.isArray(value) &&
        value.length === question.n &&
        new Set(value).size === value.length &&
        value.every((v) => question.options.some((o) => o.value === v))
      );
    }
    case "scale-slider": {
      return typeof value === "number" && value >= question.min && value <= question.max;
    }
    case "pair-choice-group": {
      if (typeof value !== "object" || value === null || Array.isArray(value)) return false;
      const record = value as Record<string, string>;
      return question.pairs.every((pair) => record[pair.id] === "A" || record[pair.id] === "B");
    }
    default:
      return false;
  }
}

export function findFirstUnanswered(
  categories: Category[],
  answers: Answers
): { categoryId: string; questionId: string } | null {
  for (const category of categories) {
    for (const question of category.questions) {
      if (!isQuestionAnswered(question, answers[question.id])) {
        return { categoryId: category.id, questionId: question.id };
      }
    }
  }
  return null;
}

export function isTestComplete(categories: Category[], answers: Answers): boolean {
  return findFirstUnanswered(categories, answers) === null;
}

export { isQuestionAnswered };
