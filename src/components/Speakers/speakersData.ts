export type SpeakerCardVariant = "dark" | "light";

export interface Speaker {
  id: string;
  name?: string;
  role?: string;
  biography?: string;
  photo?: {
    src: string;
    alt: string;
    position?: string;
  };
}

export interface SpeakerBlock {
  id: string;
  title?: string;
  variant: SpeakerCardVariant;
  monochrome: boolean;
  dividerBefore?: boolean;
  speakers: Speaker[];
}

// These are layout slots from the reference, not confirmed speaker identities.
const placeholderSpeakers = (blockId: string, count: number): Speaker[] =>
  Array.from({ length: count }, (_, index) => ({ id: `${blockId}-${index + 1}` }));

export const speakerBlocks: SpeakerBlock[] = [
  {
    id: "keynotes",
    title: "Keynotes",
    variant: "dark",
    monochrome: false,
    speakers: placeholderSpeakers("keynotes", 5),
  },
  {
    id: "speakers-light",
    variant: "light",
    monochrome: false,
    speakers: placeholderSpeakers("speakers-light", 3),
  },
  {
    id: "speakers-monochrome-dark",
    variant: "dark",
    monochrome: true,
    dividerBefore: true,
    speakers: placeholderSpeakers("speakers-monochrome-dark", 5),
  },
  {
    id: "speakers-monochrome-light",
    variant: "light",
    monochrome: true,
    speakers: placeholderSpeakers("speakers-monochrome-light", 3),
  },
];
