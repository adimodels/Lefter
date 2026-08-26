import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { AudienceCards } from "@/components/landing/AudienceCards";
import { CapacityGate } from "@/components/landing/CapacityGate";
import { NationalInitiative } from "@/components/landing/NationalInitiative";
import { AboutAcademy } from "@/components/landing/AboutAcademy";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Methodology } from "@/components/landing/Methodology";
import { Testimonials } from "@/components/landing/Testimonials";
import { Faq } from "@/components/landing/Faq";
import { FinalCta } from "@/components/landing/FinalCta";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="initiativa" className="bg-slate-50/50">
        <Hero />
        <CapacityGate>
          <AudienceCards />
        </CapacityGate>
        <NationalInitiative />
        <AboutAcademy />
        <HowItWorks />
        <Methodology />
        <Testimonials />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
