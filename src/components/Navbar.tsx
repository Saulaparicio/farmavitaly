import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "../utils/cn";
import { Logo, WhatsAppButton } from "./ui";
import { WA_MESSAGES } from "../lib/site";

const LINKS = [
  { label: "Productos", href: "#productos" },
  { label: "Ciencia", href: "#ciencia" },
  { label: "Proceso", href: "#proceso" },
  { label: "Diagnósticos", href: "#diagnosticos" },
  { label: "Clínicas", href: "#clinicas" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-forest-950/8 bg-cream/85 shadow-[0_8px_40px_-16px_rgba(7,23,16,0.25)] backdrop-blur-xl"
            : "bg-transparent",
        )}
      >
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8">
          <Logo dark={!scrolled} />

          <nav className="hidden items-center gap-7 lg:flex">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "text-[13px] font-semibold tracking-wide transition-colors",
                  scrolled
                    ? "text-forest-950/70 hover:text-forest-950"
                    : "text-cream/75 hover:text-cream",
                )}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <WhatsAppButton message={WA_MESSAGES.general} variant="primary" className="!py-2.5">
              Contacto
            </WhatsAppButton>
          </div>

          <button
            onClick={() => setOpen(true)}
            aria-label="Abrir menú"
            className={cn(
              "flex h-11 w-11 items-center justify-center rounded-full border transition-colors lg:hidden",
              scrolled
                ? "border-forest-950/15 text-forest-950"
                : "border-cream/25 text-cream",
            )}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-[60] flex flex-col bg-forest-950/98 backdrop-blur-xl transition-all duration-500 lg:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <div className="flex h-[76px] items-center justify-between px-5">
          <Logo dark />
          <button
            onClick={() => setOpen(false)}
            aria-label="Cerrar menú"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/25 text-cream"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="flex flex-1 flex-col items-start justify-center gap-2 px-8">
          {LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={cn(
                "font-display text-4xl font-medium text-cream transition-all duration-500 hover:italic hover:text-gold-300",
                open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
              )}
              style={{ transitionDelay: `${120 + i * 60}ms` }}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="px-8 pb-12">
          <WhatsAppButton
            message={WA_MESSAGES.general}
            variant="primary"
            large
            className="w-full"
          >
            Escríbenos por WhatsApp
          </WhatsAppButton>
        </div>
      </div>
    </>
  );
}
