import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { AudienceCards } from "@/components/landing/AudienceCards";
import { CapacityGate } from "@/components/landing/CapacityGate";
import { AboutAcademy } from "@/components/landing/AboutAcademy";
import { NationalInitiative } from "@/components/landing/NationalInitiative";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { ReportContents } from "@/components/landing/ReportContents";
import { Methodology } from "@/components/landing/Methodology";
import { Testimonials } from "@/components/landing/Testimonials";
import { Faq } from "@/components/landing/Faq";
import { FinalCta } from "@/components/landing/FinalCta";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      {/* Ordinea secțiunilor urmează brief-ul: Hero → Adi Academy → Inițiativa
          Națională → Cum Funcționează → Ce Conține Raportul → Bazele
          Metodologice → CTA Final → Footer. Cardurile de audiență,
          testimonialele și FAQ-ul sunt adăugiri peste brief. */}
      <main id="initiativa">
        <Hero />
        <CapacityGate>
          <AudienceCards />
        </CapacityGate>
        <AboutAcademy />
        <NationalInitiative />
        <HowItWorks />
        <ReportContents />
        <Methodology />
        <Testimonials />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
