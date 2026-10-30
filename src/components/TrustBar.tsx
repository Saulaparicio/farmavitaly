import { LeafMark } from "./ui";

const ITEMS = [
  "Regulado por el MINSA",
  "Respaldado por ADEIWA PHARMA",
  "Registro SIUCMAA",
  "Carné PNEUCAM",
  "Farmacias autorizadas",
  "Médicos idóneos certificados",
  "Estándares farmacéuticos",
];

export default function TrustBar() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div className="relative border-y border-forest-950/8 bg-sand py-5">
      <div className="overflow-hidden">
        <div className="marquee-track items-center gap-10 pr-10">
          {row.map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="inline-flex shrink-0 items-center gap-10"
            >
              <span className="whitespace-nowrap text-[13px] font-bold uppercase tracking-[0.22em] text-forest-800/70">
                {item}
              </span>
              <LeafMark className="h-4 w-4 shrink-0 text-gold-500" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
