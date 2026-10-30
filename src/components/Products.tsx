import { ArrowUpRight, Check, PawPrint, Moon, Zap } from "lucide-react";
import { Eyebrow, Reveal, WhatsAppButton } from "./ui";
import { WA_MESSAGES } from "../lib/site";
import { cn } from "../utils/cn";

const PRODUCTS = [
  {
    tag: "Línea clínica",
    icon: Moon,
    name: "Productos CBD",
    image: "/images/product-cbd.jpg",
    alt: "Gotero de aceite CBD en pedestal de piedra",
    description:
      "Formulaciones no psicoactivas orientadas al manejo de ansiedad, sueño e inflamación, con un perfil de seguridad amplio y uso supervisado.",
    features: ["No psicoactivo", "Ansiedad y sueño", "Perfil de seguridad amplio"],
    message: WA_MESSAGES.cbd,
    dark: false,
  },
  {
    tag: "Bajo prescripción",
    icon: Zap,
    name: "Productos THC",
    image: "/images/product-thc.jpg",
    alt: "Frasco gotero THC sobre mármol oscuro",
    description:
      "Soluciones con THC bajo prescripción médica, utilizadas en el tratamiento de dolor, apetito y condiciones específicas bajo control clínico.",
    features: ["Manejo del dolor", "Estimula el apetito", "Control clínico estricto"],
    message: WA_MESSAGES.thc,
    dark: true,
  },
  {
    tag: "Cuidado animal",
    icon: PawPrint,
    name: "CBD Veterinario",
    image: "/images/product-vet.jpg",
    alt: "Aceite CBD veterinario junto a un perro golden retriever",
    description:
      "Formulaciones adaptadas bajo estándares farmacéuticos y dosificación específica según especie y peso de cada paciente.",
    features: ["Dosificación por especie", "Bienestar y movilidad", "Aval veterinario"],
    message: WA_MESSAGES.vet,
    dark: false,
  },
];

export default function Products() {
  return (
    <section id="productos" className="relative bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <Reveal className="max-w-2xl">
            <Eyebrow>Nuestras líneas</Eyebrow>
            <h2 className="mt-5 font-display text-4xl font-medium leading-[1.08] tracking-tight text-forest-950 sm:text-5xl lg:text-6xl">
              Productos de{" "}
              <em className="italic text-gold-600">cannabis medicinal</em>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-forest-950/60 sm:text-lg">
              Explora nuestras formulaciones especializadas, desarrolladas bajo
              estándares farmacéuticos para responder a diferentes necesidades
              clínicas de forma segura y regulada.
            </p>
          </Reveal>
          <Reveal delay={150}>
            <WhatsAppButton message={WA_MESSAGES.general} variant="ghost">
              Asesoría personalizada
            </WhatsAppButton>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {PRODUCTS.map((product, i) => (
            <Reveal key={product.name} delay={i * 130}>
              <article
                className={cn(
                  "group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] transition-all duration-500 hover:-translate-y-2",
                  product.dark
                    ? "bg-forest-950 text-cream shadow-xl shadow-forest-950/20"
                    : "bg-white text-forest-950 shadow-lg shadow-forest-950/6 ring-1 ring-forest-950/6",
                )}
              >
                <div className="relative h-64 overflow-hidden sm:h-72">
                  <img
                    src={product.image}
                    alt={product.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div
                    className={cn(
                      "absolute inset-0 bg-gradient-to-t to-transparent",
                      product.dark
                        ? "from-forest-950/70 via-forest-950/10"
                        : "from-forest-950/40 via-transparent",
                    )}
                  />
                  <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-cream/90 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-forest-900 backdrop-blur-sm">
                    <product.icon className="h-3.5 w-3.5" />
                    {product.tag}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-7 sm:p-8">
                  <h3 className="font-display text-3xl font-medium tracking-tight">
                    {product.name}
                  </h3>
                  <p
                    className={cn(
                      "mt-3 text-[15px] leading-relaxed",
                      product.dark ? "text-cream/65" : "text-forest-950/60",
                    )}
                  >
                    {product.description}
                  </p>

                  <ul className="mt-6 space-y-2.5">
                    {product.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-sm font-semibold">
                        <span
                          className={cn(
                            "flex h-5 w-5 items-center justify-center rounded-full",
                            product.dark ? "bg-gold-400/15 text-gold-300" : "bg-forest-100 text-forest-700",
                          )}
                        >
                          <Check className="h-3 w-3" strokeWidth={3} />
                        </span>
                        <span className={product.dark ? "text-cream/80" : "text-forest-950/75"}>
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-8">
                    <WhatsAppButton
                      message={product.message}
                      variant={product.dark ? "primary" : "dark"}
                      className="w-full"
                    >
                      Consultar por WhatsApp
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </WhatsAppButton>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
