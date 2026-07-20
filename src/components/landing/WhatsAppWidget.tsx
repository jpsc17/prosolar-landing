import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5591982298619?text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20um%20engenheiro%20sobre%20energia%20solar.";

export function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {/* Expanded widget */}
      {isOpen && (
        <div className="animate-scale-in w-72 rounded-2xl bg-white shadow-2xl border border-border overflow-hidden origin-bottom-right">
          {/* Header */}
          <div className="bg-[#075E54] px-5 py-4 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-white/20">
                  <MessageCircle className="h-5 w-5" fill="currentColor" fillOpacity={0.2} />
                </div>
                <div>
                  <div className="text-sm font-bold">Prosolar</div>
                  <div className="text-xs text-white/80">Engenheiro Online</div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="grid h-8 w-8 place-items-center rounded-full transition-colors hover:bg-white/10"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Body */}
          <div className="p-5">
            <div className="rounded-xl bg-gray-bg p-4">
              <p className="text-sm text-navy font-medium">
                💬 Fale com um Engenheiro
              </p>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                Tire suas dúvidas sobre energia solar, solicite um orçamento ou agende uma visita técnica.
              </p>
              <div className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                Resposta média: até 5 minutos
              </div>
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 text-sm font-bold text-white transition-all hover:bg-[#1da851] active:scale-[0.98]"
            >
              <MessageCircle className="h-4 w-4" />
              Conversar Agora
            </a>
          </div>
        </div>
      )}

      {/* Floating button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-xl transition-all hover:scale-110 hover:shadow-2xl sm:h-16 sm:w-16"
        aria-label="Abrir WhatsApp"
      >
        {/* Ping animation */}
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30" />

        {isOpen ? (
          <X className="relative h-6 w-6 sm:h-7 sm:w-7" strokeWidth={2.5} />
        ) : (
          <MessageCircle
            className="relative h-6 w-6 sm:h-7 sm:w-7"
            strokeWidth={2}
            fill="currentColor"
            fillOpacity={0.15}
          />
        )}
      </button>
    </div>
  );
}
