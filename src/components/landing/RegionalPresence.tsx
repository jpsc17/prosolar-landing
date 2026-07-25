import { MapPin } from "lucide-react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const STATES = [
  { name: "Roraima", abbr: "RR", highlight: true, desc: "Sede — Atuação consolidada" },
  { name: "Pará", abbr: "PA", highlight: true, desc: "Expansão estratégica" },
  { name: "Amazonas", abbr: "AM", highlight: false, desc: "Atendimento ativo" },
  { name: "Amapá", abbr: "AP", highlight: false, desc: "Atendimento ativo" },
  { name: "Acre", abbr: "AC", highlight: false, desc: "Atendimento ativo" },
  { name: "Rondônia", abbr: "RO", highlight: false, desc: "Atendimento ativo" },
  { name: "Tocantins", abbr: "TO", highlight: false, desc: "Atendimento ativo" },
];

export function RegionalPresence() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-16 sm:py-28 bg-navy relative overflow-hidden" ref={ref}>
      {/* Decorative */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
        backgroundSize: '40px 40px',
      }} />
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-solar/8 blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-solar/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-20">
          {/* Left — Map Illustration */}
          <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
            {/* Stylized map representation */}
            <div className="relative rounded-2xl sm:rounded-3xl bg-navy-dark/50 border border-white/5 p-5 sm:p-8 md:p-12 overflow-hidden">
              {/* Background grid representing map */}
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                backgroundSize: '30px 30px',
              }} />

              {/* State dots on "map" */}
              <div className="relative grid grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                {STATES.map(({ name, abbr, highlight, desc }, i) => (
                  <div
                    key={abbr}
                    className={`flex flex-col items-center text-center transition-all duration-500 ${
                      isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
                    }`}
                    style={{ transitionDelay: isVisible ? `${(i + 1) * 100}ms` : "0ms" }}
                  >
                    <div className={`grid h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 place-items-center rounded-xl sm:rounded-2xl transition-all ${
                      highlight
                        ? "bg-solar shadow-lg shadow-solar/20"
                        : "bg-white/10 border border-white/10"
                    }`}>
                      <span className={`font-heading text-lg sm:text-xl md:text-2xl font-extrabold ${
                        highlight ? "text-navy" : "text-white/80"
                      }`}>
                        {abbr}
                      </span>
                    </div>
                    <span className={`mt-2 text-xs sm:text-sm font-semibold ${
                      highlight ? "text-solar" : "text-white/60"
                    }`}>
                      {name}
                    </span>
                    {highlight && (
                      <span className="mt-0.5 text-[10px] text-white/40">
                        {desc}
                      </span>
                    )}
                  </div>
                ))}
              </div>

              {/* Connection lines decorative */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-dashed border-solar/20 -z-0" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 rounded-full border border-dashed border-white/5 -z-0" />
            </div>
          </div>

          {/* Right — Content */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}>
            <span className="text-sm font-semibold uppercase tracking-widest text-solar">
              Presença Regional
            </span>
            <h2 className="mt-3 font-heading text-2xl font-extrabold tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
              Onde Atuamos
            </h2>
            <p className="mt-3 text-base text-white/60 leading-relaxed sm:text-lg">
              Levamos soluções fotovoltaicas para residências, empresas e propriedades rurais em toda a <strong className="text-white font-semibold">Região Norte do Brasil</strong>.
            </p>

            <div className="mt-6 rounded-2xl bg-white/5 border border-white/10 p-6">
              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-solar/15">
                  <MapPin className="h-6 w-6 text-solar" strokeWidth={1.8} />
                </div>
                <div>
                  <h3 className="font-heading text-base font-bold text-white">
                    Empresa Consolidada
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-white/60">
                    A Prosolar já possui atuação consolidada em <strong className="text-solar">Roraima</strong> e chega ao <strong className="text-solar">Pará</strong> trazendo sua experiência em projetos fotovoltaicos de alta performance para toda a Região Norte.
                  </p>
                </div>
              </div>
            </div>

            {/* States list */}
            <div className="mt-6 flex flex-wrap gap-2">
              {STATES.map(({ name, abbr, highlight }) => (
                <span
                  key={abbr}
                  className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
                    highlight
                      ? "bg-solar/20 text-solar"
                      : "bg-white/5 text-white/50"
                  }`}
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
