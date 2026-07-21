import {
  Zap,
  ClipboardCheck,
  Briefcase,
  Users,
  ArrowRight,
} from "lucide-react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const WHATSAPP_URL = "https://wa.me/5591982298619?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20as%20condi%C3%A7%C3%B5es%20comerciais.";

const ADVANTAGES = [
  {
    icon: Zap,
    title: "Atendimento Rápido",
    desc: "Resposta ágil e atendimento humanizado. Sem robôs, sem espera.",
  },
  {
    icon: ClipboardCheck,
    title: "Processo Simplificado",
    desc: "Sem burocracia bancária. Condições comerciais claras e diretas.",
  },
  {
    icon: Briefcase,
    title: "Projeto Completo",
    desc: "Do dimensionamento à homologação. Tudo incluso, sem surpresas.",
  },
  {
    icon: Users,
    title: "Equipe Própria",
    desc: "Engenheiros e instaladores certificados. Não terceirizamos.",
  },
];

export function CommercialSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="comercial" className="py-20 sm:py-28 bg-white" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`mx-auto max-w-3xl text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-sm font-semibold uppercase tracking-widest text-solar-dark">
            Simplicidade
          </span>
          <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-navy sm:text-4xl lg:text-5xl">
            Energia Solar Sem Complicação
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            A Prosolar oferece soluções comerciais simplificadas para quem deseja investir em energia solar sem enfrentar processos demorados e burocráticos.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ADVANTAGES.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className={`group relative rounded-2xl border border-border bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:border-solar/30 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? `${(i + 1) * 100}ms` : "0ms" }}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-solar/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

              <div className="relative">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-solar/10 transition-colors duration-300 group-hover:bg-solar/20">
                  <Icon className="h-6 w-6 text-solar-dark" strokeWidth={1.8} />
                </div>
                <h3 className="mt-5 font-heading text-lg font-bold text-navy">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Highlights */}
        <div className={`mt-12 mx-auto max-w-2xl rounded-2xl bg-gray-bg border border-border p-6 sm:p-8 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "✓ Parcelamento facilitado",
              "✓ Sem burocracia bancária",
              "✓ Condições comerciais simplificadas",
              "✓ Aprovação mais rápida",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm font-semibold text-navy">
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className={`mt-10 text-center transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-navy-dark hover:shadow-lg active:scale-[0.98]"
          >
            Fale com a equipe comercial
            <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
          </a>
        </div>
      </div>
    </section>
  );
}
