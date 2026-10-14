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
    type: "Residencial",
    badge: "Homologado",
    location: "Boa Vista, RR",
    before: "R$ 2.400",
    after: "R$ 180",
    annualSavings: "R$ 26.640",
    system: "12 kWp",
  },
  {
    image: "/projetos/foto-tecnico-inversores.jpg",
    type: "Engenharia Técnica",
    badge: "Inversores Certificados",
    location: "Região Norte",
    before: "R$ 3.800",
    after: "R$ 250",
    annualSavings: "R$ 42.600",
    system: "16 kWp",
  },
  {
    image: "/projetos/instalacao-drone-telhado.jpg",
    type: "Residencial Premium",
    badge: "Alta Eficiência",
    location: "Região Norte",
    before: "R$ 4.500",
    after: "R$ 320",
    annualSavings: "R$ 50.160",
    system: "22 kWp",
  },
  {
    image: "/projetos/instalacao-aerea-geral.jpg",
    type: "Comércio / PME",
    badge: "Chave na Mão",
    location: "Região Norte",
    before: "R$ 6.200",
    after: "R$ 450",
    annualSavings: "R$ 69.000",
    system: "32 kWp",
  },
];

export function SocialProof() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="projetos" className="py-20 sm:py-32 bg-slate-50/70 border-y border-slate-200/60" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`mx-auto max-w-3xl text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-amber-800 bg-amber-100 border border-amber-300">
            ★ Casos Reais Entregues
          </span>
          <h2 className="mt-4 font-heading text-2xl font-extrabold tracking-tight text-navy sm:text-3xl md:text-4xl lg:text-5xl">
            Projetos Reais da Prosolar Gerando <span className="gradient-text-solar">Economia Todo Mês</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Veja como clientes residenciais e comerciais no Norte transformaram suas despesas fixas em economia limpa.
          </p>
        </div>

        {/* Cases grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CASES.map(({ image, type, badge, location, before, after, annualSavings, system }, i) => (
            <div
              key={type}
              className={`group overflow-hidden rounded-3xl bg-white border border-slate-200 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-amber-400 flex flex-col justify-between ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? `${(i + 1) * 120}ms` : "0ms" }}
            >
              {/* Image com Badges */}
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={image}
                  alt={`Projeto solar ${type} Prosolar em ${location}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                
                <div className="absolute top-3 left-3 flex items-center gap-1 rounded-full bg-black/60 backdrop-blur-md px-2.5 py-1 text-[11px] font-semibold text-white">
                  <MapPin className="h-3 w-3 text-amber-400" />
                  <span>{location}</span>
                </div>

                <div className="absolute top-3 right-3 rounded-full bg-amber-500 px-2.5 py-1 text-[10px] font-extrabold text-slate-950 uppercase shadow-xs">
                  {badge}
                </div>

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs font-bold">
                  <span className="text-sm font-heading">{type}</span>
                  <span className="bg-white/20 backdrop-blur-md px-2 py-0.5 rounded-md text-[11px]">{system}</span>
                </div>
              </div>

              {/* Before / After & Economia */}
              <div className="p-4 sm:p-5 space-y-3 flex-1 flex flex-col justify-between">
                <div className="grid grid-cols-2 gap-2 text-center">
                  <div className="rounded-xl bg-red-50/80 border border-red-200/60 p-2.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-red-500">Antes</span>
                    <div className="font-heading text-base font-extrabold text-red-700 line-through decoration-2">
                      {before}
                    </div>
                  </div>
                  <div className="rounded-xl bg-emerald-50/90 border border-emerald-200/80 p-2.5 shadow-2xs">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600">Depois</span>
                    <div className="font-heading text-base font-extrabold text-emerald-700">
                      {after}
                    </div>
                  </div>
                </div>

                <div className="rounded-xl bg-gradient-to-r from-amber-50 via-amber-100/60 to-white p-3 border border-amber-200 text-center">
                  <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider block">Economia no 1º Ano</span>
                  <div className="font-heading text-lg font-extrabold text-navy">{annualSavings}</div>
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
            className="btn-shimmer inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-navy to-navy-dark px-8 py-4 text-sm sm:text-base font-bold text-white shadow-lg hover:shadow-xl transition-all active:scale-[0.98]"
          >
            <span>Quero Uma Economia Como Essa</span>
            <ArrowRight className="h-4 w-4 text-amber-400" strokeWidth={2.5} />
          </a>
        </div>
      </div>
    </section>
  );
}
