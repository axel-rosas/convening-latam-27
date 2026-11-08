import type { PartnerLogo } from "../LogoGrid/LogoGrid";

const logoAssets = import.meta.glob<string>(
  "../../assets/images/{sponsor,association,media}/*.png",
  { eager: true, query: "?url", import: "default" },
);

type PartnerFolder = "sponsor" | "association" | "media";
type LogoEntry = readonly [filename: string, name: string];

const getLogos = (folder: PartnerFolder, entries: readonly LogoEntry[]): PartnerLogo[] =>
  entries.map(([filename, name]) => {
    const src = logoAssets[`../../assets/images/${folder}/${filename}`];
    if (!src) throw new Error(`Missing partner logo: ${folder}/${filename}`);
    return { id: `${folder}/${filename}`, src, name };
  });

export const featuredSponsors = getLogos("sponsor", [
  ["quito-logo.png", "Quito"],
  ["ccmq-logo.png", "Centro de Convenciones Metropolitano de Quito"],
]);

export const sponsors = getLogos("sponsor", [
  ["procolombia-logo.png", "ProColombia"],
  ["costarica-logo.png", "Costa Rica Convention Bureau"],
  ["esencial-logo.png", "Esencial Costa Rica"],
  ["honduras-logo.png", "Honduras"],
  ["marriott-logo.png", "Marriott International"],
  ["rla-logo.png", "RLA"],
  ["peru-logo.png", "Perú"],
  ["miami-logo.png", "Greater Miami Convention & Visitors Bureau"],
  ["ihg-logo.png", "IHG Hotels & Resorts"],
  ["hilton-logo.png", "Hilton"],
  ["fiexpo-logo.png", "FIEXPO Latin America"],
  ["brookgreen-logo.png", "Brookgreen"],
  ["loscabos-logo.png", "Los Cabos"],
  ["imex-logo.png", "IMEX"],
  ["royalcaribbean-logo.png", "Royal Caribbean"],
  ["brasil-logo.png", "Brasil"],
  ["aruba-logo.png", "Aruba"],
  ["heroica-logo.png", "Grupo Heroica"],
  ["kapulus-logo.png", "Kapulus"],
  ["aeromexico-logo.png", "Aeroméxico"],
  ["together-logo.png", "Together"],
  ["jmmarriott-logo.png", "JW Marriott Quito"],
  ["goquitohotel-logo.png", "GO Quito Hotel"],
  ["copaairlines-logo.png", "Copa Airlines"],
  ["tikalfutura-logo.png", "Tikal Futura"],
  ["fht-logo.png", "FHT Global"],
  ["guatemala-logo.png", "Guatemala"],
  ["hdd-logo.png", "Human Design Doing"],
  ["calcula-logo.png", "ECO2 Calcula"],
  ["a3-logo.png", "a3"],
  ["globalevents-logo.png", "Global Events"],
]);

export const associationPartners = getLogos("association", [
  ["pco-logo.png", "PCO Meetings Mexico"],
  ["cocal-logo.png", "COCAL"],
  ["aoca-logo.png", "AOCA"],
  ["audoca-logo.png", "AUDOCA"],
  ["mpilatam-logo.png", "MPI LATAM"],
  ["mpimexico-logo.png", "MPI México"],
  ["site-logo.png", "SITE South America"],
  ["gbta-logo.png", "GBTA"],
  ["appce-logo.png", "APPCE"],
  ["aegve-logo.png", "AEGVE"],
  ["monterrey-logo.png", "Clúster de Turismo de Monterrey"],
  ["comir-logo.png", "COMIR"],
  ["usf-logo.png", "Universidad San Francisco de Quito"],
  ["asomiceec-logo.png", "ASOMICEEC"],
]);

export const mediaPartners = getLogos("media", [
  ["lm-logo.png", "Latinamerica Meetings"],
  ["meetingspanama-logo.png", "Meetings Panamá"],
  ["negocios-logo.png", "Negocios y Convenciones"],
  ["mdc-logo.png", "MDC"],
  ["eventos-logo.png", "Eventos Latinoamericanos"],
  ["factor-logo.png", "Factor Meetings"],
  ["puntomice-logo.png", "Punto MICE"],
]);
