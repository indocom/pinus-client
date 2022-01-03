import { createClient, Entry } from "contentful";
import { Document } from "@contentful/rich-text-types";

export interface DocMeta {
  title: string;
  chapter: string;
  subchapter: string;
  section: string;
  content?: string;
  slug?: string;
  post?: Document;
}

export async function getDocSlugsFromCMS(): Promise<string[]> {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY,
  });

  interface Retrieved {
    slug: string;
  }
  
  // function makeSlug(doc: Retrieved): string {
  //   return `${doc.chapter.split(' ')[0].toLocaleLowerCase()}-${doc.section}`; // Define how the slug should be made
  // }

  const res = await client.getEntries<Retrieved>({
    content_type: "admissions",
    select: "fields.slug",
  });

  return res.items.map((x: Entry<Retrieved>) => x.fields.slug);
}

export async function getDocsBySlugsFromCMS(
  slug: string | string[]
): Promise<DocMeta[]> {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY,
  });

  if (Array.isArray(slug)) {
    slug = slug.join(",");
  }

  // Less than ideal solution, since it will match with before-01, etc
  // However, this would save the entries fetch time to 1 API call
  const res = await client.getEntries<DocMeta>({
    content_type: "admissions",
    "fields.slug[in]": slug,
  });

  console.debug(`Getting response docs items for : ${res.items}`);

  return res.items.map((o) => o.fields);
}

export async function getDocBySlugFromCMS(slug: string): Promise<DocMeta> {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries<DocMeta>({
    content_type: "admissions",
    "fields.slug[match]": slug,
  });

  if (res.items.length > 1) {
    console.error(`Slug is not unique! ${res.items.length} returned`);
    return;
  }

  if (res.items.length < 1) {
    console.error(`Doc ${slug} is not found`);
    return;
  }

  return res.items[0].fields;
}

// combination of GetDocSlugs and GetDocBySlug
export async function getAllDocsFromCMS(): Promise<DocMeta[]> {
  console.group(`Within getAllDocsFromCMS, fetching all docs`);

  const slugs = await getDocSlugsFromCMS();
  console.debug(`Getting slugs of ${slugs}`);

  const docs = await getDocsBySlugsFromCMS(slugs);
  console.debug(`Getting all docs by slugs of ${docs}`);
  console.groupEnd();

  return docs;
}
