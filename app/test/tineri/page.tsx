import type { Metadata } from "next";
import { TestWizard } from "@/components/test/TestWizard";
import { YOUTH_CATEGORIES, YOUTH_TEST_DURATION, YOUTH_TEST_INSTRUCTIONS } from "@/lib/questions/youth";

export const metadata: Metadata = {
  title: "Test de autoevaluare pentru Tineri — Adi Academy",
  description: "Descoperă-ți profilul, talentele și direcția — gratuit, în 15 minute.",
};

export default function TestTineriPage() {
  return (
    <TestWizard
      audience="YOUTH"
      title="Test de Autoevaluare — Tineri"
      categories={YOUTH_CATEGORIES}
      instructions={YOUTH_TEST_INSTRUCTIONS}
      duration={YOUTH_TEST_DURATION}
      image="/tineri-asset.png"
      imageAlt="Tânăr cu rucsac și laptop"
      imageWidth={1165}
      imageHeight={1350}
      imagePanel="from-brand to-violet"
    />
  );
}
