export const SITE = {
  name: "FarmaVitaly",
  tagline: "Cannabis medicinal con estándares farmacéuticos",
  phoneDisplay: "+507 6348-2200",
  whatsapp: "50763482200",
  email: "info@farmavitaly.com",
  country: "Panamá",
};

/** Construye un enlace de WhatsApp con mensaje pre-llenado */
export const waLink = (message: string) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;

export const WA_MESSAGES = {
  general:
    "Hola FarmaVitaly, me gustaría recibir información sobre los productos de cannabis medicinal.",
  cbd: "Hola FarmaVitaly, me interesa conocer más sobre los productos CBD para pacientes.",
  thc: "Hola FarmaVitaly, me interesa conocer más sobre los productos THC con prescripción médica.",
  vet: "Hola FarmaVitaly, me interesa conocer más sobre los productos CBD veterinario para mascotas.",
  proceso:
    "Hola FarmaVitaly, quiero iniciar el proceso para acceder al cannabis medicinal. ¿Me orientan con los pasos?",
  clinicas:
    "Hola FarmaVitaly, me gustaría contactar con una clínica autorizada cercana a mi zona.",
  doctor:
    "Hola FarmaVitaly, soy médico y me interesa unirme a la red de clínicas autorizadas.",
};
