export interface AgendaActivity {
  id: string;
  title?: string;
  time?: string;
  note?: string;
  venue?: string;
  needsVenue?: boolean;
}

export interface AgendaActivityGroup {
  id: string;
  title?: string;
  activities: AgendaActivity[];
}

interface AgendaDayBase {
  id: string;
  label: string;
  date?: string;
}

export type AgendaDay = AgendaDayBase & (
  | { layout: "featured"; subtitle?: string; groups: AgendaActivityGroup[] }
  | { layout: "schedule"; activities: AgendaActivity[] }
);

// Transcribed from the supplied design; these details await final confirmation.
const conferenceActivities = (): AgendaActivity[] => [
  { id: "registration", time: "07:00 - 08:00", title: "Registro" },
  { id: "opening", time: "08:00 - 09:45", title: "Opening" },
  { id: "morning-break", time: "09:45 - 10:30", title: "Break", note: "45 min" },
  { id: "morning-conferences", time: "10:30 - 12:00", title: "Conferencias" },
  { id: "lunch", time: "12:00 - 13:30", title: "Lunch", note: "1:30 min" },
  { id: "afternoon-conferences", time: "13:30 - 15:00", title: "Conferencias" },
  { id: "afternoon-break", time: "15:00 - 15:45", title: "Break", note: "45 min" },
  { id: "closing-conferences", time: "15:45 - 16:45", title: "Conferencias" },
  { id: "departures", time: "19:00", title: "Salidas" },
];

export const agendaDays: AgendaDay[] = [
  {
    id: "day-1",
    label: "D1",
    date: "25 abril",
    layout: "featured",
    subtitle: "Arribos",
    groups: [
      {
        id: "tours",
        title: "Tour",
        activities: [
          { id: "tour-1", time: "08:00 - 12:00", title: "Tour 1" },
          { id: "tour-2", time: "08:00 - 12:00", title: "Tour 2" },
        ],
      },
      {
        id: "speed-dating",
        title: "Speed Dating",
        activities: [{ id: "speed-dating", time: "15:00 - 16:30", needsVenue: true }],
      },
      {
        id: "welcome-cocktail",
        title: "Welcome Cocktail",
        activities: [{ id: "welcome-cocktail", time: "19:00 - 21:00", needsVenue: true }],
      },
    ],
  },
  { id: "day-2", label: "D2", date: "26 abril", layout: "schedule", activities: conferenceActivities() },
  { id: "day-3", label: "D3", date: "27 abril", layout: "schedule", activities: conferenceActivities() },
];
