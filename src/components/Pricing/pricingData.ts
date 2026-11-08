export interface PricingTier {
  name: string;
  date: string;
  prices: string[];
  earlyBird?: boolean;
}

export interface PricingGroup {
  id: string;
  title: string;
  variant: "members" | "nonMembers" | "newMembership";
  categories: string[];
  tiers: PricingTier[];
}

export const pricingData: PricingGroup[] = [
  {
    id: "members",
    title: "Socios PCMA",
    variant: "members",
    categories: [
      "Organizador | Estratega de eventos empresariales",
      "Proveedor de eventos empresariales | Socio de la industria",
      "Profesorado o Personal académico**",
      "Next Gen**",
      "Estudiantes**",
    ],
    tiers: [
      {
        name: "Early Bird*",
        date: "Fecha",
        earlyBird: true,
        prices: ["$320", "$470", "$210", "$90", "$140"],
      },
      {
        name: "Regular",
        date: "Fecha",
        prices: ["$390", "$675", "$295", "$140", "$195"],
      },
    ],
  },
  {
    id: "nonMembers",
    title: "No Socios PCMA",
    variant: "nonMembers",
    categories: [
      "Organizador | Estratega de eventos empresariales",
      "Proveedor de eventos empresariales | Socio de la industria",
      "Profesorado o Personal académico",
      "Next Gen**",
      "Next Gen**",
    ],
    tiers: [
      {
        name: "Early Bird*",
        date: "Fecha",
        earlyBird: true,
        prices: ["$320", "$470", "$000", "$000", "$000"],
      },
      {
        name: "Regular",
        date: "Fecha",
        prices: ["$390", "$675", "$000", "$000", "$000"],
      },
    ],
  },
  {
    id: "newMembership",
    title: "Nueva Membresía PCMA",
    variant: "newMembership",
    categories: [
      "Organizador | Estratega de eventos empresariales",
      "Proveedor de eventos empresariales | Socio de la industria",
      "Profesorado o Personal académico",
      "Next Gen**",
      "Estudiantes",
    ],
    tiers: [
      {
        name: "Early Bird*",
        date: "Fecha",
        earlyBird: true,
        prices: ["$555", "$790", "$000", "$000", "$000"],
      },
      {
        name: "Regular",
        date: "Fecha",
        prices: ["$625", "$995", "$000", "$000", "$000"],
      },
    ],
  },
];
