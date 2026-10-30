import { Activity, Brain, HeartPulse, Moon, Utensils, ShieldPlus } from "lucide-react";
import { Eyebrow, Reveal, WhatsAppButton } from "./ui";
import { WA_MESSAGES } from "../lib/site";

const FUNCTIONS = [
  { icon: HeartPulse, label: "Dolor" },
  { icon: Brain, label: "Estado de ánimo" },
  { icon: Moon, label: "Sueño" },
  { icon: Utensils, label: "Apetito" },
  { icon: ShieldPlus, label: "Respuesta inmune" },
  { icon: Activity, label: "Equilibrio interno" },
];

export default function Science() {
  return (
    <section id="ciencia" className="texture-grain relative overflow-hidden bg-forest-950 py-24 sm:py-32">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute -left-40 top-0 h-[480px] w-[480px] rounded-full bg-forest-600/25 blur-[140px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-gold-500/10 blur-[140px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        {/* Image side */}
        <Reveal className="relative order-2 lg:order-1">
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2.5rem] border border-gold-400/20" />
            <img
              src="/images/science.jpg"
              alt="Investigación farmacéutica con muestras botánicas"
              loading="lazy"
              className="aspect-[4/5] w-full rounded-[2rem] object-cover sm:aspect-[5/5]"
            />
            {/* Floating stat card */}
            <div className="absolute -bottom-7 -right-3 animate-float rounded-3xl bg-cream p-6 shadow-2xl shadow-forest-950/50 sm:right-8">
              <p className="font-display text-4xl font-semibold text-forest-900">SEC</p>
              <p className="mt-1 max-w-[150px] text-[11px] font-bold uppercase leading-relaxed tracking-[0.14em] text-forest-950/55">
                Sistema Endocannabinoide
              </p>
            </div>
          </div>
        </Reveal>

        {/* Text side */}
        <div className="order-1 lg:order-2">
          <Reveal>
            <Eyebrow dark>Ciencia y respaldo</Eyebrow>
            <h2 className="mt-5 font-display text-4xl font-medium leading-[1.08] tracking-tight text-cream sm:text-5xl">
              Actúa donde tu cuerpo{" "}
              <em className="italic text-gold-300">regula la vida</em>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-cream/65 sm:text-lg">
              El cannabis medicinal actúa en el cuerpo principalmente a través
              del{" "}
              <strong className="font-semibold text-cream">
                sistema endocannabinoide (SEC)
              </strong>
              , una red biológica que regula funciones clave del organismo y
              ayuda a mantener su equilibrio natural.
            </p>
          </Reveal>

          <Reveal delay={140} className="mt-9 flex flex-wrap gap-3">
            {FUNCTIONS.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2.5 rounded-full border border-cream/12 bg-forest-900/60 px-4.5 py-2.5 text-[13px] font-semibold text-cream/80 backdrop-blur-sm transition-colors duration-300 hover:border-gold-400/40 hover:text-gold-300"
              >
                <Icon className="h-4 w-4 text-gold-400" strokeWidth={1.8} />
                {label}
              </span>
            ))}
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-10 rounded-2xl border border-cream/10 bg-forest-900/40 p-6 backdrop-blur-sm">
              <p className="text-[15px] leading-relaxed text-cream/70">
                <em className="font-display text-lg text-gold-300">
                  “No es de libre uso:
                </em>{" "}
                está dirigido a pacientes con una condición médica diagnosticada
                que cuenten con la recomendación o receta de un médico
                autorizado.”
              </p>
            </div>
          </Reveal>

          <Reveal delay={360} className="mt-9">
            <WhatsAppButton message={WA_MESSAGES.general} variant="outline" large>
              ¿Tienes dudas? Te explicamos
            </WhatsAppButton>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
