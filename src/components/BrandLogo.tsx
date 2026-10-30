import { cn } from "../utils/cn";

/**
 * Logo oficial original FarmaVitaly:
 * - Versión clara para fondos oscuros (Hero / Navbar inicial / Footer)
 * - Versión oscura original para fondos claros (Navbar con scroll)
 */
export default function BrandLogo({
  className,
  dark = false,
  showTagline = false,
}: {
  className?: string;
  dark?: boolean;
  showTagline?: boolean;
}) {
  return (
    <div className={cn("flex flex-col", className)}>
      <a
        href="#inicio"
        className="group flex items-center"
        aria-label="FarmaVitaly — Inicio"
      >
        <picture>
          <source
            srcSet={dark ? "/images/logo-light.webp" : "/images/logo.webp"}
            type="image/webp"
          />
          <img
            src={dark ? "/images/logo-light.png" : "/images/logo.png"}
            alt="FarmaVitaly"
            className="h-8 w-auto sm:h-9 object-contain transition-opacity duration-200 group-hover:opacity-90"
            width={543}
            height={82}
            loading="eager"
          />
        </picture>
      </a>

      {showTagline && (
        <span
          className={cn(
            "mt-1 block text-[10px] font-bold uppercase tracking-[0.32em]",
            dark ? "text-[#a9bdb1]" : "text-[#5a7566]",
          )}
        >
          Cannabis Medicinal
        </span>
      )}
    </div>
  );
}
