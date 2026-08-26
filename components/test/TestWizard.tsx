"use client";

import { useEffect, useMemo, useState } from "react";
import type { Audience } from "@prisma/client";
import { Button } from "@/components/ui/Button";
import { ProgressBar } from "@/components/ui/ProgressBar";
import type { Answers, Category, Question } from "@/lib/questions/types";
import { isQuestionAnswered } from "@/lib/questions/validate";
import { MINOR_AGE_THRESHOLD } from "@/lib/constants";
import type { Consents } from "@/lib/validation";
import { QuestionRenderer } from "./QuestionRenderer";
import { DemographicGate, isDemographicsComplete, type PartialDemographics } from "./DemographicGate";
import { ContactConsentStep, isContactComplete, type PartialContact } from "./ContactConsentStep";
import { ConfirmationScreen } from "./ConfirmationScreen";
import { WaitlistForm } from "./WaitlistForm";

const SCHEMA_VERSION = 1;

type Phase = "intro" | "demographics" | "questions" | "contact" | "done" | "waitlist";

type PersistedState = {
  schemaVersion: number;
  phase: Phase;
  questionIndex: number;
  answers: Answers;
  demographics: PartialDemographics;
  contact: PartialContact;
  phoneLocalPart: string;
  consents: Consents;
};

const EMPTY_CONSENTS: Consents = {
  dataProcessing: false,
  statistics: false,
  marketingOptIn: false,
  parentalConsent: false,
};

function storageKey(audience: Audience) {
  return `adi-academy-test-${audience}`;
}

function flattenCategories(categories: Category[]) {
  let coreIndex = 0;
  const totalCore = categories.filter((c) => !c.supplementary).length;
  const flat: { category: Category; question: Question; coreLabel: string }[] = [];
  for (const category of categories) {
    if (!category.supplementary) coreIndex += 1;
    const coreLabel = category.supplementary
      ? category.title
      : `Categoria ${coreIndex} din ${totalCore}`;
    for (const question of category.questions) {
      flat.push({ category, question, coreLabel });
    }
  }
  return flat;
}

