import { cn } from "../utils/cn";

/**
 * Logo oficial FarmaVitaly fiel al original:
 * - Tipografía geométrica bold en mayúsculas (grafito)
 * - Hoja de cannabis estilizada en verde salvia entre la V y la T
 * - Símbolo ®
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
  const ink = dark ? "#faf7f0" : "#2A3340";
  const sage = dark ? "#8ea99b" : "#6f8d7d";
  const taglineColor = dark ? "#a9bdb1" : "#5a7566";

  return (
    <div className={cn("flex flex-col", className)}>
      <a href="#inicio" className="group flex items-center">
        <svg
          viewBox="0 0 780 130"
          xmlns="http://www.w3.org/2000/svg"
          className="h-9 w-auto sm:h-10"
          role="img"
          aria-label="FarmaVitaly"
        >
          {/*  FARMA  */}
          <g
            fill={ink}
            fontFamily="'Arial Black','Helvetica Neue','Manrope',sans-serif"
            fontWeight={900}
            fontSize={102}
            letterSpacing="4"
            style={{ fontStretch: "extra-expanded" }}
          >
            <text x="0" y="98" fontSize={102}>
              FARMA
            </text>

            {/*  V A (la T la retrasamos para dejar sitio a la hoja)  */}
            <text x="422" y="98">
              V
            </text>
          </g>

          {/*  Hoja de cannabis estilizada (sage), anclada entre V y T  */}
          <g
            stroke={sage}
            strokeWidth={6.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          >
            {/* Tallo vertical */}
            <line x1="518" y1="14" x2="518" y2="116" />
            {/* Par superior (subiendo a 45°) */}
            <line x1="518" y1="42" x2="480" y2="72" />
            <line x1="518" y1="42" x2="556" y2="72" />
            {/* Par medio (más horizontal) */}
            <line x1="518" y1="68" x2="460" y2="86" />
            <line x1="518" y1="68" x2="576" y2="86" />
            {/* Raya central horizontal */}
            <line x1="474" y1="98" x2="562" y2="98" />
            {/* Par inferior pequeño */}
            <line x1="518" y1="100" x2="492" y2="114" />
            <line x1="518" y1="100" x2="544" y2="114" />
            {/* Puntas pequeñas inferiores */}
            <line x1="518" y1="116" x2="506" y2="122" />
            <line x1="518" y1="116" x2="530" y2="122" />
          </g>

          {/* T A L Y */}
          <g
            fill={ink}
            fontFamily="'Arial Black','Helvetica Neue','Manrope',sans-serif"
            fontWeight={900}
            fontSize={102}
          >
            <text x="570" y="98">
              TALY
            </text>
          </g>

          {/* ® registrado */}
          <circle cx="758" cy="34" r="14" fill="none" stroke={ink} strokeWidth={3} />
          <text
            x="758"
            y="45"
            textAnchor="middle"
            fontSize="20"
            fontWeight={900}
            fill={ink}
            fontFamily="Arial Black, sans-serif"
          >
            R
          </text>
        </svg>
      </a>

      {showTagline && (
        <span
          className={cn(
            "mt-1.5 block text-[10px] font-bold uppercase tracking-[0.32em]",
            dark ? "text-cream/55" : "text-ink-900/50",
          )}
          style={{ color: taglineColor }}
        >
          Cannabis Medicinal
        </span>
      )}
    </div>
  );
}
