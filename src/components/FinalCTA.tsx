import { ArrowRight } from "lucide-react";
import { Reveal, WhatsAppButton } from "./ui";
import { WA_MESSAGES } from "../lib/site";

export default function FinalCTA() {
  return (
    <section className="texture-grain relative overflow-hidden bg-forest-950 py-24 sm:py-32">
      {/* Ambient */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[560px] w-[860px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-forest-600/20 blur-[160px]" />
      <span
        aria-hidden="true"
        className="text-outline pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 select-none text-center font-display text-[24vw] font-bold italic leading-none opacity-40"
      >
        Vitaly
      </span>

      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-gold-300">
            Empieza hoy tu camino al bienestar
          </p>
          <h2 className="mt-6 font-display text-5xl font-medium leading-[1.05] tracking-tight text-cream sm:text-6xl lg:text-7xl">
            Tu tratamiento,
            <br />
            <em className="italic text-gold-300">sin rodeos</em>
          </h2>
          <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-cream/65 sm:text-lg">
            Escríbenos por WhatsApp y un asesor te guiará por el proceso completo:
            certificación médica, registro SIUCMAA, carné PNEUCAM y compra en
            farmacias autorizadas.
          </p>
        </Reveal>

        <Reveal delay={180} className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <WhatsAppButton message={WA_MESSAGES.general} large>
            Hablar con un asesor
          </WhatsAppButton>
          <a
            href="#proceso"
            className="group inline-flex items-center gap-2.5 rounded-full border border-cream/25 px-8 py-4 text-base font-semibold text-cream transition-all duration-300 hover:border-gold-300/60 hover:text-gold-300"
          >
            Ver los 3 pasos
            <ArrowRight className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </Reveal>

        <Reveal delay={280}>
          <p className="mt-9 text-[13px] font-medium text-cream/40">
            Respuesta en minutos · Asesoría confidencial · Sin compromiso
          </p>
        </Reveal>
      </div>
    </section>
  );
}
