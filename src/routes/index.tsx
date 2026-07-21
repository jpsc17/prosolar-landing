import { createFileRoute } from "@tanstack/react-router";
import { Header } from "../components/landing/Header";
import { Hero } from "../components/landing/Hero";
import { AuthorityBar } from "../components/landing/AuthorityBar";
import { Simulator } from "../components/landing/Simulator";
import { Benefits } from "../components/landing/Benefits";
import { HowItWorks } from "../components/landing/HowItWorks";
import { CommercialSection } from "../components/landing/CommercialSection";
import { SocialProof } from "../components/landing/SocialProof";
import { WhyProsolar } from "../components/landing/WhyProsolar";
import { RegionalPresence } from "../components/landing/RegionalPresence";
import { Testimonials } from "../components/landing/Testimonials";
import { FAQ } from "../components/landing/FAQ";
import { FinalCTA } from "../components/landing/FinalCTA";
import { WhatsAppWidget } from "../components/landing/WhatsAppWidget";
import { Footer } from "../components/landing/Footer";

export const Route = createFileRoute("/")(
  {
    head: () => ({
      meta: [
        { title: "Prosolar | Energia Solar Fotovoltaica na Região Norte — Economia de até 95%" },
        {
          name: "description",
          content:
            "Reduza sua conta de luz em até 95% com projetos fotovoltaicos chave na mão em toda a Região Norte. Simulação gratuita. Parcelamento facilitado. Engenharia CREA.",
        },
        {
          property: "og:title",
          content: "Prosolar | Energia Solar Fotovoltaica na Região Norte",
        },
        {
          property: "og:description",
          content:
            "Projetos fotovoltaicos residenciais, comerciais e rurais em toda a Região Norte. Empresa consolidada em Roraima, em expansão para o Pará. Engenharia CREA, instalação profissional e economia real de até 95%.",
        },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "keywords",
          content:
            "energia solar pará, energia solar região norte, energia solar roraima, energia solar boa vista, energia fotovoltaica pará, empresa de energia solar no pará, instalação de energia solar região norte, prosolar, economia energia solar",
        },
      ],
    }),
    component: LandingPage,
  },
);

function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <AuthorityBar />
        <Simulator />
        <Benefits />
        <CommercialSection />
        <HowItWorks />
        <SocialProof />
        <WhyProsolar />
        <RegionalPresence />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}
