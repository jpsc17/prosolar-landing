import { useState, useMemo } from "react";
import { ArrowRight, Zap, TrendingUp, CalendarClock, Sun } from "lucide-react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const WHATSAPP_BASE = "https://wa.me/5591982298619";

const PROFILES = [
  { id: "residencial", label: "Residencial", icon: "🏠" },
  { id: "comercial", label: "Comercial", icon: "🏢" },
  { id: "rural", label: "Rural", icon: "🌾" },
] as const;

const CITIES = [
  "Boa Vista - RR",
  "Belém - PA",
  "Ananindeua - PA",
  "Manaus - AM",
  "Macapá - AP",
  "Palmas - TO",
  "Porto Velho - RO",
  "Rio Branco - AC",
  "Castanhal - PA",
  "Marabá - PA",
  "Santarém - PA",
  "Outra cidade",
];

// Simplified solar calculation based on average Brazilian solar irradiation
function calculateSolar(monthlyBill: number) {
  const annualSavings = monthlyBill * 12 * 0.92; // 92% average savings
  const savings25y = annualSavings * 25;
  const systemCost = monthlyBill * 50; // rough multiplier for system cost
  const paybackMonths = Math.ceil(systemCost / (annualSavings / 12));
  const powerKw = Math.round((monthlyBill / 0.95) / 100); // rough kWp estimation

  return {
    annualSavings,
    savings25y,
    paybackMonths,
    powerKw: Math.max(powerKw, 2),
  };
}

