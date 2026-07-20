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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.05)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-[72px] items-center justify-between">
          {/* Logo — 25-35% larger for premium feel */}
          <a href="#top" className="flex items-center gap-3 group shrink-0">
            <img
              src="/logo.png"
              alt="Prosolar Energia Solar"
              className="h-[52px] w-[52px] object-contain transition-transform group-hover:scale-105"
            />
            <span className="text-2xl font-bold tracking-tight text-navy font-heading">
              Prosolar
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-navy rounded-lg hover:bg-navy/5"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Right — CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full bg-solar px-5 py-2.5 text-sm font-bold text-navy shadow-sm transition-all hover:bg-solar-dark hover:shadow-md active:scale-[0.98]"
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
