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

const contentfulImageIdMapping = {
  // Check assets -> Info
  about: "3s0YaiJwowRnrlBsCAUfD5",
  contact: "48oELobqhS35eYjuyUVdg2",
  events: "2oUHUf55iKjLby9YOGfyWE",
  home: "26IvBlg3GJcgQVkvZzGqw7",
  admissions: "1s4q7pxFl4T3oxAnCqWJ5W",
  default: "3s0YaiJwowRnrlBsCAUfD5",
};

export async function getImage(imageIdAlias: string) {
  const client = getContentfulReader();

  const defaultId = contentfulImageIdMapping["default"];
  const res = await client.getAsset(
    contentfulImageIdMapping[imageIdAlias] ?? defaultId
  );

  return res;
}
