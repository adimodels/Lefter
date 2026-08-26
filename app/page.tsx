import { Hero } from "@/components/landing/Hero";
import { AboutAcademy } from "@/components/landing/AboutAcademy";
import { NationalInitiative } from "@/components/landing/NationalInitiative";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { ReportContents } from "@/components/landing/ReportContents";
import { Methodology } from "@/components/landing/Methodology";
import { FinalCta } from "@/components/landing/FinalCta";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutAcademy />
      <NationalInitiative />
      <HowItWorks />
      <ReportContents />
      <Methodology />
      <FinalCta />
      <Footer />
    </>
  );
}
