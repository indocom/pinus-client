import { createClient, Entry } from "contentful";
import { ContentfulImage } from "src/utils/contentful/types";

export async function getImages() {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY,
  });

  interface BackgroundImage {
    image: Array<Entry<ContentfulImage>>;
  }

  const res = await client.getEntries<BackgroundImage>({
    content_type: "backgroundImage",
  });

  return res.items[0].fields.image;
}
