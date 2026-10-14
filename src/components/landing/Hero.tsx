import { useState } from "react";
import { ArrowRight, ShieldCheck, Key, CreditCard, MapPin, Sun, Zap, CheckCircle2, Star, Sparkles } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5591982298619?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20de%20energia%20solar.";

const PROFILES = [
  { id: "residencial", label: "Residencial", desc: "Casas e Condomínios", icon: "🏠" },
  { id: "comercial", label: "Comercial", desc: "Comércio e PMEs", icon: "🏢" },
  { id: "rural", label: "Rural / Agro", desc: "Fazendas e Agronegócio", icon: "🌾" },
];

const TRUST_BADGES = [
  { icon: ShieldCheck, text: "CREA Regularizado", desc: "Engenharia Certificada" },
  { icon: Key, text: "Chave na Mão", desc: "Instalação Completa" },
  { icon: CreditCard, text: "Até 120x", desc: "Parcelas que cabem no bolso" },
  { icon: MapPin, text: "Toda Região Norte", desc: "PA, RR, AM, AP, AC, RO, TO" },
];

export function Hero() {
  const [activeProfile, setActiveProfile] = useState("residencial");

  return (
    <section id="top" className="relative pt-[88px] pb-16 sm:pb-24 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white">
      {/* Luz ambiente e gradiente solar de fundo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[550px] -z-10 pointer-events-none">
        <div className="absolute top-12 left-1/4 w-[500px] h-[500px] rounded-full bg-amber-400/15 blur-[140px]" />
        <div className="absolute top-32 right-1/4 w-[400px] h-[400px] rounded-full bg-blue-500/10 blur-[130px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8 items-center pt-6 sm:pt-10">
          
          {/* Lado Esquerdo: Copywriting e Ações (7 colunas no desktop) */}
          <div className="lg:col-span-7 flex flex-col justify-center animate-fade-up">
            
            {/* Tag de Cobertura Regional */}
            <div className="inline-flex items-center gap-2 rounded-full bg-white border border-amber-200/80 px-3.5 py-1.5 text-xs font-bold text-slate-800 shadow-2xs w-fit">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
              </span>
              <span className="text-amber-700 font-extrabold flex items-center gap-1">
                <Sun className="h-3.5 w-3.5" /> LÍDER NO NORTE:
              </span>
              <span className="text-slate-600 font-medium">PA • RR • AM • AP • AC • RO • TO</span>
            </div>

            {/* Headline Principal */}
            <h1 className="mt-5 font-heading text-3xl font-extrabold leading-[1.12] tracking-tight text-navy sm:text-5xl lg:text-[3.25rem] xl:text-[3.6rem]">
              Transforme o Sol do Norte na{" "}
              <span className="gradient-text-solar">Maior Economia</span> da Sua Casa ou Empresa.
            </h1>

            {/* Subtítulo explicativo */}
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg md:text-xl">
              Reduza sua conta de luz em até <strong className="text-navy font-bold">95%</strong> com tecnologia fotovoltaica de padrão europeu e garantia de 25 anos de geração.
            </p>

            {/* Mini-Seletor de Perfil no próprio Hero */}
            <div className="mt-6 p-1.5 bg-slate-100/90 rounded-2xl border border-slate-200/80 max-w-xl shadow-2xs">
              <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider px-3 py-1">
                Selecione seu objetivo:
              </div>
              <div className="grid grid-cols-3 gap-1.5">
                {PROFILES.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setActiveProfile(p.id)}
                    className={`flex flex-col items-center justify-center py-2 px-2 rounded-xl text-center transition-all cursor-pointer ${
                      activeProfile === p.id
                        ? "bg-white text-navy shadow-xs font-bold border border-slate-200"
                        : "text-slate-600 hover:text-navy hover:bg-white/60 font-medium"
                    }`}
                  >
                    <span className="text-lg">{p.icon}</span>
                    <span className="text-xs mt-0.5 leading-tight">{p.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* CTAs de Alta Conversão */}
            <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shimmer inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 px-7 py-4 text-sm font-extrabold text-slate-950 shadow-lg shadow-amber-500/25 hover:shadow-xl hover:shadow-amber-500/35 transition-all active:scale-[0.98] sm:text-base md:text-lg"
              >
                <span>Solicitar Orçamento Gratuito</span>
                <ArrowRight className="h-5 w-5" strokeWidth={2.5} />
              </a>
              <a
                href="#simulador"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-slate-200 bg-white/80 backdrop-blur-xs px-6 py-3.5 text-sm font-bold text-navy shadow-2xs transition-all hover:border-amber-400 hover:bg-amber-50/40 hover:shadow-xs active:scale-[0.98]"
              >
                <Zap className="h-4 w-4 text-amber-500" />
                <span>Simular Minha Economia</span>
              </a>
            </div>

            {/* Trust badges em grid moderno */}
            <div className="mt-10 pt-6 border-t border-slate-200/60 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {TRUST_BADGES.map(({ icon: Icon, text, desc }) => (
                <div key={text} className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-slate-50 transition-colors">
                  <div className="p-1.5 rounded-lg bg-amber-50 border border-amber-200/60 text-amber-600 shrink-0 mt-0.5">
                    <Icon className="h-4 w-4" strokeWidth={2.5} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-navy leading-tight">{text}</div>
                    <div className="text-[10px] text-slate-500 leading-tight mt-0.5">{desc}</div>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Lado Direito: Foto Real em Destaque com Cards Flutuantes 3D (5 colunas) */}
          <div className="lg:col-span-5 relative animate-fade-up">
            
            {/* Efeito Glow solar por trás da foto */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-amber-400/25 via-amber-300/10 to-blue-500/15 blur-2xl -z-10" />

            {/* Moldura da Foto Real da Prosolar */}
            <div className="relative rounded-3xl p-2 bg-gradient-to-b from-white to-slate-100/90 shadow-2xl border border-slate-200/80">
              <img
                src="/projetos/instalacao-drone-telhado.jpg"
                alt="Instalação fotovoltaica residencial de alta potência pela Prosolar"
                className="w-full rounded-2xl object-cover aspect-[4/3] sm:aspect-[4/5] shadow-inner"
                loading="eager"
              />

              {/* Card Flutuante 1 — Topo: Avaliação & Garantia */}
              <div className="absolute -top-4 -right-2 sm:-top-5 sm:-right-4 glass-card rounded-2xl p-3 sm:p-3.5 shadow-xl border border-white/80 animate-float">
                <div className="flex items-center gap-2">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs font-extrabold text-navy">4.9/5</span>
                </div>
                <div className="text-[10px] font-semibold text-slate-500 mt-0.5">
                  Engenharia 100% Homologada
                </div>
              </div>

              {/* Card Flutuante 2 — Base: Economia Máxima */}
              <div className="absolute -bottom-5 -left-2 sm:-bottom-6 sm:-left-4 glass-solar rounded-2xl p-4 shadow-xl border border-amber-300/60 max-w-[250px]">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-3xl sm:text-4xl font-extrabold font-heading text-navy">
                    95%
                  </span>
                  <span className="text-xs font-bold text-amber-700 uppercase">
                    de Economia
                  </span>
                </div>
                <div className="mt-1 text-[11px] font-medium text-slate-600 leading-tight">
                  Livre dos aumentos da concessionária de energia.
                </div>
                <div className="mt-2.5 pt-2 border-t border-amber-200/80 flex items-center justify-between text-[11px] font-bold text-navy">
                  <span>+500 Usinas Ativas</span>
                  <span className="text-emerald-700">✓ Comprovado</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
