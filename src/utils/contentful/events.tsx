import { createClient, Entry } from "contentful";
import { ContentfulEvent } from "./types";

export async function getItems(): Promise<Entry<ContentfulEvent>[]> {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries<ContentfulEvent>({
    content_type: "events",
  });

  return res.items;
}
