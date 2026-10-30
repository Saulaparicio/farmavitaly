import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { Eyebrow, Reveal, WhatsAppButton } from "./ui";
import { WA_MESSAGES } from "../lib/site";
import { cn } from "../utils/cn";

const FAQS = [
  {
    q: "¿El cannabis medicinal es legal en Panamá?",
    a: "Sí. Está regulado por el MINSA a través del sistema SIUCMAA y el programa PNEUCAM. Su uso es exclusivamente para pacientes con una condición médica diagnosticada y la receta de un médico autorizado. No es de libre uso.",
  },
  {
    q: "¿Necesito una receta médica?",
    a: "Sí. El primer paso es que tu médico tratante —reconocido como idóneo por el Consejo Técnico de Salud Pública del MINSA— emita una certificación con el diagnóstico, el principio activo, la concentración, la vía de administración y la dosis del tratamiento.",
  },
  {
    q: "¿Cómo me registro en el SIUCMAA?",
    a: "Una vez obtienes tu certificación médica, debes registrarte en el sistema SIUCMAA disponible en www.minsa.gob.pa, completando tus datos personales, residencia e instalación de salud donde eres atendido.",
  },
  {
    q: "¿Qué es el carné de usuario y para qué sirve?",
    a: "Es tu identificación como usuario de cannabis medicinal, emitida por el PNEUCAM tras verificar tu formulario y certificación. Este carné te habilita para comprar los productos en farmacias autorizadas.",
  },
  {
    q: "¿Los productos CBD producen efectos psicoactivos?",
    a: "No. Los productos CBD son formulaciones no psicoactivas, orientadas al manejo de ansiedad, sueño e inflamación, con un amplio perfil de seguridad. Los productos con THC sí requieren prescripción y control clínico estricto.",
  },
  {
    q: "¿Puedo usar estos productos con mi mascota?",
    a: "Sí. Contamos con la línea CBD Veterinario, formulada bajo estándares farmacéuticos con dosificación específica según la especie y el peso de cada paciente. Te recomendamos consultar con tu veterinario.",
  },
  {
    q: "¿Dónde puedo adquirir los productos?",
    a: "Nuestros productos están respaldados por la farmacéutica ADEIWA PHARMA y disponibles a través de farmacias y centros de salud autorizados, garantizando un acceso seguro, legal y supervisado.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-sand py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        <div>
          <Reveal>
            <Eyebrow>Preguntas frecuentes</Eyebrow>
            <h2 className="mt-5 font-display text-4xl font-medium leading-[1.08] tracking-tight text-forest-950 sm:text-5xl">
              Resolvemos tus{" "}
              <em className="italic text-gold-600">dudas</em>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-forest-950/60 sm:text-lg">
              Todo lo que necesitas saber sobre el acceso legal al cannabis
              medicinal en Panamá.
            </p>
          </Reveal>
          <Reveal delay={200} className="mt-9">
            <div className="rounded-3xl bg-forest-950 p-7 text-cream">
              <p className="font-display text-2xl font-medium">
                ¿Prefieres hablar con una persona?
              </p>
              <p className="mt-2 text-sm leading-relaxed text-cream/60">
                Nuestro equipo te orienta por WhatsApp, sin compromiso.
              </p>
              <WhatsAppButton message={WA_MESSAGES.general} className="mt-5 w-full">
                Chatear ahora
              </WhatsAppButton>
            </div>
          </Reveal>
        </div>

        <div className="space-y-3.5">
          {FAQS.map((faq, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={faq.q} delay={i * 70}>
                <div
                  className={cn(
                    "overflow-hidden rounded-2xl ring-1 transition-all duration-300",
                    isOpen
                      ? "bg-forest-950 text-cream ring-forest-950"
                      : "bg-white ring-forest-950/8 hover:ring-forest-950/20",
                  )}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-lg font-medium leading-snug sm:text-xl">
                      {faq.q}
                    </span>
                    <span
                      className={cn(
                        "flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors duration-300",
                        isOpen ? "bg-gold-400 text-forest-950" : "bg-forest-100 text-forest-800",
                      )}
                    >
                      {isOpen ? <Minus className="h-4.5 w-4.5" /> : <Plus className="h-4.5 w-4.5" />}
                    </span>
                  </button>
                  <div
                    className={cn(
                      "grid transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 text-[15px] leading-relaxed text-cream/70">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
