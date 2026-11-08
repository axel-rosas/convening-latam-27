interface SustainabilityPillar {
  id: "global" | "transformation" | "network";
  title: string;
  description: string;
  iconSrc?: string;
}

export const sustainabilityPillarsData: SustainabilityPillar[] = [
  {
    id: "global",
    title: "Visión global, contexto local",
    description:
      "Voces de toda la región se conectan con miradas globales y convierten la conversación en impacto colectivo.",
  },
  {
    id: "transformation",
    title: "Transformación única",
    description:
      "Vive un ambiente inspirador, junto a profesionales apasionados que enfrentan tus mismos retos y persiguen objetivos comunes.",
  },
  {
    id: "network",
    title: "Visión global, contexto local",
    description:
      "Abre tu red en sectores emergentes y consolidados, sin quedarte en una sola industria.",
  },
];
