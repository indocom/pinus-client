import { Document } from "@contentful/rich-text-types";

export interface EventData {
  name: string;
  description: Document;
  url: string;
  imageSrc: string;
}

export interface SectionInfo {
  id: string;
  data: EventData;
  options: EventOptions;
}

interface EventOptions {
  flip: boolean;
  strips: StripData[];
}

export interface StripData {
  color: "red" | "blue" | "yellow";
  col: [number, number];
  row: [number, number];
  style?: string;
}

export const optionsArray: Array<EventOptions> = [
  {
    flip: false,
    strips: [
      { color: "yellow", col: [1, 4], row: [1, 4] },
      {
        color: "red",
        col: [1, 12],
        row: [2, 4],
        style: `mt-10 lg:mt-5 ml-10 lg:ml-3`,
      },
    ],
  },
  {
    flip: true,
    strips: [
      {
        color: "red",
        col: [1, 12],
        row: [3, 4],
        style: `-ml-20 lg:-ml-3`,
      },
      {
        color: "blue",
        col: [1, 12],
        row: [2, 4],
        style: `mt-10 -ml-20 lg:-ml-3`,
      },
    ],
  },
  {
    flip: false,
    strips: [
      {
        color: "yellow",
        col: [1, 12],
        row: [2, 5],
        style: `mt-5 lg:mt-0 ml-20 lg:ml-3`,
      },
    ],
  },
  {
    flip: false,
    strips: [
      {
        color: "red",
        col: [1, 12],
        row: [2, 4],
        style: `mt-10 lg:mt-5 -ml-10 lg:-ml-3`,
      },
    ],
  },
  {
    flip: true,
    strips: [
      {
        color: "blue",
        col: [1, 12],
        row: [2, 4],
        style: `mt-10 lg:mt-5 -ml-20 lg:-ml-5`,
      },
    ],
  },
];
