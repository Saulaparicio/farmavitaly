import { ClipboardCheck, UserRoundPlus, IdCard, ArrowRight } from "lucide-react";
import { Eyebrow, Reveal, WhatsAppButton } from "./ui";
import { WA_MESSAGES } from "../lib/site";

const STEPS = [
  {
    number: "01",
    icon: ClipboardCheck,
    title: "Diagnóstico y certificación médica",
    description:
      "El proceso comienza con tu médico tratante, quien determina que requieres cannabis medicinal. Debe ser un médico idóneo reconocido por el Consejo Técnico de Salud Pública del MINSA.",
    detail: "Certificación médica con diagnóstico, principio activo, dosis y datos del médico.",
  },
  {
    number: "02",
    icon: UserRoundPlus,
    title: "Registro del paciente en SIUCMAA",
    description:
      "Con la certificación en mano, el paciente se registra en el SIUCMAA (Sistema de Identificación de Usuarios de Cannabis Medicinal) disponible en www.minsa.gob.pa.",
    detail: "Menores de edad y pacientes con discapacidad requieren un acompañante autorizado.",
  },
  {
    number: "03",
    icon: IdCard,
    title: "Obtención del carné de usuario",
    description:
      "Verificado el formulario y la certificación, el PNEUCAM emite tu identificación como usuario de cannabis medicinal: el documento que te habilita para adquirir en farmacias autorizadas.",
    detail: "Con tu carné puedes acceder a nuestros productos de forma segura y legal.",
  },
];

export default function Process() {
  return (
    <section id="proceso" className="relative bg-sand py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <Eyebrow className="justify-center">¿Cómo acceder?</Eyebrow>
            <h2 className="mt-5 font-display text-4xl font-medium leading-[1.08] tracking-tight text-forest-950 sm:text-5xl lg:text-6xl">
              Tres pasos hacia un tratamiento{" "}
              <em className="italic text-gold-600">seguro y legal</em>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-forest-950/60 sm:text-lg">
              Nuestros productos están respaldados por la farmacéutica
              ADEIWA PHARMA y disponibles a través de farmacias y centros de
              salud autorizados.
            </p>
          </Reveal>
        </div>

        <div className="relative mt-20 grid gap-12 lg:grid-cols-3 lg:gap-8">
          {/* Connector line (desktop) */}
          <div
            aria-hidden="true"
            className="absolute left-[16%] right-[16%] top-10 hidden border-t-2 border-dashed border-forest-950/15 lg:block"
          />

          {STEPS.map((step, i) => (
            <Reveal key={step.number} delay={i * 160} className="relative">
              <div className="group flex h-full flex-col items-center text-center">
                <div className="relative">
                  <span className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-forest-950 text-gold-300 shadow-xl shadow-forest-950/25 ring-8 ring-sand transition-transform duration-500 group-hover:scale-105">
                    <step.icon className="h-8 w-8" strokeWidth={1.5} />
                  </span>
                  <span className="absolute -right-3 -top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-gold-400 font-display text-sm font-bold text-forest-950 shadow-md">
                    {i + 1}
                  </span>
                </div>

                <p className="mt-7 text-[11px] font-bold uppercase tracking-[0.3em] text-gold-600">
                  Paso {step.number}
                </p>
                <h3 className="mt-3 max-w-xs font-display text-2xl font-medium leading-snug tracking-tight text-forest-950">
                  {step.title}
                </h3>
                <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-forest-950/60">
                  {step.description}
                </p>
                <p className="mt-4 max-w-xs rounded-xl bg-white/70 px-4 py-3 text-[13px] font-medium leading-relaxed text-forest-800 ring-1 ring-forest-950/6">
                  {step.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mt-16 flex flex-col items-center gap-4">
          <WhatsAppButton message={WA_MESSAGES.proceso} large>
            Iniciar mi proceso por WhatsApp
          </WhatsAppButton>
          <p className="inline-flex items-center gap-2 text-sm font-medium text-forest-950/50">
            Te acompañamos en cada paso
            <ArrowRight className="h-4 w-4" />
          </p>
        </Reveal>
      </div>
    </section>
  );
}
