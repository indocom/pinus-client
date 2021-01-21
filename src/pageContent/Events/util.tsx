import { sections, EventData } from "./data";

export const getEventById = (id: string): EventData | undefined => {
  const s = sections.find((e) => e.id === id);
  if (s === undefined) {
    return undefined;
  }

  return s.data;
};
