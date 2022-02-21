import { createClient, Entry } from "contentful";
import {
  ContentfulDocMeta,
  ContentfulKudoBoard,
  ContentfulKudos,
  ContentfulPerson,
} from "src/utils/contentful/types";

export async function getPeopleSlugsFromKudoboard(): Promise<string[]> {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries<ContentfulKudoBoard>({
    content_type: "kudoboard",
  });
  const people = res.items[0].fields.people;
  return people.map((x) => x.fields.name);
}

export async function getPeopleKudos(person): Promise<ContentfulKudos[]> {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY,
  });

  const changeSlugToName = (slug) => {
    const str = slug.replace(/-/g, " ");
    const splitStr = str.toLowerCase().split(" ");
    for (let i = 0; i < splitStr.length; i++) {
      splitStr[i] =
        splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return splitStr.join(" ");
  };
  const res = await client.getEntries<ContentfulPerson>({
    content_type: "person",
    "fields.name": changeSlugToName(person),
  });
  const contents = res.items[0].fields.content;
  if (contents[0].fields === undefined) {
    return;
  }
  return contents.map((x) => x.fields);
}
