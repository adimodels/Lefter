import type { Metadata } from "next";
import { TestWizard } from "@/components/test/TestWizard";
import { PARENT_CATEGORIES, PARENT_TEST_DURATION, PARENT_TEST_INSTRUCTIONS } from "@/lib/questions/parent";

export const metadata: Metadata = {
  title: "Test de autoevaluare pentru Părinți — Adi Academy",
  description: "Primește un profil clar al stilului tău de parenting și recomandări pentru copilul tău.",
};

export default function TestParintiPage() {
  return (
    <TestWizard
      audience="PARENT"
      title="Test de Autoevaluare — Părinți"
      categories={PARENT_CATEGORIES}
      instructions={PARENT_TEST_INSTRUCTIONS}
      duration={PARENT_TEST_DURATION}
      image="/parinti-asset.png"
      imageAlt="Mamă îmbrățișându-și copilul"
      imageWidth={1180}
      imageHeight={1333}
      imagePanel="from-violet to-violet-soft"
    />
  );
}
