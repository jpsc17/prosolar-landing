import {
  ShieldCheck,
  Users,
  BadgeCheck,
  FileCheck,
  HeadphonesIcon,
  ArrowRight,
} from "lucide-react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const WHATSAPP_URL = "https://wa.me/5591982298619?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20a%20Prosolar.";

const DIFFERENTIALS = [
  {
    icon: ShieldCheck,
    title: "CREA Regularizado",
    desc: "Todos os projetos são assinados por engenheiro com registro ativo no CREA.",
  },
  {
    icon: Users,
    title: "Equipe Técnica Própria",
    desc: "Instaladores certificados e treinados. Não terceirizamos a instalação.",
  },
  {
    icon: BadgeCheck,
    title: "Garantia Total",
    desc: "Garantia de 25 anos nos módulos, 12 anos no inversor e 5 anos na instalação.",
  },
  {
    icon: FileCheck,
    title: "Homologação Garantida",
    desc: "Cuidamos de 100% da burocracia com a concessionária até a conexão final.",
  },
  {
    icon: HeadphonesIcon,
    title: "Pós-Venda Ativo",
    desc: "Monitoramento contínuo e suporte técnico mesmo após a instalação.",
  },
];

export function WhyProsolar() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-16 sm:py-28 bg-gray-bg" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-20">
          {/* Left — content */}
          <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
            <span className="text-sm font-semibold uppercase tracking-widest text-solar-dark">
              Diferenciais
            </span>
            <h2 className="mt-3 font-heading text-2xl font-extrabold tracking-tight text-navy sm:text-3xl md:text-4xl lg:text-5xl">
              Por que escolher a Prosolar?
            </h2>
            <p className="mt-3 text-base text-muted-foreground sm:text-lg">
              Não somos apenas mais uma empresa de energia solar. Somos engenheiros especializados com atuação consolidada na Região Norte, entregando projetos com máxima performance e total segurança.
            </p>

            <div className="mt-8 space-y-5 sm:mt-10 sm:space-y-6">
              {DIFFERENTIALS.map(({ icon: Icon, title, desc }, i) => (
                <div
                  key={title}
                  className={`flex gap-4 sm:gap-5 transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: isVisible ? `${(i + 1) * 100}ms` : "0ms" }}
                >
                  <div className="grid h-10 w-10 sm:h-12 sm:w-12 shrink-0 place-items-center rounded-xl bg-solar/15">
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-solar-dark" strokeWidth={1.8} />
                  </div>
                  <div>
                    <h3 className="font-heading text-base font-bold text-navy">{title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-navy-dark hover:shadow-lg active:scale-[0.98]"
            >
              Quero um projeto sob medida
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </a>
          </div>

          {/* Right — visual */}
          <div className={`relative transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}>
            <div className="absolute -inset-4 rounded-3xl bg-navy/5 -z-10" />
            {/* SUBSTITUIR POR FOTO REAL DA PROSOLAR — Equipe/engenheiro */}
            <img
              src="/projetos/projeto-residencial.jpg"
              alt="Projeto solar Prosolar — Instalação real"
              className="w-full rounded-2xl object-cover shadow-xl aspect-[3/2] sm:aspect-[4/5]"
              loading="lazy"
            />

            {/* CREA badge */}
            <div className="absolute -bottom-2 -right-1 rounded-xl bg-navy p-3 text-white shadow-xl sm:-bottom-6 sm:-right-4 sm:rounded-2xl sm:p-5">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-6 w-6 sm:h-8 sm:w-8 text-solar" strokeWidth={2} />
                <div>
                  <div className="font-heading text-lg sm:text-2xl font-extrabold">CREA</div>
                  <div className="text-xs text-white/70">Engenharia Certificada</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
