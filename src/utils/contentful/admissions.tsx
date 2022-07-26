import {
  ContentfulDocAdmissionMeta,
  ContentfulDocCcaMeta,
} from "src/utils/contentful/types";
import { getContentfulReader } from "./utils";

export async function getDocSlugsFromCMS(): Promise<string[]> {
  const client = getContentfulReader();

  interface Retrieved {
    slug: string;
  }

  const res = await client.getEntries<Retrieved>({
    content_type: "admissions",
    select: "fields.slug",
  });

  return res.items.map((x) => x.fields.slug);
}

async function getDocsBySlugsFromCMS(
  slug: string | string[]
): Promise<ContentfulDocAdmissionMeta[]> {
  const client = getContentfulReader();

  if (Array.isArray(slug)) {
    slug = slug.join(",");
  }

  // Less than ideal solution, since it will match with before-01, etc
  // However, this would save the entries fetch time to 1 API call
  const res = await client.getEntries<ContentfulDocAdmissionMeta>({
    content_type: "admissions",
    "fields.slug[in]": slug,
  });

  console.debug(`Getting response docs items for : ${res.items}`);

  return res.items.map((o) => o.fields);
}

export async function getDocBySlugFromCMS(
  slug: string,
  content_type: string
): Promise<ContentfulDocAdmissionMeta> {
  const client = getContentfulReader();

  const res = await client.getEntries<ContentfulDocAdmissionMeta>({
    content_type: content_type,
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
export async function getAllDocsFromCMS(): Promise<
  ContentfulDocAdmissionMeta[]
> {
  console.group(`Within getAllDocsFromCMS, fetching all docs`);

  const slugs = await getDocSlugsFromCMS();
  console.debug(`Getting slugs of ${slugs}`);

  const docs = await getDocsBySlugsFromCMS(slugs);
  console.debug(`Getting all docs by slugs of ${docs}`);
  console.groupEnd();

  return docs;
}

export async function getAllCcaDocsFromCMS(): Promise<ContentfulDocCcaMeta[]> {
  const client = getContentfulReader();

  const res = await client.getEntries<ContentfulDocCcaMeta>({
    content_type: "cca",
  });

  return res.items.map((x) => x.fields);
}
