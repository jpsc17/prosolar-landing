import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const WHATSAPP_URL = "https://wa.me/5591982298619?text=Ol%C3%A1!%20Quero%20minha%20simula%C3%A7%C3%A3o%20gratuita%20de%20energia%20solar.";

export function FinalCTA() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative py-20 sm:py-28 overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-dark to-[#040d26] -z-10" />

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-solar/10 blur-[150px] -z-[5]" />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-solar/5 blur-[120px] -z-[5]" />

      {/* Dot pattern */}
      <div className="absolute inset-0 opacity-[0.03] -z-[5]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
        backgroundSize: '32px 32px',
      }} />

      <div className={`relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <span className="text-sm font-semibold uppercase tracking-widest text-solar">
          Não perca mais tempo
        </span>

        <h2 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl leading-[1.1]">
          Todo mês que você espera é dinheiro que continua indo para a concessionária.
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60">
          Fale agora com um engenheiro da Prosolar e descubra quanto você pode economizar. A simulação é gratuita e sem compromisso.
        </p>

        <div className="mt-10">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pulse inline-flex items-center gap-3 rounded-full bg-solar px-10 py-5 text-lg font-extrabold text-navy shadow-2xl shadow-solar/25 transition-all hover:bg-solar-dark hover:shadow-solar/40 active:scale-[0.98] sm:text-xl"
          >
            Quero Minha Simulação Gratuita
            <ArrowRight className="h-6 w-6" strokeWidth={2.5} />
          </a>
        </div>

        <p className="mt-5 text-sm text-white/40">
          Sem compromisso. Resposta em até 24h úteis.
        </p>
      </div>
    </section>
  );
}
