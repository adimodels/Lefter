import type { AnswerValue, Question } from "@/lib/questions/types";
import { SingleChoice } from "./question-types/SingleChoice";
import { MultiSelectMax } from "./question-types/MultiSelectMax";
import { OrderedPicker } from "./question-types/OrderedPicker";
import { ScaleSlider } from "./question-types/ScaleSlider";
import { PairChoiceGroup } from "./question-types/PairChoiceGroup";

export function QuestionRenderer({
  question,
  value,
  onChange,
}: {
  question: Question;
  value: AnswerValue | undefined;
  onChange: (value: AnswerValue) => void;
}) {
  switch (question.kind) {
    case "single":
      return (
        <SingleChoice
          question={question}
          value={value as string | undefined}
          onChange={onChange}
        />
      );
    case "multi-select-max":
      return (
        <MultiSelectMax
          question={question}
          value={value as string[] | undefined}
          onChange={onChange}
        />
      );
    case "ranking":
      return (
        <OrderedPicker
          items={question.items}
          value={value as string[] | undefined}
          onChange={onChange}
          target={question.items.length}
          helperText="Atinge itemii în ordinea importanței pentru tine (1 = cel mai important)."
        />
      );
    case "top-n-ordered":
      return (
        <OrderedPicker
          items={question.options}
          value={value as string[] | undefined}
          onChange={onChange}
          target={question.n}
        />
      );
    case "scale-slider":
      return (
        <ScaleSlider
          question={question}
          value={value as number | undefined}
          onChange={onChange}
        />
      );
    case "pair-choice-group":
      return (
        <PairChoiceGroup
          question={question}
          value={value as Record<string, string> | undefined}
          onChange={onChange}
        />
      );
    default:
      return null;
  }
}
