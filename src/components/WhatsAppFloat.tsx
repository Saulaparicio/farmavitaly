import { useEffect, useState } from "react";
import { WhatsAppIcon } from "./ui";
import { waLink } from "../lib/site";
import { cn } from "../utils/cn";

export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={waLink("Hola FarmaVitaly, me gustaría recibir información sobre el cannabis medicinal.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chatea con nosotros por WhatsApp"
      className={cn(
        "group fixed bottom-6 right-6 z-50 flex items-center gap-3 transition-all duration-500",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0",
      )}
    >
      <span className="pointer-events-none hidden translate-x-2 rounded-full bg-forest-950 px-4 py-2.5 text-[13px] font-bold text-cream opacity-0 shadow-xl transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:block">
        ¿Dudas? Escríbenos
      </span>
      <span className="relative flex h-15 w-15 items-center justify-center">
        <span className="absolute inset-0 animate-pulse-ring rounded-full bg-wa" />
        <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-wa text-white shadow-2xl shadow-wa/40 transition-transform duration-300 group-hover:scale-110">
          <WhatsAppIcon className="h-7 w-7" />
        </span>
      </span>
    </a>
  );
}