export function TestWizard({
  audience,
  title,
  categories,
  instructions,
  duration,
}: {
  audience: Audience;
  title: string;
  categories: Category[];
  instructions: string;
  duration: string;
}) {
  const flat = useMemo(() => flattenCategories(categories), [categories]);

  const [phase, setPhase] = useState<Phase>("intro");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [demographics, setDemographics] = useState<PartialDemographics>({});
  const [contact, setContact] = useState<PartialContact>({});
  const [phoneLocalPart, setPhoneLocalPart] = useState("");
  const [consents, setConsents] = useState<Consents>(EMPTY_CONSENTS);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [restored, setRestored] = useState(false);

  // Restaurează progresul din localStorage la montare.
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(storageKey(audience));
      if (raw) {
        const parsed = JSON.parse(raw) as PersistedState;
        if (parsed.schemaVersion === SCHEMA_VERSION) {
          // Hidratare unică din localStorage la montare (nu la fiecare rerender —
          // gardată de `restored` mai jos), deci nu produce randări în cascadă.
          // eslint-disable-next-line react-hooks/set-state-in-effect
          setPhase(parsed.phase === "done" ? "intro" : parsed.phase);
          setQuestionIndex(parsed.questionIndex);
          setAnswers(parsed.answers);
          setDemographics(parsed.demographics);
          setContact(parsed.contact);
          setPhoneLocalPart(parsed.phoneLocalPart);
          setConsents(parsed.consents);
        }
      }
    } catch {
      // localStorage indisponibil sau date corupte — pornim de la zero.
    }
    setRestored(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Persistă progresul la fiecare schimbare.
  useEffect(() => {
    if (!restored) return;
    const state: PersistedState = {
      schemaVersion: SCHEMA_VERSION,
      phase,
      questionIndex,
      answers,
      demographics,
      contact,
      phoneLocalPart,
      consents,
    };
    try {
      window.localStorage.setItem(storageKey(audience), JSON.stringify(state));
    } catch {
      // ignorăm — nu blocăm fluxul dacă localStorage e plin/indisponibil
    }
  }, [restored, audience, phase, questionIndex, answers, demographics, contact, phoneLocalPart, consents]);

  const current = flat[questionIndex];
  const isMinor = typeof demographics.age === "number" && demographics.age < MINOR_AGE_THRESHOLD;

  const consentsValid =
    consents.dataProcessing && consents.statistics && (!isMinor || consents.parentalConsent);

  async function handleSubmit() {
    if (!isDemographicsComplete(demographics) || !isContactComplete(contact) || !consentsValid) {
      return;
    }
    setSubmitting(true);
    setSubmitError(null);
    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          audience,
          demographics,
          contact: { ...contact, phone: `+373${phoneLocalPart}` },
          consents,
          answers,
        }),
      });

      if (res.status === 409) {
        setPhase("waitlist");
        return;
      }
      if (!res.ok) {
        const data = await res.json().catch(() => null);
        setSubmitError(data?.message ?? "A apărut o eroare. Te rugăm încearcă din nou.");
        return;
      }

      try {
        window.localStorage.removeItem(storageKey(audience));
      } catch {
        // nimic de făcut
      }
      setPhase("done");
    } catch {
      setSubmitError("Nu am putut trimite testul. Verifică conexiunea și încearcă din nou.");
    } finally {
      setSubmitting(false);
    }
  }

  if (!restored) return null;

  return (
    <div className="mx-auto max-w-2xl px-4 py-12 sm:py-16">
      {phase === "intro" && (
        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-900">{title}</h1>
          <p className="mt-2 text-sm font-medium text-amber-600">Durată estimată: {duration}</p>
          <p className="mt-6 text-slate-600 leading-relaxed max-w-xl mx-auto">{instructions}</p>
          <div className="mt-10">
            <Button size="lg" onClick={() => setPhase("demographics")}>
              Începe testul
            </Button>
          </div>
        </div>
      )}

      {phase === "demographics" && (
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Câteva date despre tine</h2>
          <DemographicGate value={demographics} onChange={setDemographics} />
          <div className="mt-8 flex justify-between">
            <Button variant="outline" onClick={() => setPhase("intro")}>
              Înapoi
            </Button>
            <Button
              disabled={!isDemographicsComplete(demographics)}
              onClick={() => {
                setQuestionIndex(0);
                setPhase("questions");
              }}
            >
              Continuă
            </Button>
          </div>
        </div>
      )}

      {phase === "questions" && current && (
        <div>
          <div className="mb-8">
            <ProgressBar
              value={((questionIndex + 1) / flat.length) * 100}
              label={current.coreLabel}
            />
          </div>
          <h2 className="text-xl font-bold text-slate-900 mb-1">{current.category.title}</h2>
          {current.category.note && (
            <p className="mb-6 text-sm text-slate-500">{current.category.note}</p>
          )}
          <p className="mb-6 text-lg font-medium text-slate-800">{current.question.prompt}</p>
          <QuestionRenderer
            question={current.question}
            value={answers[current.question.id]}
            onChange={(value) => setAnswers((prev) => ({ ...prev, [current.question.id]: value }))}
          />
          <div className="mt-8 flex justify-between">
            <Button
              variant="outline"
              onClick={() =>
                questionIndex === 0
                  ? setPhase("demographics")
                  : setQuestionIndex((i) => i - 1)
              }
            >
              Înapoi
            </Button>
            <Button
              disabled={!isQuestionAnswered(current.question, answers[current.question.id])}
              onClick={() =>
                questionIndex === flat.length - 1
                  ? setPhase("contact")
                  : setQuestionIndex((i) => i + 1)
              }
            >
              {questionIndex === flat.length - 1 ? "Continuă" : "Următoarea"}
            </Button>
          </div>
        </div>
      )}

      {phase === "contact" && (
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Ultimul pas</h2>
          <ContactConsentStep
            isMinor={isMinor}
            contact={contact}
            onContactChange={setContact}
            phoneLocalPart={phoneLocalPart}
            onPhoneLocalPartChange={setPhoneLocalPart}
            consents={consents}
            onConsentsChange={setConsents}
          />
          {submitError && <p className="mt-4 text-sm text-red-600">{submitError}</p>}
          <div className="mt-8 flex justify-between">
            <Button
              variant="outline"
              onClick={() => {
                setQuestionIndex(flat.length - 1);
                setPhase("questions");
              }}
            >
              Înapoi
            </Button>
            <Button
              disabled={!isContactComplete(contact) || !consentsValid || submitting}
              onClick={handleSubmit}
            >
              {submitting ? "Se trimite..." : "Trimite testul"}
            </Button>
          </div>
        </div>
      )}

      {phase === "done" && isContactComplete(contact) && (
        <ConfirmationScreen firstName={contact.firstName} email={contact.email} />
      )}

      {phase === "waitlist" && <WaitlistForm audience={audience} />}
    </div>
  );
}
