import { events, EventInfo } from "./data";

export const getEventById = (id: string): EventInfo => {
  return events.find((e) => e.id === id);
};
