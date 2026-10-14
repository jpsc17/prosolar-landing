import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5591982298619?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20de%20energia%20solar.";

const NAV_LINKS = [
  { label: "Simulador", href: "#simulador" },
  { label: "Benefícios", href: "#beneficios" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Projetos", href: "#projetos" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/85 backdrop-blur-xl border-b border-slate-200/60 shadow-xs transition-all">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-[74px] items-center justify-between">
          {/* Logo — Proporções premium */}
          <a href="#top" className="flex items-center gap-3.5 group shrink-0">
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-amber-400/30 blur-xs -z-10 group-hover:bg-amber-400/50 transition-colors" />
              <img
                src="/logo.png"
                alt="Prosolar Energia Solar"
                className="h-[34px] w-[34px] lg:h-[40px] lg:w-[40px] object-contain transition-transform group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-[28px] lg:text-[34px] leading-none font-bold tracking-tight text-navy font-heading">
                Prosolar
              </span>
              <span className="text-[10px] font-semibold tracking-widest text-amber-600 uppercase">
                Energia Solar
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-50/80 px-3 py-1.5 rounded-full border border-slate-200/60 shadow-2xs">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="px-3 py-1.5 text-xs font-semibold text-slate-600 transition-all hover:text-navy hover:bg-white rounded-full hover:shadow-2xs"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Right — Status + CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/60 text-[11px] font-semibold text-emerald-800">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Plantão Solar Ativo</span>
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 px-5 py-2.5 text-xs sm:text-sm font-bold text-slate-950 shadow-md shadow-amber-500/20 hover:shadow-lg hover:shadow-amber-500/30 transition-all active:scale-[0.98]"
            >
              <Phone className="h-4 w-4" strokeWidth={2.5} />
              <span className="hidden sm:inline">Solicitar Orçamento</span>
              <span className="sm:hidden">Orçamento</span>
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden grid h-10 w-10 place-items-center rounded-lg transition-colors hover:bg-navy/5"
              aria-label="Menu"
            >
              {mobileOpen ? (
                <X className="h-5 w-5 text-navy" strokeWidth={2} />
              ) : (
                <Menu className="h-5 w-5 text-navy" strokeWidth={2} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-white/95 backdrop-blur-md animate-fade-in">
          <nav className="mx-auto max-w-7xl px-4 py-4 sm:px-6 space-y-1">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className="block rounded-lg px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-navy/5 hover:text-navy"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
