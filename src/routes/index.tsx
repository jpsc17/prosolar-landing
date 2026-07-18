import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  TrendingDown,
  Home,
  ShieldCheck,
  Check,
  MessageCircle,
  Sun,
  Phone,
  MapPin,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Prosolar | Energia Solar Fotovoltaica em Belém, PA" },
      {
        name: "description",
        content:
          "Reduza sua conta de luz em até 95% com projetos fotovoltaicos chave na mão em Belém e Região Metropolitana. Solicite um orçamento gratuito com a Prosolar.",
      },
      { property: "og:title", content: "Prosolar | Energia Solar Fotovoltaica em Belém" },
      {
        property: "og:description",
        content:
          "Projetos fotovoltaicos residenciais e empresariais no Pará. Engenharia especializada, instalação rápida e economia real.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LandingPage,
});

const HERO_IMG =
  "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=1600&q=80";
const ENGINEER_IMG =
  "https://images.unsplash.com/photo-1591892150204-15cb2a4a9a10?auto=format&fit=crop&w=1200&q=80";

function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <PainSolution />
        <Authority />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-[0_2px_10px_rgba(0,0,0,0.06)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <a href="#top" className="flex items-center gap-2 min-w-0">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-navy">
              <Sun className="h-5 w-5 text-solar" strokeWidth={2.5} />
            </span>
            <span className="truncate text-xl font-extrabold tracking-tight text-navy">
              Prosolar
            </span>
          </a>
          <a
            href="#contato"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-solar px-4 py-2.5 text-sm font-bold text-navy-dark shadow-sm transition-all hover:bg-solar-dark hover:shadow-md sm:px-5"
          >
            <Phone className="h-4 w-4" strokeWidth={2.5} />
            <span className="hidden sm:inline">Falar com Engenheiro</span>
            <span className="sm:hidden">Engenheiro</span>
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative pt-16">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
        <div className="flex flex-col justify-center">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-solar/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-navy">
            <Sun className="h-3.5 w-3.5" />
            Belém e Região Metropolitana
          </span>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight text-navy sm:text-5xl lg:text-6xl">
            Transforme o Sol do Pará na Maior Economia da Sua Casa ou Empresa.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Reduza sua conta de luz em até 95% e blinde seu orçamento contra reajustes abusivos. Projetos fotovoltaicos chave na mão em Belém e Região Metropolitana.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#contato"
              className="btn-pulse inline-flex items-center justify-center gap-2 rounded-full bg-solar px-7 py-4 text-base font-bold text-navy-dark shadow-lg transition-all hover:bg-solar-dark sm:text-lg"
            >
              Solicitar Orçamento Gratuito
              <ArrowRight className="h-5 w-5" strokeWidth={2.5} />
            </a>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <ShieldCheck className="h-4 w-4 text-navy" />
              Sem compromisso. Resposta em 24h.
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-solar/30 to-navy/10 blur-2xl" />
          <img
            src={HERO_IMG}
            alt="Painéis solares fotovoltaicos instalados em telhado residencial"
            className="aspect-[4/5] w-full rounded-2xl object-cover shadow-2xl lg:aspect-[4/5]"
            loading="eager"
          />
          <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-white/95 p-4 shadow-lg backdrop-blur-sm sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-xs">
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-extrabold text-navy">95%</span>
              <span className="text-sm font-medium text-muted-foreground">de economia</span>
            </div>
            <p className="mt-1 text-xs text-muted-foreground">
              na conta de luz para clientes residenciais e comerciais.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const PAIN_CARDS = [
  {
    icon: TrendingDown,
    title: "Retorno Acelerado",
    desc: "O sistema se paga com o dinheiro que você economiza todos os meses.",
  },
  {
    icon: Home,
    title: "Valorização Patrimonial",
    desc: "Imóveis com energia solar sofrem valorização imediata no mercado.",
  },
  {
    icon: ShieldCheck,
    title: "Engenharia Especializada",
    desc: "Equipamentos de alta durabilidade com instalação técnica rigorosa.",
  },
];

function PainSolution() {
  return (
    <section className="bg-secondary/60 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-solar-dark">
            Pare de perder dinheiro
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl lg:text-5xl">
            Pare de pagar aluguel para a concessionária.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Cada mês sem energia solar é dinheiro jogado fora. Veja o que muda com a Prosolar.
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PAIN_CARDS.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border border-border bg-card p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="grid h-14 w-14 place-items-center rounded-xl bg-navy transition-colors group-hover:bg-solar">
                <Icon className="h-7 w-7 text-solar transition-colors group-hover:text-navy" strokeWidth={2} />
              </div>
              <h3 className="mt-6 text-xl font-bold text-navy">{title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const AUTHORITY_POINTS = [
  "Cuidamos de 100% da burocracia com a concessionária",
  "Dimensionamento técnico exato para sua necessidade real",
  "Instalação rápida, limpa e dentro das rigorosas normas técnicas",
];

function Authority() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
        <div className="relative order-2 lg:order-1">
          <div className="absolute -inset-4 -z-10 rounded-3xl bg-navy/5" />
          <img
            src={ENGINEER_IMG}
            alt="Engenheiro solar profissional com capacete branco inspecionando painel fotovoltaico"
            className="aspect-[4/5] w-full rounded-2xl object-cover shadow-xl"
            loading="lazy"
          />
          <div className="absolute -bottom-6 -right-2 hidden rounded-2xl bg-navy p-5 text-white shadow-xl sm:block">
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-8 w-8 text-solar" strokeWidth={2} />
              <div>
                <div className="text-2xl font-extrabold">CREA</div>
                <div className="text-xs text-white/70">Engenharia certificada</div>
              </div>
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <span className="text-sm font-semibold uppercase tracking-wider text-solar-dark">
            Autoridade técnica
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl lg:text-5xl">
            Por que escolher a Prosolar?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Somos uma equipe de engenharia dedicada a entregar projetos fotovoltaicos com máxima performance e mínima dor de cabeça.
          </p>
          <ul className="mt-8 space-y-5">
            {AUTHORITY_POINTS.map((point) => (
              <li key={point} className="flex items-start gap-4">
                <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-solar">
                  <Check className="h-5 w-5 text-navy-dark" strokeWidth={3} />
                </span>
                <span className="text-base font-medium text-navy sm:text-lg">{point}</span>
              </li>
            ))}
          </ul>
          <a
            href="#contato"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-navy-dark sm:text-base"
          >
            Quero um projeto sob medida
            <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
          </a>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section id="contato" className="bg-navy py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Descubra sua economia em menos de 24h.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/70">
          Fale com um engenheiro da Prosolar e receba um estudo gratuito com o dimensionamento e o retorno do seu investimento.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="https://wa.me/5591982298619"
            className="btn-pulse inline-flex items-center gap-2 rounded-full bg-solar px-8 py-4 text-base font-bold text-navy-dark shadow-lg transition-all hover:bg-solar-dark sm:text-lg"
          >
            Solicitar Orçamento Gratuito
            <ArrowRight className="h-5 w-5" strokeWidth={2.5} />
          </a>
          <a
            href="tel:+5591982298619"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10"
          >
            <Phone className="h-4 w-4" />
            (91) 98229-8619
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-navy-dark py-14 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-solar">
                <Sun className="h-5 w-5 text-navy-dark" strokeWidth={2.5} />
              </span>
              <span className="text-xl font-extrabold">Prosolar</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              Prosolar Energia Fotovoltaica. Engenharia solar chave na mão para residências e empresas no Pará.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-solar">Contato</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-solar" />
                <span>Av. Gentil Bittencourt, 1520 - Belém, PA</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-solar" />
                <a href="tel:+5591982298619" className="hover:text-solar">
                  (91) 98229-8619
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-solar">Legal</h4>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>CNPJ: 00.000.000/0001-00</li>
              <li>Registro CREA-PA</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-white/50">
          &copy; {new Date().getFullYear()} Prosolar Energia Fotovoltaica. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}

function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/5591982298619"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[oklch(0.65_0.18_150)] text-white shadow-xl transition-transform hover:scale-110 sm:h-16 sm:w-16"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-[oklch(0.65_0.18_150)] opacity-40" />
      <MessageCircle className="relative h-7 w-7 sm:h-8 sm:w-8" strokeWidth={2} fill="currentColor" fillOpacity={0.15} />
    </a>
  );
}