export function Simulator() {
  const [profile, setProfile] = useState<string>("residencial");
  const [bill, setBill] = useState<number>(500);
  const [city, setCity] = useState<string>("Boa Vista - RR");
  const [showResult, setShowResult] = useState(false);
  const { ref, isVisible } = useScrollAnimation();

  const result = useMemo(() => calculateSolar(bill), [bill]);

  const whatsappMessage = encodeURIComponent(
    `Olá! Fiz a simulação no site e gostaria de receber minha análise completa.\n\n` +
    `📋 Perfil: ${profile}\n` +
    `💰 Conta mensal: R$ ${bill}\n` +
    `📍 Cidade: ${city}\n` +
    `📊 Economia anual estimada: R$ ${result.annualSavings.toLocaleString("pt-BR", { maximumFractionDigits: 0 })}\n` +
    `⚡ Potência sugerida: ${result.powerKw} kWp`
  );

  return (
    <section
      id="simulador"
      className="relative py-20 sm:py-28 overflow-hidden"
      ref={ref}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-bg via-white to-white -z-10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-solar/8 blur-[120px] -z-10" />

      <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-solar-dark">
            Simulador de Economia
          </span>
          <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-navy sm:text-4xl lg:text-5xl">
            Descubra Quanto Dinheiro Você Está Entregando Para a Concessionária
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Faça uma simulação rápida e veja em tempo real sua economia potencial.
          </p>
        </div>

        {/* Simulator Card */}
        <div className="mx-auto mt-12 max-w-4xl">
          <div className="relative rounded-3xl border border-white/60 bg-white p-6 shadow-2xl shadow-navy/5 sm:p-10">
            {/* Glow effect */}
            <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-solar/20 via-transparent to-navy/10 -z-10 blur-sm" />

            {/* Profile selector */}
            <div>
              <label className="text-sm font-semibold text-navy uppercase tracking-wider">
                Seu Perfil
              </label>
              <div className="mt-3 grid grid-cols-3 gap-3">
                {PROFILES.map(({ id, label, icon }) => (
                  <button
                    key={id}
                    onClick={() => setProfile(id)}
                    className={`rounded-xl border-2 px-4 py-3.5 text-center font-semibold transition-all ${
                      profile === id
                        ? "border-solar bg-solar/10 text-navy shadow-sm"
                        : "border-border bg-white text-muted-foreground hover:border-solar/40 hover:bg-solar/5"
                    }`}
                  >
                    <span className="text-xl">{icon}</span>
                    <span className="mt-1 block text-sm">{label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Bill slider */}
            <div className="mt-8">
              <div className="flex items-baseline justify-between">
                <label className="text-sm font-semibold text-navy uppercase tracking-wider">
                  Valor Mensal da Conta
                </label>
                <span className="font-heading text-2xl font-extrabold text-navy sm:text-3xl">
                  R$ {bill.toLocaleString("pt-BR")}
                </span>
              </div>
              <input
                type="range"
                min={200}
                max={15000}
                step={50}
                value={bill}
                onChange={(e) => {
                  setBill(Number(e.target.value));
                  setShowResult(true);
                }}
                className="mt-4 w-full h-2 rounded-full appearance-none cursor-pointer
                  [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-solar [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:hover:scale-125
                  [&::-moz-range-thumb]:w-6 [&::-moz-range-thumb]:h-6 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-solar [&::-moz-range-thumb]:shadow-lg [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-white"
                style={{
                  background: `linear-gradient(to right, #F9A826 0%, #F9A826 ${((bill - 200) / (15000 - 200)) * 100}%, #e2e8f0 ${((bill - 200) / (15000 - 200)) * 100}%, #e2e8f0 100%)`,
                }}
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>R$ 200</span>
                <span>R$ 15.000</span>
              </div>
            </div>

            {/* City */}
            <div className="mt-8">
              <label className="text-sm font-semibold text-navy uppercase tracking-wider">
                Cidade
              </label>
              <select
                value={city}
                onChange={(e) => {
                  setCity(e.target.value);
                  setShowResult(true);
                }}
                className="mt-3 w-full rounded-xl border-2 border-border bg-white px-4 py-3.5 text-sm font-medium text-navy transition-colors focus:border-solar focus:outline-none focus:ring-2 focus:ring-solar/20"
              >
                {CITIES.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            {/* Results */}
            {showResult && (
              <div className="mt-10 animate-fade-up">
                <div className="rounded-2xl bg-gray-bg p-6 sm:p-8">
                  <h3 className="text-center text-sm font-semibold uppercase tracking-widest text-solar-dark">
                    Sua Economia Estimada
                  </h3>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <ResultCard
                      icon={TrendingUp}
                      value={`R$ ${result.annualSavings.toLocaleString("pt-BR", { maximumFractionDigits: 0 })}`}
                      label="Economia por Ano"
                    />
                    <ResultCard
                      icon={Zap}
                      value={`R$ ${result.savings25y.toLocaleString("pt-BR", { maximumFractionDigits: 0 })}`}
                      label="Economia em 25 Anos"
                    />
                    <ResultCard
                      icon={CalendarClock}
                      value={`${result.paybackMonths} meses`}
                      label="Retorno do Investimento"
                    />
                    <ResultCard
                      icon={Sun}
                      value={`${result.powerKw} kWp`}
                      label="Potência Sugerida"
                    />
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-8 text-center">
                  <a
                    href={`${WHATSAPP_BASE}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-pulse inline-flex items-center gap-2.5 rounded-full bg-solar px-8 py-4 text-base font-bold text-navy shadow-lg transition-all hover:bg-solar-dark hover:shadow-xl active:scale-[0.98] sm:text-lg"
                  >
                    Receber Simulação Completa no WhatsApp
                    <ArrowRight className="h-5 w-5" strokeWidth={2.5} />
                  </a>
                  <p className="mt-3 text-sm text-muted-foreground">
                    Valores aproximados. O engenheiro enviará a análise exata.
                  </p>
                </div>
              </div>
            )}

            {/* Show results button if not yet shown */}
            {!showResult && (
              <div className="mt-8 text-center">
                <button
                  onClick={() => setShowResult(true)}
                  className="btn-pulse inline-flex items-center gap-2.5 rounded-full bg-solar px-8 py-4 text-base font-bold text-navy shadow-lg transition-all hover:bg-solar-dark hover:shadow-xl active:scale-[0.98] sm:text-lg"
                >
                  Calcular Minha Economia
                  <ArrowRight className="h-5 w-5" strokeWidth={2.5} />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function ResultCard({
  icon: Icon,
  value,
  label,
}: {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-xl bg-white p-5 text-center shadow-sm transition-all hover:shadow-md">
      <Icon className="mx-auto h-6 w-6 text-solar" strokeWidth={2} />
      <div className="mt-3 font-heading text-xl font-extrabold text-navy sm:text-2xl">
        {value}
      </div>
      <div className="mt-1 text-xs font-medium text-muted-foreground">
        {label}
      </div>
    </div>
  );
}
