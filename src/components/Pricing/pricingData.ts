export interface PricingTier {
  name: string;
  date: string;
  prices: string[];
  earlyBird?: boolean;
}

export interface PricingCategory {
  id: string;
  label: string;
}

export interface PricingGroup {
  id: string;
  title: string;
  variant: "members" | "nonMembers" | "newMembership";
  categories: PricingCategory[];
  tiers: PricingTier[];
}

export const pricingData: PricingGroup[] = [
  {
    id: "members",
    title: "Socios PCMA",
    variant: "members",
    categories: [
      { id: "members-category-1", label: "Organizador | Estratega de eventos empresariales" },
      { id: "members-category-2", label: "Proveedor de eventos empresariales | Socio de la industria" },
      { id: "members-category-3", label: "Profesorado o Personal académico**" },
      { id: "members-category-4", label: "Next Gen**" },
      { id: "members-category-5", label: "Estudiantes**" },
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
      { id: "non-members-category-1", label: "Organizador | Estratega de eventos empresariales" },
      { id: "non-members-category-2", label: "Proveedor de eventos empresariales | Socio de la industria" },
      { id: "non-members-category-3", label: "Profesorado o Personal académico" },
      { id: "non-members-category-4", label: "Next Gen**" },
      { id: "non-members-category-5", label: "Next Gen**" },
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
      { id: "new-membership-category-1", label: "Organizador | Estratega de eventos empresariales" },
      { id: "new-membership-category-2", label: "Proveedor de eventos empresariales | Socio de la industria" },
      { id: "new-membership-category-3", label: "Profesorado o Personal académico" },
      { id: "new-membership-category-4", label: "Next Gen**" },
      { id: "new-membership-category-5", label: "Estudiantes" },
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
