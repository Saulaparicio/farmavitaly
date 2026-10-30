import { Mail, MapPin, Phone } from "lucide-react";
import { LeafMark, Logo, WhatsAppIcon } from "./ui";
import { SITE, waLink } from "../lib/site";

const NAV = [
  { label: "Productos", href: "#productos" },
  { label: "Ciencia", href: "#ciencia" },
  { label: "Proceso", href: "#proceso" },
  { label: "Diagnósticos", href: "#diagnosticos" },
  { label: "Clínicas", href: "#clinicas" },
  { label: "FAQ", href: "#faq" },
];

export default function Footer() {
  return (
    <footer className="border-t border-cream/10 bg-forest-950 text-cream">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr] lg:gap-20">
          {/* Brand */}
          <div>
            <Logo dark />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-cream/55">
              Cannabis medicinal con estándares farmacéuticos, respaldado por
              ADEIWA PHARMA y regulado por el MINSA de Panamá. Acceso seguro,
              legal y supervisado.
            </p>
            <div className="mt-6 flex flex-col gap-3 text-sm text-cream/65">
              <span className="inline-flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-gold-400" /> {SITE.phoneDisplay}
              </span>
              <a
                href={`mailto:${SITE.email}`}
                className="inline-flex items-center gap-2.5 transition-colors hover:text-gold-300"
              >
                <Mail className="h-4 w-4 text-gold-400" /> {SITE.email}
              </a>
              <span className="inline-flex items-center gap-2.5">
                <MapPin className="h-4 w-4 text-gold-400" /> Ciudad de Panamá, Panamá
              </span>
            </div>
          </div>

          {/* Nav */}
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-[0.28em] text-gold-300">
              Explora
            </h3>
            <ul className="mt-5 space-y-3">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-cream/60 transition-colors hover:text-cream"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-[0.28em] text-gold-300">
              Contacto directo
            </h3>
            <p className="mt-5 text-sm leading-relaxed text-cream/55">
              Atención personalizada para pacientes, médicos y distribuidores.
            </p>
            <a
              href={waLink("Hola FarmaVitaly, me gustaría recibir información.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2.5 rounded-full bg-wa px-6 py-3 text-sm font-bold text-forest-950 transition-all duration-300 hover:bg-wa-dark hover:text-white"
            >
              <WhatsAppIcon className="h-4.5 w-4.5" />
              WhatsApp
            </a>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-14 flex items-start gap-3 rounded-2xl border border-cream/10 bg-forest-900/40 p-5">
          <LeafMark className="mt-0.5 h-4.5 w-4.5 shrink-0 text-gold-400" />
          <p className="text-xs leading-relaxed text-cream/45">
            Aviso importante: el cannabis medicinal puede ser utilizado
            únicamente por pacientes con una condición médica diagnosticada y
            con la recomendación o receta de un médico autorizado. No es de
            libre uso. Toda la información proporcionada tiene fines educativos
            y no sustituye la consulta médica profesional.
          </p>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-8 sm:flex-row">
          <p className="text-xs text-cream/40">
            © {new Date().getFullYear()} {SITE.name}. Todos los derechos reservados.
          </p>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cream/35">
            Regulado por el MINSA · Panamá
          </p>
        </div>
      </div>
    </footer>
  );
}
