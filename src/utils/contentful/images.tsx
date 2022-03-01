import { Entry } from "contentful";
import { ContentfulImage } from "src/utils/contentful/types";
import { getContentfulReader } from "./utils";

export async function getImages() {
  const client = getContentfulReader();

  interface BackgroundImage {
    image: Array<Entry<ContentfulImage>>;
  }

  const res = await client.getEntries<BackgroundImage>({
    content_type: "backgroundImage",
  });

  return res.items[0].fields.image.map((item) => item.fields);
}
