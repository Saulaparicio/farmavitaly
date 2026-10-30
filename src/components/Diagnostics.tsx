import { FileCheck2, HeartHandshake, Stethoscope } from "lucide-react";
import { Eyebrow, Reveal, WhatsAppButton } from "./ui";
import { WA_MESSAGES } from "../lib/site";

const DIAGNOSES = [
  "Alzheimer", "Anorexia", "Artritis", "Autismo", "Cáncer",
  "Depresión", "Dolor crónico", "Epilepsia", "Esclerosis múltiple", "Fibromialgia",
  "Glaucoma", "Hepatitis C", "Insomnio", "Parkinson", "Neuropatía periférica",
  "Trastorno Bipolar", "Trastornos de ansiedad", "SIDA", "SEPT",
  "Cuidado paliativo",
];

const CERT_ITEMS = [
  "Diagnóstico(s) que justifican el uso del cannabinoide",
  "Principio activo: CBD, THC u otro cannabinoide especificado",
  "Forma farmacéutica: aceite, cápsulas, crema, tintura u otra",
  "Concentración exacta en mg, ml, % u otra unidad",
  "Vía de administración: oral, sublingual, tópica u otra",
  "Dosis, frecuencia y duración del tratamiento",
  "Indicación de dosis de rescate, si aplica",
  "Datos completos del médico y número de idoneidad",
];

export default function Diagnostics() {
  return (
    <section id="diagnosticos" className="relative bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          {/* Diagnoses grid */}
          <div>
            <Reveal>
              <Eyebrow>Diagnósticos reconocidos por el MINSA</Eyebrow>
              <h2 className="mt-5 font-display text-4xl font-medium leading-[1.08] tracking-tight text-forest-950 sm:text-5xl">
                ¿Tu condición califica para el{" "}
                <em className="italic text-gold-600">tratamiento</em>?
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-forest-950/60 sm:text-lg">
                La certificación médica acepta los siguientes diagnósticos como
                justificante para el uso de cannabis medicinal, entre otros.
              </p>
            </Reveal>

            <Reveal delay={140} className="mt-9 flex flex-wrap gap-2.5">
              {DIAGNOSES.map((d) => (
                <span
                  key={d}
                  className="rounded-full border border-forest-950/10 bg-white px-4 py-2 text-[13px] font-semibold text-forest-800 transition-all duration-300 hover:-translate-y-0.5 hover:border-forest-600 hover:bg-forest-950 hover:text-gold-300"
                >
                  {d}
                </span>
              ))}
              <span className="rounded-full border border-dashed border-gold-500/50 bg-gold-200/30 px-4 py-2 text-[13px] font-semibold text-gold-700">
                y otras enfermedades que requieran cuidado paliativo
              </span>
            </Reveal>

            <Reveal delay={240} className="mt-10">
              <WhatsAppButton message={WA_MESSAGES.general} variant="ghost">
                Consultar por mi caso
              </WhatsAppButton>
            </Reveal>
          </div>

          {/* Certification card */}
          <Reveal delay={150}>
            <div className="relative h-full overflow-hidden rounded-[2rem] bg-forest-950 p-8 text-cream shadow-2xl shadow-forest-950/25 sm:p-10">
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold-500/10 blur-3xl" />
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gold-400/15 text-gold-300">
                  <FileCheck2 className="h-5.5 w-5.5" strokeWidth={1.6} />
                </span>
                <h3 className="font-display text-2xl font-medium tracking-tight">
                  Contenido obligatorio de la certificación
                </h3>
              </div>
              <ul className="mt-7 space-y-3.5">
                {CERT_ITEMS.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-cream/75">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex items-center gap-3 rounded-2xl border border-cream/10 bg-forest-900/60 p-4">
                <HeartHandshake className="h-5 w-5 shrink-0 text-gold-300" strokeWidth={1.6} />
                <p className="text-[13px] leading-relaxed text-cream/65">
                  Tu médico debe estar reconocido por el Consejo Técnico de
                  Salud Pública del MINSA.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-3 rounded-2xl border border-cream/10 bg-forest-900/60 p-4">
                <Stethoscope className="h-5 w-5 shrink-0 text-gold-300" strokeWidth={1.6} />
                <p className="text-[13px] leading-relaxed text-cream/65">
                  ¿Eres médico? Únete a nuestra red de clínicas autorizadas.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
