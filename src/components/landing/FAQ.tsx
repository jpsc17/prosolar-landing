import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const FAQS = [
  {
    question: "Quanto custa um sistema de energia solar?",
    answer:
      "O investimento depende do seu consumo mensal. Um sistema residencial para uma conta de R$ 500/mês gira em torno de R$ 20.000 a R$ 30.000. Mas lembre-se: o sistema se paga com a economia gerada e ainda valoriza seu imóvel. Oferecemos parcelamento facilitado com condições comerciais simplificadas.",
  },
  {
    question: "Quanto vou economizar na conta de luz?",
    answer:
      "Na maioria dos casos, a economia chega a 90-95% do valor da conta. Você paga apenas a taxa mínima da concessionária (custo de disponibilidade), que gira em torno de R$ 70 a R$ 150 dependendo da sua instalação.",
  },
  {
    question: "Quanto tempo dura o sistema?",
    answer:
      "Os módulos solares têm vida útil superior a 25 anos, com garantia de performance de 80% nesse período. Os inversores duram de 12 a 15 anos. Isso significa décadas de economia garantida.",
  },
  {
    question: "Precisa de manutenção?",
    answer:
      "A manutenção é mínima. Recomenda-se apenas uma limpeza dos painéis a cada 6-12 meses (água e sabão neutro). Na Região Norte, a chuva natural já ajuda bastante. A Prosolar oferece monitoramento remoto que identifica qualquer anomalia automaticamente.",
  },
  {
    question: "Como funciona o parcelamento?",
    answer:
      "Trabalhamos com condições comerciais simplificadas e sem burocracia bancária. Na maioria dos casos, a parcela é menor que a conta de energia antiga — ou seja, você já economiza desde o dia 1. Aprovação rápida e processo descomplicado.",
  },
  {
    question: "Quanto tempo até o retorno do investimento?",
    answer:
      "Na Região Norte, devido à alta irradiação solar, o retorno varia de 3 a 5 anos. Considerando a vida útil de 25+ anos do sistema, são mais de 20 anos de energia praticamente gratuita após o payback.",
  },
];

export function FAQ() {
  const { ref, isVisible } = useScrollAnimation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 sm:py-28 bg-gray-bg" ref={ref}>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-sm font-semibold uppercase tracking-widest text-solar-dark">
            Dúvidas Frequentes
          </span>
          <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Perguntas Frequentes
          </h2>
        </div>

        {/* Accordion */}
        <div className="mt-12 space-y-3">
          {FAQS.map(({ question, answer }, i) => {
            const isOpen = openIndex === i;

            return (
              <div
                key={i}
                className={`overflow-hidden rounded-xl bg-white border border-border shadow-sm transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                } ${isOpen ? "shadow-md" : ""}`}
                style={{ transitionDelay: isVisible ? `${(i + 1) * 80}ms` : "0ms" }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-gray-bg/50"
                >
                  <span className="font-heading text-base font-semibold text-navy pr-4">
                    {question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    strokeWidth={2}
                  />
                </button>

                <div
                  className="grid transition-all duration-300 ease-in-out"
                  style={{
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                  }}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">
                      {answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
