import { Star } from "lucide-react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

/**
 * DEPOIMENTOS — Dados dos clientes.
 * Quando fotos reais forem fornecidas, basta:
 * 1. Colocar a foto em /public/projetos/
 * 2. Adicionar o campo `photo` com o caminho
 * 3. Substituir o avatar por <img>
 */
const TESTIMONIALS = [
  {
    name: "Carlos Mendes",
    city: "Boa Vista, RR",
    savings: "R$ 1.800/mês",
    avatar: "CM",
    /* TODO: photo: "/projetos/cliente-1.jpg" */
    text: "Instalei o sistema há 8 meses e minha conta caiu de R$ 2.000 para R$ 180. A equipe da Prosolar foi extremamente profissional e cuidou de toda a burocracia.",
    stars: 5,
  },
  {
    name: "Ana Beatriz Santos",
    city: "Belém, PA",
    savings: "R$ 950/mês",
    avatar: "AS",
    /* TODO: photo: "/projetos/cliente-2.jpg" */
    text: "Como dona de uma clínica odontológica, energia era meu segundo maior custo. Agora economizo quase R$ 1.000 por mês. O retorno veio antes do previsto.",
    stars: 5,
  },
  {
    name: "Roberto Lima",
    city: "Manaus, AM",
    savings: "R$ 2.800/mês",
    avatar: "RL",
    /* TODO: photo: "/projetos/cliente-3.jpg" */
    text: "Na fazenda a conta era absurda por causa das bombas e câmaras frias. A Prosolar dimensionou o sistema perfeitamente. Economia real todo mês.",
    stars: 5,
  },
  {
    name: "Patrícia Oliveira",
    city: "Palmas, TO",
    savings: "R$ 450/mês",
    avatar: "PO",
    /* TODO: photo: "/projetos/cliente-4.jpg" */
    text: "Financiei em 60x e a parcela é menor que minha conta de energia antiga. Ou seja, já comecei economizando desde o dia 1. Recomendo de olhos fechados.",
    stars: 5,
  },
];

export function Testimonials() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="depoimentos" className="py-16 sm:py-28 bg-white" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`mx-auto max-w-3xl text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-sm font-semibold uppercase tracking-widest text-solar-dark">
            Depoimentos
          </span>
          <h2 className="mt-3 font-heading text-2xl font-extrabold tracking-tight text-navy sm:text-3xl md:text-4xl lg:text-5xl">
            O que nossos clientes dizem
          </h2>
        </div>

        {/* Grid */}
        <div className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {TESTIMONIALS.map(({ name, city, savings, avatar, text, stars }, i) => (
            <div
              key={name}
              className={`group rounded-2xl border border-border bg-white p-5 shadow-sm transition-all duration-500 hover:shadow-lg hover:-translate-y-1 sm:p-6 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? `${(i + 1) * 100}ms` : "0ms" }}
            >
              {/* Stars */}
              <div className="flex gap-0.5">
                {Array.from({ length: stars }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-solar text-solar" />
                ))}
              </div>

              {/* Text */}
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                "{text}"
              </p>

              {/* Author */}
              <div className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                {/* TODO: Replace avatar with real photo when available:
                    <img src={photo} alt={name} className="h-10 w-10 rounded-full object-cover" /> */}
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-navy font-heading text-sm font-bold text-white">
                  {avatar}
                </div>
                <div>
                  <div className="text-sm font-semibold text-navy">{name}</div>
                  <div className="text-xs text-muted-foreground">{city}</div>
                </div>
              </div>

              {/* Savings badge */}
              <div className="mt-3 rounded-lg bg-solar/10 px-3 py-1.5 text-center text-xs font-bold text-solar-dark">
                Economia: {savings}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
