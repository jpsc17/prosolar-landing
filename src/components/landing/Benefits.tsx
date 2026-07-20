import {
  TrendingDown,
  Shield,
  Home,
  Leaf,
  CreditCard,
  Wifi,
} from "lucide-react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const BENEFITS = [
  {
    icon: TrendingDown,
    title: "Economia Imediata",
    desc: "Reduza sua conta de energia em até 95% desde o primeiro mês de funcionamento do sistema.",
  },
  {
    icon: Shield,
    title: "Proteção Contra Reajustes",
    desc: "Blinde seu orçamento contra os aumentos tarifários anuais que corroem seu poder de compra.",
  },
  {
    icon: Home,
    title: "Valorização do Imóvel",
    desc: "Imóveis com energia solar podem ter valorização de até 8% no mercado imobiliário.",
  },
  {
    icon: Leaf,
    title: "Sustentabilidade",
    desc: "Contribua para um planeta mais limpo. Cada kW gerado evita emissão de CO₂ na atmosfera.",
  },
  {
    icon: CreditCard,
    title: "Financiamento Facilitado",
    desc: "Parcelas que cabem no bolso, muitas vezes menores que sua conta de energia atual.",
  },
  {
    icon: Wifi,
    title: "Monitoramento Online",
    desc: "Acompanhe a geração e economia em tempo real pelo app no celular ou computador.",
  },
];

export function Benefits() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 sm:py-28 bg-white" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`mx-auto max-w-3xl text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-sm font-semibold uppercase tracking-widest text-solar-dark">
            Vantagens
          </span>
          <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-navy sm:text-4xl lg:text-5xl">
            Por que investir em energia solar?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Os benefícios vão muito além da economia na conta de luz.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className={`group relative rounded-2xl border border-border bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:border-solar/30 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? `${(i + 1) * 100}ms` : "0ms" }}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-solar/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

              <div className="relative">
                <div className="grid h-14 w-14 place-items-center rounded-xl bg-navy transition-colors duration-300 group-hover:bg-solar">
                  <Icon className="h-7 w-7 text-solar transition-colors duration-300 group-hover:text-navy" strokeWidth={1.8} />
                </div>
                <h3 className="mt-6 font-heading text-xl font-bold text-navy">
                  {title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
