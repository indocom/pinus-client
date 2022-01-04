import { createClient, Entry } from "contentful";

export async function getItems(): Promise<Entry<EventData>[]> {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries<EventData>({ content_type: "events" });

  return res.items;
}

export interface SectionInfo {
  id: string;
  data: EventData;
  options: EventOptions;
}

export interface EventData {
  name: string;
  description: string;
  url: string;
  imageSrc: string;
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
