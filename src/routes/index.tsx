import { createFileRoute } from "@tanstack/react-router";
import { Header } from "../components/landing/Header";
import { Hero } from "../components/landing/Hero";
import { AuthorityBar } from "../components/landing/AuthorityBar";
import { Simulator } from "../components/landing/Simulator";
import { Benefits } from "../components/landing/Benefits";
import { HowItWorks } from "../components/landing/HowItWorks";
import { SocialProof } from "../components/landing/SocialProof";
import { WhyProsolar } from "../components/landing/WhyProsolar";
import { Testimonials } from "../components/landing/Testimonials";
import { FAQ } from "../components/landing/FAQ";
import { FinalCTA } from "../components/landing/FinalCTA";
import { WhatsAppWidget } from "../components/landing/WhatsAppWidget";
import { Footer } from "../components/landing/Footer";

export const Route = createFileRoute("/")(
  {
    head: () => ({
      meta: [
        { title: "Prosolar | Energia Solar Fotovoltaica em Belém, PA — Economia de até 95%" },
        {
          name: "description",
          content:
            "Reduza sua conta de luz em até 95% com projetos fotovoltaicos chave na mão em Belém e Região Metropolitana. Simulação gratuita. Financiamento em até 84x. Engenharia CREA-PA.",
        },
        {
          property: "og:title",
          content: "Prosolar | Energia Solar Fotovoltaica em Belém, PA",
        },
        {
          property: "og:description",
          content:
            "Projetos fotovoltaicos residenciais, comerciais e rurais no Pará. Engenharia CREA-PA, instalação profissional e economia real de até 95%.",
        },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "keywords",
          content:
            "energia solar belém, painel solar pará, fotovoltaico belém, prosolar, economia energia solar, instalação solar belém, CREA-PA energia solar",
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
        <HowItWorks />
        <SocialProof />
        <WhyProsolar />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}
