import { useEffect, useRef, type ReactNode, type CSSProperties } from "react";
import { cn } from "../utils/cn";
import { waLink } from "../lib/site";
import BrandLogo from "./BrandLogo";

/* ------------------------------------------------------------------ */
/* WhatsApp official glyph                                             */
/* ------------------------------------------------------------------ */
export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Reveal on scroll wrapper                                            */
/* ------------------------------------------------------------------ */
export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "span" | "li" | "figure";
}) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      className={cn("reveal", className)}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}

/* ------------------------------------------------------------------ */
/* WhatsApp CTA button                                                 */
/* ------------------------------------------------------------------ */
export function WhatsAppButton({
  message,
  children = "Escríbenos por WhatsApp",
  variant = "primary",
  className,
  large = false,
}: {
  message: string;
  children?: ReactNode;
  variant?: "primary" | "outline" | "dark" | "ghost";
  className?: string;
  large?: boolean;
}) {
  const base = cn(
    "group inline-flex items-center justify-center gap-2.5 rounded-full font-semibold tracking-wide transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-wa focus-visible:ring-offset-2",
    large ? "px-8 py-4 text-base" : "px-6 py-3 text-sm",
  );

  const variants = {
    primary: cn(
      "bg-wa text-forest-950 shadow-lg shadow-wa/25",
      "hover:bg-wa-dark hover:text-white hover:shadow-xl hover:shadow-wa/30 hover:-translate-y-0.5",
    ),
    dark: cn(
      "bg-forest-800 text-cream shadow-lg shadow-forest-950/25",
      "hover:bg-forest-700 hover:-translate-y-0.5",
    ),
    outline: cn(
      "border border-cream/30 text-cream backdrop-blur-sm",
      "hover:border-gold-400 hover:bg-gold-400/10 hover:text-gold-300 hover:-translate-y-0.5",
    ),
    ghost: cn(
      "border border-forest-900/15 bg-white text-forest-800",
      "hover:border-gold-500 hover:bg-gold-400/10 hover:text-forest-900 hover:-translate-y-0.5",
    ),
  };

  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(base, variants[variant], className)}
    >
      <WhatsAppIcon className={cn("shrink-0", large ? "h-5 w-5" : "h-[18px] w-[18px]")} />
      <span>{children}</span>
    </a>
  );
}

/* ------------------------------------------------------------------ */
/* Eyebrow / section heading                                           */
/* ------------------------------------------------------------------ */
export function Eyebrow({
  children,
  dark = false,
  className,
}: {
  children: ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.28em]",
        dark ? "text-gold-400" : "text-gold-600",
        className,
      )}
    >
      <span className={cn("h-px w-8", dark ? "bg-gold-400/70" : "bg-gold-500")} />
      {children}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* Marca FarmaVitaly (logo oficial) + marca hoja decorativa            */
/* ------------------------------------------------------------------ */
export function Logo({ dark = false, showTagline = true }: { dark?: boolean; showTagline?: boolean }) {
  return <BrandLogo dark={dark} showTagline={showTagline} />;
}

/* ------------------------------------------------------------------ */
/* Hoja estilizada (decorativa, NO es el logo oficial)                 */
/* ------------------------------------------------------------------ */
export function LeafMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 21V3M12 6l-3 2M12 6l3 2M12 10l-4 2M12 10l4 2M12 14l-3 2M12 14l3 2M9 11h6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}
