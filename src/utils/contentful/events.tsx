import { Entry } from "contentful";
import { ContentfulEvent } from "./types";
import { getContentfulReader } from "./utils";

export async function getEventItems(): Promise<Array<ContentfulEvent>> {
  const client = getContentfulReader();

  const res = await client.getEntries<ContentfulEvent>({
    content_type: "events",
  });

  return res.items.map((x) => x.fields);
}
