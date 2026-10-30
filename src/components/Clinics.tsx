import { MapPin, BadgeCheck, CalendarCheck, FileText } from "lucide-react";
import { Eyebrow, Reveal, WhatsAppButton } from "./ui";
import { WA_MESSAGES } from "../lib/site";

const HIGHLIGHTS = [
  {
    icon: BadgeCheck,
    title: "Médicos idóneos",
    text: "Profesionales reconocidos por el Consejo Técnico de Salud Pública del MINSA.",
  },
  {
    icon: CalendarCheck,
    title: "Citas coordinadas",
    text: "Te conectamos con la clínica autorizada más cercana a tu provincia.",
  },
  {
    icon: FileText,
    title: "Certificación correcta",
    text: "Te orientamos para que tu certificación cumpla todos los requisitos.",
  },
];

export default function Clinics() {
  return (
    <section id="clinicas" className="relative overflow-hidden bg-forest-950 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        {/* Text */}
        <div>
          <Reveal>
            <Eyebrow dark>Red de clínicas autorizadas</Eyebrow>
            <h2 className="mt-5 font-display text-4xl font-medium leading-[1.08] tracking-tight text-cream sm:text-5xl">
              Atención cercana,{" "}
              <em className="italic text-gold-300">en toda Panamá</em>
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-cream/65 sm:text-lg">
              Trabajamos con una red de clínicas y médicos autorizados para que
              obtengas tu certificación médica y tu carné de usuario con la
              guía correcta en cada etapa.
            </p>
          </Reveal>

          <div className="mt-10 space-y-4">
            {HIGHLIGHTS.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={i * 120}>
                <div className="group flex items-start gap-4 rounded-2xl border border-cream/10 bg-forest-900/40 p-5 backdrop-blur-sm transition-colors duration-300 hover:border-gold-400/30">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold-400/12 text-gold-300 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-5.5 w-5.5" strokeWidth={1.6} />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-medium text-cream">{title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-cream/60">{text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={380} className="mt-9 flex flex-wrap gap-4">
            <WhatsAppButton message={WA_MESSAGES.clinicas} large>
              Buscar clínica cercana
            </WhatsAppButton>
            <WhatsAppButton message={WA_MESSAGES.doctor} variant="outline" large>
              Soy médico
            </WhatsAppButton>
          </Reveal>
        </div>

        {/* Image */}
        <Reveal delay={150} className="relative">
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2.5rem] border border-gold-400/20" />
            <img
              src="/images/clinic.jpg"
              alt="Doctora atendiendo a un paciente en clínica autorizada"
              loading="lazy"
              className="aspect-[4/5] w-full rounded-[2rem] object-cover sm:aspect-[5/5]"
            />
            <div className="absolute bottom-6 left-6 right-6 flex items-center gap-3 rounded-2xl bg-cream/95 p-4 shadow-xl backdrop-blur-md sm:left-8 sm:right-auto">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-forest-950 text-gold-300">
                <MapPin className="h-5 w-5" strokeWidth={1.8} />
              </span>
              <div>
                <p className="text-sm font-bold text-forest-950">Cobertura nacional</p>
                <p className="text-xs font-medium text-forest-950/55">
                  Provincias y comarcas de Panamá
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
