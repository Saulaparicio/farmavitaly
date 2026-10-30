import { ChevronDown, ShieldCheck, Sparkles, Stethoscope } from "lucide-react";
import { Reveal, WhatsAppButton } from "./ui";
import { WA_MESSAGES } from "../lib/site";

const BADGES = [
  { icon: ShieldCheck, label: "Regulado por el MINSA" },
  { icon: Stethoscope, label: "Respaldado por ADEIWA PHARMA" },
  { icon: Sparkles, label: "Estándares farmacéuticos" },
];

export default function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-[100svh] flex-col overflow-hidden bg-forest-950">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/images/hero.jpg"
          alt="Laboratorio botánico de cannabis medicinal"
          className="h-full w-full scale-105 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-950/95 via-forest-950/70 to-forest-950/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-transparent to-forest-950/60" />
      </div>

      {/* Giant watermark */}
      <span
        aria-hidden="true"
        className="text-outline pointer-events-none absolute -right-6 top-1/2 hidden -translate-y-1/2 select-none font-display text-[22vw] font-bold italic leading-none opacity-60 xl:block"
      >
        Vitaly
      </span>

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-5 pb-28 pt-40 sm:px-8">
        <Reveal>
          <span className="inline-flex items-center gap-2.5 rounded-full border border-gold-400/30 bg-forest-900/50 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.24em] text-gold-300 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-wa opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-wa" />
            </span>
            Panamá · Acceso legal y supervisado
          </span>
        </Reveal>

        <Reveal delay={120}>
          <h1 className="mt-7 max-w-3xl font-display text-[13vw] font-medium leading-[1.02] tracking-tight text-cream sm:text-7xl lg:text-[5.4rem]">
            Cannabis medicinal,
            <br />
            <em className="font-light italic text-gold-300">con excelencia</em>{" "}
            farmacéutica
          </h1>
        </Reveal>

        <Reveal delay={240}>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-cream/70 sm:text-lg">
            Formulaciones CBD, THC y veterinarias desarrolladas bajo estándares
            farmacéuticos, para responder a distintas necesidades clínicas de
            forma segura, legal y regulada.
          </p>
        </Reveal>

        <Reveal delay={360} className="mt-10 flex flex-wrap items-center gap-4">
          <WhatsAppButton message={WA_MESSAGES.general} large>
            Escríbenos por WhatsApp
          </WhatsAppButton>
          <a
            href="#proceso"
            className="group inline-flex items-center gap-2.5 rounded-full border border-cream/25 px-8 py-4 text-base font-semibold text-cream backdrop-blur-sm transition-all duration-300 hover:border-gold-300/60 hover:text-gold-300"
          >
            Conocer el proceso
            <ChevronDown className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-y-0.5" />
          </a>
        </Reveal>

        <Reveal delay={480} className="mt-14 flex flex-wrap gap-x-8 gap-y-4">
          {BADGES.map(({ icon: Icon, label }) => (
            <span
              key={label}
              className="inline-flex items-center gap-2.5 text-[13px] font-semibold text-cream/60"
            >
              <Icon className="h-4.5 w-4.5 text-gold-400" strokeWidth={1.8} />
              {label}
            </span>
          ))}
        </Reveal>
      </div>

      {/* Scroll hint */}
      <a
        href="#productos"
        aria-label="Desplázate hacia abajo"
        className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2 text-cream/50 transition-colors hover:text-gold-300"
      >
        <ChevronDown className="h-6 w-6 animate-scroll-hint" />
      </a>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-forest-950 to-transparent" />
    </section>
  );
}
