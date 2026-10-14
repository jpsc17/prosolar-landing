import { useState, useMemo } from "react";
import { ArrowRight, Zap, TrendingUp, CalendarClock, Sun, ShieldAlert, Sparkles, CheckCircle2, MessageSquare } from "lucide-react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const WHATSAPP_BASE = "https://wa.me/5591982298619";

const PROFILES = [
  { id: "residencial", label: "Residencial", desc: "Casas e Condomínios", icon: "🏠", defaultBill: 650, min: 250, max: 8000, step: 50 },
  { id: "comercial", label: "Comercial", desc: "Comércios e Clínicas", icon: "🏢", defaultBill: 3500, min: 1000, max: 35000, step: 100 },
  { id: "rural", label: "Rural / Agro", desc: "Agronegócio e Fazendas", icon: "🌾", defaultBill: 5000, min: 1500, max: 60000, step: 250 },
] as const;

const QUICK_PRESETS: Record<string, number[]> = {
  residencial: [400, 750, 1200, 2500, 4500],
  comercial: [1500, 3000, 6000, 12000, 25000],
  rural: [2500, 5000, 10000, 20000, 45000],
};

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
  "Outra cidade da Região Norte",
];

// Cálculo de estimativa solar
function calculateSolar(monthlyBill: number) {
  const annualSavings = monthlyBill * 12 * 0.92; // 92% de economia média
  const savings25y = annualSavings * 25;
  const newMonthlyBill = Math.round(monthlyBill * 0.08); // Taxa mínima da rede
  const powerKw = Math.max(Math.round((monthlyBill / 0.95) / 95), 2);
  const paybackYears = Math.min(Math.max((monthlyBill * 42 / annualSavings), 2.5), 4.2).toFixed(1);

  return {
    annualSavings,
    savings25y,
    newMonthlyBill,
    paybackYears,
    powerKw,
  };
}

