// Tipurile care descriu structura celor două teste (Tineri / Părinți).
// Fiecare "Question" e o unitate randată pe un singur ecran în wizard.

export type ChoiceOption = {
  value: string;
  label: string;
};

export type BaseQuestion = {
  id: string;
  prompt: string;
};

export type SingleChoiceQuestion = BaseQuestion & {
  kind: "single";
  options: ChoiceOption[];
};

export type MultiSelectMaxQuestion = BaseQuestion & {
  kind: "multi-select-max";
  options: ChoiceOption[];
  max: number;
};

/** Utilizatorul ordonează TOATE elementele (drag-and-drop sau numerotare manuală). */
export type RankingQuestion = BaseQuestion & {
  kind: "ranking";
  items: ChoiceOption[];
};

/** Utilizatorul alege primele N elemente, în ordinea preferinței. */
export type TopNOrderedQuestion = BaseQuestion & {
  kind: "top-n-ordered";
  options: ChoiceOption[];
  n: number;
};

export type ScaleSliderQuestion = BaseQuestion & {
  kind: "scale-slider";
  min: number;
  max: number;
  minLabel: string;
  maxLabel: string;
};

/** Mai multe micro-alegeri binare (A/B) sub un singur enunț, ex. Î3.6a/b/c. */
export type PairChoiceGroupQuestion = BaseQuestion & {
  kind: "pair-choice-group";
  pairs: {
    id: string;
    prompt: string;
    optionA: string;
    optionB: string;
  }[];
};

export type Question =
  | SingleChoiceQuestion
  | MultiSelectMaxQuestion
  | RankingQuestion
  | TopNOrderedQuestion
  | ScaleSliderQuestion
  | PairChoiceGroupQuestion;

export type Category = {
  id: string;
  title: string;
  /** Notă afișată o singură dată, la începutul categoriei (ex. instrucțiuni scală). */
  note?: string;
  /** Dacă lipsește, categoria intră în numărătoarea "Categoria X din N". */
  supplementary?: boolean;
  questions: Question[];
};

export type AnswerValue =
  | string
  | string[]
  | number
  | Record<string, string>;

export type Answers = Record<string, AnswerValue>;
