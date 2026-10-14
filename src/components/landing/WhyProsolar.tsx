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

            <div className="mt-8 space-y-3.5 sm:mt-10">
              {DIFFERENTIALS.map(({ icon: Icon, title, desc }, i) => (
                <div
                  key={title}
                  className={`flex gap-4 p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs transition-all duration-300 hover:shadow-md hover:border-amber-400 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: isVisible ? `${(i + 1) * 80}ms` : "0ms" }}
                >
                  <div className="grid h-10 w-10 sm:h-12 sm:w-12 shrink-0 place-items-center rounded-xl bg-amber-500/10 text-amber-600 border border-amber-500/20">
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="font-heading text-sm sm:text-base font-bold text-navy">{title}</h3>
                    <p className="mt-0.5 text-xs sm:text-sm leading-relaxed text-slate-500">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer mt-8 sm:mt-10 inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 px-7 py-4 text-sm font-extrabold text-slate-950 shadow-md shadow-amber-500/25 hover:shadow-lg transition-all active:scale-[0.98]"
            >
              <span>Falar com Engenheiro no WhatsApp</span>
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </a>
          </div>

          {/* Right — visual */}
          <div className={`relative transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}>
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-amber-400/20 via-transparent to-navy/10 blur-2xl -z-10" />
            
            {/* Moldura da foto real */}
            <div className="rounded-3xl p-2.5 bg-white shadow-2xl border border-slate-200/80 relative">
              <img
                src="/projetos/foto-tecnico-inversores.jpg"
                alt="Especialista Prosolar com inversores homologados e padrão técnico certificado"
                className="w-full rounded-2xl object-cover aspect-[3/4] sm:aspect-[4/5] object-top shadow-inner"
                loading="lazy"
              />

              {/* Tag Superior de Inversores Homologados */}
              <div className="absolute top-6 left-6 glass-card rounded-xl px-3 py-1.5 shadow-md border border-white/80 text-[11px] font-bold text-navy flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Inversores Solplanet &amp; Auxsol</span>
              </div>

              {/* CREA badge */}
              <div className="absolute -bottom-3 -right-2 sm:-bottom-5 sm:-right-4 rounded-2xl bg-slate-950 p-3.5 sm:p-5 text-white shadow-2xl border border-white/10">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
                    <ShieldCheck className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={2.5} />
                  </div>
                  <div>
                    <div className="font-heading text-base sm:text-xl font-extrabold text-white">CREA Ativo</div>
                    <div className="text-[11px] text-amber-300 font-medium">Engenharia Homologada</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
