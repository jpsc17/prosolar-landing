import { ArrowRight, ShieldCheck, Key, CreditCard, MapPin, Sun } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5591982298619?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20de%20energia%20solar.";

const TRUST_BADGES = [
  { icon: ShieldCheck, text: "CREA Regularizado" },
  { icon: Key, text: "Projeto Chave na Mão" },
  { icon: CreditCard, text: "Parcelamento Facilitado" },
  { icon: MapPin, text: "Toda a Região Norte" },
];

export function Hero() {
  return (
    <section id="top" className="relative pt-[72px] overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-[#f0f4ff] -z-10" />
      <div className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full bg-solar/5 blur-[120px] -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 py-12 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:py-28 items-center">
          {/* Left — Copy */}
          <div className="animate-fade-up">
            {/* States badge */}
            <span className="inline-flex items-center gap-2 rounded-full bg-navy/5 px-3 py-1.5 text-[10px] sm:text-[11px] sm:px-4 font-semibold uppercase tracking-widest text-navy flex-wrap leading-relaxed">
              <Sun className="h-3.5 w-3.5 text-solar shrink-0" />
              <span className="hidden sm:inline">Pará • Roraima • Amazonas • Amapá • Acre • Rondônia • Tocantins</span>
              <span className="sm:hidden">PA • RR • AM • AP • AC • RO • TO</span>
            </span>

            <h1 className="mt-5 font-heading text-[1.75rem] font-extrabold leading-[1.12] tracking-tight text-navy sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-6xl">
              Transforme o Sol da{" "}
              <span className="gradient-text-solar">Região Norte</span>{" "}
              na Maior Economia da Sua Casa ou Empresa.
            </h1>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg md:text-xl">
              Reduza sua conta de energia em até <strong className="text-navy">95%</strong> e proteja seu orçamento dos constantes reajustes. Projetos fotovoltaicos chave na mão em toda a Região Norte.
            </p>

            {/* Positioning — consolidated company */}
            <p className="mt-2 text-xs sm:text-sm font-medium text-navy/70 italic">
              Empresa consolidada em Boa Vista – RR, em expansão estratégica para o Pará e toda a Região Norte.
            </p>

            {/* CTAs */}
            <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pulse inline-flex items-center justify-center gap-2.5 rounded-full bg-solar px-6 py-3.5 text-sm font-bold text-navy shadow-lg transition-all hover:bg-solar-dark hover:shadow-xl active:scale-[0.98] sm:px-8 sm:py-4 sm:text-base md:text-lg"
              >
                Solicitar Orçamento Gratuito
                <ArrowRight className="h-5 w-5" strokeWidth={2.5} />
              </a>
              <a
                href="#simulador"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-navy/10 px-5 py-3 text-sm font-semibold text-navy transition-all hover:border-navy/30 hover:bg-navy/5 sm:px-6 sm:py-3.5"
              >
                Simular Minha Economia
              </a>
            </div>

            {/* Trust badges */}
            <div className="mt-6 grid grid-cols-2 gap-2.5 sm:mt-10 sm:flex sm:flex-wrap sm:gap-4">
              {TRUST_BADGES.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-1.5 text-xs sm:text-sm sm:gap-2 text-muted-foreground">
                  <Icon className="h-4 w-4 shrink-0 text-solar" strokeWidth={2} />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Image */}
          <div className="relative animate-fade-up" style={{ animationDelay: "0.2s" }}>
            {/* Glow behind image */}
            <div className="absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-br from-solar/20 via-transparent to-navy/10 blur-3xl" />

            {/* SUBSTITUIR POR FOTO REAL DA PROSOLAR — Hero principal */}
            <img
              src="/projetos/projeto-comercial.png"
              alt="Instalação solar premium pela Prosolar na Região Norte do Brasil"
              className="w-full rounded-2xl object-cover shadow-2xl aspect-[4/3] sm:aspect-[4/5] lg:aspect-[3/4]"
              loading="eager"
            />

            {/* Floating stats card */}
            <div className="absolute bottom-3 left-3 right-3 glass-card rounded-xl p-4 shadow-xl animate-float sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-[240px] sm:p-5">
              <div className="flex items-baseline gap-1.5">
                <span className="text-3xl sm:text-4xl font-extrabold text-navy font-heading">95%</span>
                <span className="text-xs sm:text-sm font-medium text-muted-foreground">de economia</span>
              </div>
              <div className="mt-3 h-px bg-border" />
              <div className="mt-3 flex items-baseline gap-1.5">
                <span className="text-xl sm:text-2xl font-extrabold text-navy font-heading">+500</span>
                <span className="text-xs sm:text-sm font-medium text-muted-foreground">projetos entregues</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