export function Simulator() {
  const [profile, setProfile] = useState<string>("residencial");
  const [bill, setBill] = useState<number>(650);
  const [city, setCity] = useState<string>("Boa Vista - RR");
  const { ref, isVisible } = useScrollAnimation();

  const currentProfileData = PROFILES.find((p) => p.id === profile) ?? PROFILES[0];
  const result = useMemo(() => calculateSolar(bill), [bill]);

  const handleProfileChange = (newProfile: string) => {
    setProfile(newProfile);
    const p = PROFILES.find((item) => item.id === newProfile);
    if (p) setBill(p.defaultBill);
  };

  const whatsappMessage = encodeURIComponent(
    `Olá! Fiz a simulação de energia solar no site da Prosolar e quero minha proposta personalizada.\n\n` +
    `📋 Perfil: ${currentProfileData.label}\n` +
    `💰 Conta atual de energia: R$ ${bill.toLocaleString("pt-BR")}/mês\n` +
    `📍 Cidade: ${city}\n` +
    `📉 Nova conta estimada: R$ ${result.newMonthlyBill.toLocaleString("pt-BR")}/mês\n` +
    `💵 Economia anual estimada: R$ ${result.annualSavings.toLocaleString("pt-BR", { maximumFractionDigits: 0 })}\n` +
    `⚡ Potência sugerida: ~${result.powerKw} kWp`
  );

  return (
    <section
      id="simulador"
      className="relative py-20 sm:py-32 overflow-hidden bg-slate-950 text-white"
      ref={ref}
    >
      {/* Luzes solares de fundo no modo cockpit escuro */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[650px] -z-10 pointer-events-none">
        <div className="absolute top-10 left-1/3 w-[600px] h-[600px] rounded-full bg-amber-500/15 blur-[160px]" />
        <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] rounded-full bg-emerald-500/10 blur-[140px]" />
      </div>

      <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        
        {/* Cabeçalho do Cockpit */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 border border-amber-500/30 px-4 py-1.5 text-xs font-extrabold text-amber-400 tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Simulador de Economia em Tempo Real</span>
          </div>

          <h2 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            Descubra Quanto Você Vai <span className="gradient-text-solar">Deixar de Pagar</span> Todo Mês
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 max-w-2xl mx-auto">
            Ajuste o valor da sua conta no controle abaixo e veja a mágica da energia solar transformando despesa fixa em patrimônio.
          </p>
        </div>

        {/* Card Principal: Cockpit Financeiro Solar */}
        <div className="mx-auto mt-12 max-w-5xl">
          <div className="relative rounded-3xl border border-white/10 bg-slate-900/90 backdrop-blur-2xl p-6 sm:p-10 shadow-2xl">
            
            <div className="grid gap-10 lg:grid-cols-12">
              
              {/* Coluna 1: Controles da Simulação (7 colunas) */}
              <div className="lg:col-span-7 space-y-8">
                
                {/* 1. Perfil com Abas Visuais */}
                <div>
                  <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                    <span>1. Onde você consome energia?</span>
                    <span className="text-amber-400 lowercase text-[11px]">selecione o tipo</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2.5">
                    {PROFILES.map((p) => {
                      const isSelected = profile === p.id;
                      return (
                        <button
                          key={p.id}
                          type="button"
                          onClick={() => handleProfileChange(p.id)}
                          className={`flex flex-col items-center justify-center p-3 rounded-2xl border transition-all cursor-pointer ${
                            isSelected
                              ? "border-amber-500 bg-amber-500/15 text-white shadow-lg shadow-amber-500/10"
                              : "border-white/10 bg-slate-800/60 text-slate-400 hover:border-white/20 hover:text-white"
                          }`}
                        >
                          <span className="text-2xl">{p.icon}</span>
                          <span className="mt-1 text-xs font-bold">{p.label}</span>
                          <span className="text-[10px] text-slate-400 hidden sm:inline">{p.desc}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 2. Slider Dinâmico de Conta Mensal */}
                <div className="p-5 rounded-2xl bg-slate-950/60 border border-white/5 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      2. Quanto você paga de luz hoje?
                    </span>
                    <span className="text-2xl sm:text-3xl font-extrabold font-heading text-amber-400 tabular-nums">
                      R$ {bill.toLocaleString("pt-BR")}
                      <span className="text-xs text-slate-400 font-normal ml-1">/mês</span>
                    </span>
                  </div>

                  {/* Input Range Customizado */}
                  <input
                    type="range"
                    min={currentProfileData.min}
                    max={currentProfileData.max}
                    step={currentProfileData.step}
                    value={bill}
                    onChange={(e) => setBill(Number(e.target.value))}
                    className="w-full h-3 rounded-full appearance-none cursor-pointer bg-slate-800
                      [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-7 [&::-webkit-slider-thumb]:h-7 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gradient-to-r [&::-webkit-slider-thumb]:from-amber-400 [&::-webkit-slider-thumb]:to-amber-500 [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:shadow-amber-500/50 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:hover:scale-115 [&::-webkit-slider-thumb]:transition-transform"
                    style={{
                      background: `linear-gradient(to right, #F59E0B 0%, #EA580C ${((bill - currentProfileData.min) / (currentProfileData.max - currentProfileData.min)) * 100}%, #334155 ${((bill - currentProfileData.min) / (currentProfileData.max - currentProfileData.min)) * 100}%, #334155 100%)`,
                    }}
                  />

                  <div className="flex justify-between text-[11px] text-slate-500 font-semibold">
                    <span>Mín: R$ {currentProfileData.min.toLocaleString("pt-BR")}</span>
                    <span>Máx: R$ {currentProfileData.max.toLocaleString("pt-BR")}</span>
                  </div>

                  {/* Botões de Atalho Rápido */}
                  <div className="pt-2 flex flex-wrap items-center gap-1.5">
                    <span className="text-[10px] text-slate-400 uppercase font-semibold mr-1">Atalhos:</span>
                    {(QUICK_PRESETS[profile] || QUICK_PRESETS.residencial).map((val) => (
                      <button
                        key={val}
                        type="button"
                        onClick={() => setBill(val)}
                        className={`text-xs px-2.5 py-1 rounded-lg border transition-all cursor-pointer ${
                          bill === val
                            ? "bg-amber-500 text-slate-950 font-extrabold border-amber-400"
                            : "bg-slate-800/80 text-slate-300 border-white/10 hover:border-amber-400/50 hover:bg-slate-800"
                        }`}
                      >
                        R$ {val.toLocaleString("pt-BR")}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Seleção de Cidade */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    3. Cidade da instalação
                  </label>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full rounded-xl border border-white/15 bg-slate-950 px-4 py-3 text-sm font-semibold text-white transition-colors focus:border-amber-400 focus:outline-none"
                  >
                    {CITIES.map((c) => (
                      <option key={c} value={c} className="bg-slate-900 text-white">
                        {c}
                      </option>
                    ))}
                  </select>
                </div>

              </div>

              {/* Coluna 2: Resultados em Tempo Real & Comparativo (5 colunas) */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-6 bg-gradient-to-b from-slate-950/80 to-slate-900/90 rounded-2xl p-6 border border-amber-500/20 shadow-xl">
                
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <span className="text-xs font-bold text-amber-400 uppercase tracking-widest flex items-center gap-1.5">
                      <Zap className="w-4 h-4" /> Comparativo Mensal
                    </span>
                    <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                      92% a 95% de Redução
                    </span>
                  </div>

                  {/* Comparativo Visual: ANTES vs DEPOIS */}
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    
                    {/* Sem Energia Solar */}
                    <div className="rounded-xl bg-red-950/20 border border-red-500/20 p-3.5 flex flex-col justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-red-400 flex items-center gap-1">
                        <ShieldAlert className="w-3 h-3" /> Hoje Sem Solar
                      </span>
                      <div className="mt-2">
                        <div className="text-xl font-extrabold text-red-200 tabular-nums">
                          R$ {bill.toLocaleString("pt-BR")}
                        </div>
                        <span className="text-[10px] text-slate-400">gasto 100% perdido</span>
                      </div>
                    </div>

                    {/* Com a Prosolar */}
                    <div className="rounded-xl bg-emerald-950/30 border border-emerald-500/40 p-3.5 flex flex-col justify-between shadow-inner">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" /> Com Prosolar
                      </span>
                      <div className="mt-2">
                        <div className="text-xl font-extrabold text-emerald-300 tabular-nums">
                          ~ R$ {result.newMonthlyBill.toLocaleString("pt-BR")}
                        </div>
                        <span className="text-[10px] text-emerald-400/80">taxa mínima da rede</span>
                      </div>
                    </div>

                  </div>

                  {/* Métricas Principais */}
                  <div className="mt-5 space-y-3">
                    
                    {/* Economia Anual em Destaque Máximo */}
                    <div className="rounded-xl bg-gradient-to-r from-amber-500/20 via-amber-400/10 to-transparent p-4 border border-amber-500/30">
                      <span className="text-xs font-semibold text-amber-200">Economia no 1º Ano:</span>
                      <div className="text-3xl font-extrabold font-heading text-amber-400 tabular-nums mt-0.5">
                        R$ {result.annualSavings.toLocaleString("pt-BR", { maximumFractionDigits: 0 })}
                      </div>
                      <span className="text-[11px] text-slate-400">Dinheiro livre para investir no que importa.</span>
                    </div>

                    {/* Grid com 3 Métricas Secundárias */}
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      
                      <div className="rounded-lg bg-white/5 p-2.5 border border-white/5">
                        <span className="text-[10px] text-slate-400 flex items-center gap-1">
                          <TrendingUp className="w-3 h-3 text-amber-400" /> Em 25 Anos:
                        </span>
                        <div className="font-bold text-white text-sm tabular-nums mt-1">
                          R$ {result.savings25y.toLocaleString("pt-BR", { maximumFractionDigits: 0 })}
                        </div>
                      </div>

                      <div className="rounded-lg bg-white/5 p-2.5 border border-white/5">
                        <span className="text-[10px] text-slate-400 flex items-center gap-1">
                          <CalendarClock className="w-3 h-3 text-emerald-400" /> Retorno (Payback):
                        </span>
                        <div className="font-bold text-white text-sm tabular-nums mt-1">
                          ~ {result.paybackYears} anos
                        </div>
                      </div>

                    </div>

                  </div>
                </div>

                {/* Botão de Ação WhatsApp Direto com Dados Prontos */}
                <div className="pt-2">
                  <a
                    href={`${WHATSAPP_BASE}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-shimmer w-full inline-flex items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-500 px-6 py-4 text-sm sm:text-base font-extrabold text-slate-950 shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/35 transition-all active:scale-[0.98]"
                  >
                    <MessageSquare className="w-5 h-5 fill-current" />
                    <span>Quero Essa Economia no WhatsApp</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <p className="mt-2.5 text-center text-[11px] text-slate-400 flex items-center justify-center gap-1">
                    <span>⚡ Estudo técnico e dimensionamento 100% gratuito</span>
                  </p>
                </div>

              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
