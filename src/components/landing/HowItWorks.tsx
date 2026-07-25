import { ClipboardCheck, Ruler, FileCheck2, Wrench, Sparkles } from "lucide-react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const STEPS = [
  {
    icon: ClipboardCheck,
    title: "Análise Gratuita",
    desc: "Avaliamos sua conta de energia e o potencial solar do seu imóvel sem custo.",
  },
  {
    icon: Ruler,
    title: "Projeto de Engenharia",
    desc: "Dimensionamento técnico exato para maximizar sua economia com segurança.",
  },
  {
    icon: FileCheck2,
    title: "Homologação",
    desc: "Cuidamos de toda a burocracia com a concessionária. Você não faz nada.",
  },
  {
    icon: Wrench,
    title: "Instalação",
    desc: "Equipe técnica qualificada. Instalação rápida, limpa e dentro das normas.",
  },
  {
    icon: Sparkles,
    title: "Economia por Décadas",
    desc: "Sistema funcionando e gerando economia por 25+ anos com monitoramento.",
  },
];

export function HowItWorks() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="como-funciona" className="py-16 sm:py-28 bg-gray-bg" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`mx-auto max-w-3xl text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-sm font-semibold uppercase tracking-widest text-solar-dark">
            Processo
          </span>
          <h2 className="mt-3 font-heading text-2xl font-extrabold tracking-tight text-navy sm:text-3xl md:text-4xl lg:text-5xl">
            Como Funciona
          </h2>
          <p className="mt-3 text-base text-muted-foreground sm:text-lg">
            Do primeiro contato à economia na conta de luz, em 5 passos simples.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mx-auto mt-10 max-w-3xl sm:mt-16">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border sm:left-1/2 sm:-translate-x-px" />

          {STEPS.map(({ icon: Icon, title, desc }, i) => {
            const isLeft = i % 2 === 0;

            return (
              <div
                key={title}
                className={`relative mb-12 last:mb-0 transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: isVisible ? `${(i + 1) * 150}ms` : "0ms" }}
              >
                {/* Mobile: all left-aligned. Desktop: alternating */}
                <div className={`flex items-start gap-4 pl-14 sm:pl-0 sm:gap-0 ${
                  isLeft ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}>
                  {/* Content card */}
                  <div className={`flex-1 sm:w-[calc(50%-2rem)] ${
                    isLeft ? "sm:pr-12 sm:text-right" : "sm:pl-12 sm:text-left"
                  }`}>
                    <div className="rounded-xl bg-white p-6 shadow-sm transition-all hover:shadow-md">
                      <span className="inline-block text-xs font-bold text-solar uppercase tracking-wider">
                        Passo {i + 1}
                      </span>
                      <h3 className="mt-2 font-heading text-lg font-bold text-navy">
                        {title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {desc}
                      </p>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="absolute left-0 sm:left-1/2 -translate-x-1/2 z-10">
                    <div className="grid h-12 w-12 place-items-center rounded-full bg-navy shadow-lg ring-4 ring-white transition-colors">
                      <Icon className="h-5 w-5 text-solar" strokeWidth={2} />
                    </div>
                  </div>

                  {/* Spacer for the other side */}
                  <div className="hidden sm:block sm:w-[calc(50%-2rem)]" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
