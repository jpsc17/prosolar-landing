import { Sun, Phone, MapPin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-navy-dark py-14 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Prosolar"
                className="h-10 w-10 object-contain brightness-0 invert"
              />
              <span className="font-heading text-xl font-extrabold">Prosolar</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Prosolar Energia Fotovoltaica. Engenharia solar chave na mão para residências, empresas e propriedades rurais no Pará.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-solar">
              Contato
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-solar" />
                <span>Av. Gentil Bittencourt, 1520 — Belém, PA</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-solar" />
                <a href="tel:+5591982298619" className="transition-colors hover:text-solar">
                  (91) 98229-8619
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-solar" />
                <a href="mailto:contato@prosolar.eng.br" className="transition-colors hover:text-solar">
                  contato@prosolar.eng.br
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-solar">
              Informações Legais
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-white/60">
              <li>CNPJ: 00.000.000/0001-00</li>
              <li>Registro CREA-PA</li>
              <li>Responsável Técnico Registrado</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-white/40">
          &copy; {new Date().getFullYear()} Prosolar Energia Fotovoltaica. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
