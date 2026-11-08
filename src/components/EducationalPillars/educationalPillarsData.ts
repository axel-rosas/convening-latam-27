interface EducationalPillar {
  id: "connect" | "create" | "transform";
  title: string;
  description: string;
}

export const educationalPillarsData: EducationalPillar[] = [
  {
    id: "connect",
    title: "Conectar",
    description:
      "Perspectivas globales se suman a las voces de la región para encender alianzas, crear oportunidades de negocio y ampliar el impacto colectivo.",
  },
  {
    id: "create",
    title: "Crear",
    description:
      "Crear la inspiración construye conectando. Diseñamos nuevas formas de producir experiencias memorables con recursos y contexto reales.",
  },
  {
    id: "transform",
    title: "Transformar",
    description:
      "Herramientas, puntos de vista y conversaciones que ayudan a evolucionar la industria: innovación, y liderazgo aplicados al futuro de los eventos.",
  },
];
