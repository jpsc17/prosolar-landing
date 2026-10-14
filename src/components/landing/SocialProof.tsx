import { ArrowRight, MapPin } from "lucide-react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const WHATSAPP_URL = "https://wa.me/5591982298619?text=Ol%C3%A1!%20Vi%20os%20casos%20de%20sucesso%20e%20gostaria%20de%20um%20or%C3%A7amento.";

/**
 * PROJETOS REAIS — Dados dos casos de sucesso.
 * Quando novas fotos reais forem fornecidas, basta:
 * 1. Colocar a imagem em /public/projetos/
 * 2. Atualizar o campo `image` abaixo
 */
const CASES = [
  {
    image: "/projetos/instalacao-fachada-drone.jpg",
    type: "Residencial — Instalação Completa",
    location: "Boa Vista, RR",
    before: "R$ 2.400",
    after: "R$ 180",
    annualSavings: "R$ 26.640",
    system: "12 kWp",
  },
  {
    image: "/projetos/foto-tecnico-inversores.jpg",
    type: "Padrão Técnico & Inversores Homologados",
    location: "Região Norte",
    before: "R$ 3.800",
    after: "R$ 250",
    annualSavings: "R$ 42.600",
    system: "16 kWp",
  },
  {
    image: "/projetos/instalacao-aerea-geral.jpg",
    type: "Residencial & Microempresa",
    location: "Região Norte",
    before: "R$ 5.200",
    after: "R$ 390",
    annualSavings: "R$ 57.720",
    system: "24 kWp",
  },
];

export function SocialProof() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="projetos" className="py-16 sm:py-28 bg-white" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`mx-auto max-w-3xl text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-sm font-semibold uppercase tracking-widest text-solar-dark">
            Resultados Reais
          </span>
          <h2 className="mt-3 font-heading text-2xl font-extrabold tracking-tight text-navy sm:text-3xl md:text-4xl lg:text-5xl">
            Veja a economia que nossos clientes alcançaram
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Projetos entregues em toda a Região Norte do Brasil.
          </p>
        </div>

        {/* Cases grid */}
        <div className="mt-10 grid gap-6 sm:mt-14 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {CASES.map(({ image, type, location, before, after, annualSavings, system }, i) => (
            <div
              key={type}
              className={`group overflow-hidden rounded-2xl bg-white border border-border shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? `${(i + 1) * 150}ms` : "0ms" }}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={image}
                  alt={`Projeto solar ${type} Prosolar em ${location}`}
                  className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur-sm px-3 py-1.5 text-xs font-semibold text-navy shadow-sm">
                  <MapPin className="h-3 w-3 text-solar" />
                  {location}
                </div>
                <div className="absolute top-3 right-3 rounded-full bg-navy/90 px-3 py-1.5 text-xs font-bold text-white">
                  {type}
                </div>
              </div>

              {/* Before / After */}
              <div className="p-5 sm:p-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-xl bg-red-50 p-4 text-center">
                    <span className="text-xs font-semibold uppercase tracking-wider text-red-400">Antes</span>
                    <div className="mt-1 font-heading text-xl font-extrabold text-red-600 line-through decoration-2">
                      {before}<span className="text-sm font-normal">/mês</span>
                    </div>
                  </div>
                  <div className="rounded-xl bg-emerald-50 p-4 text-center">
                    <span className="text-xs font-semibold uppercase tracking-wider text-emerald-500">Depois</span>
                    <div className="mt-1 font-heading text-xl font-extrabold text-emerald-600">
                      {after}<span className="text-sm font-normal">/mês</span>
                    </div>
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between rounded-xl bg-solar/10 p-3 sm:mt-4 sm:p-4">
                  <div>
                    <span className="text-xs font-semibold text-solar-dark uppercase tracking-wider">Economia Anual</span>
                    <div className="font-heading text-xl font-extrabold text-navy sm:text-2xl">{annualSavings}</div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold text-muted-foreground">Sistema</span>
                    <div className="font-heading text-lg font-bold text-navy">{system}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-navy-dark hover:shadow-lg active:scale-[0.98]"
          >
            Quero resultados como esses
            <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
          </a>
        </div>
      </div>
    </section>
  );
}
