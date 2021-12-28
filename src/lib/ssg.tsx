import fs from "fs";
import { sync } from "glob";
import { join, relative } from "path";
import matter from "gray-matter";

import { createClient, Entry } from "contentful";
import { Document } from '@contentful/rich-text-types';

export interface DocMeta {
  title: string;
  chapter: string;
  subchapter: string;
  section: string;
  content?: string;
  slug?: string | string[];
  post?: Document
}

interface slugRetrieved {
  slug: string
}

// Queries the list of slugs
export const getDocSlugs = (subDir: string): string[] => {
  const docsDirectory = join(process.cwd(), `docs/${subDir}`);
  const files = sync(join(docsDirectory, "**/*.md"));
  const fileNames = files.map((file) => relative(docsDirectory, file));
  return fileNames;
};

export async function getDocSlugsFromCMS(): Promise<string[]> {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries<slugRetrieved>({
    content_type: "admissions", 
    select: "fields.slug"
  })

  return res.items.map((x: Entry<slugRetrieved>) => x.fields.slug);
};

export async function getDocBySlugFromCMS(slug: string | string[]): Promise<DocMeta> {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY,
  });

  if (Array.isArray(slug)) {
    slug = slug.join('-');
  }
  const res = await client.getEntries<DocMeta>({
    content_type: "admissions", 
    'fields.slug[match]': slug
  })

  // Obviously wrong + potentially buggy implementation since match may return more than one doc
  // To be dealt with some other time
  return res.items[0].fields;
}

// Get actual document using slug
export const getDocBySlug = (
  slug: string | string[],
  subDir: string,
  fields: string[] = []
): DocMeta => {
  let realSlug;
  if (typeof slug === "string") {
    realSlug = slug.replace(/\.md$/, "");
  } else {
    realSlug = slug.join("/").replace(/\.md$/, "");
  }

  const fullPath = join(
    join(process.cwd(), `docs/${subDir}`),
    `${realSlug}.md`
  );
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const items: DocMeta = {
    title: "",
    chapter: "",
    subchapter: "",
    section: "",
  };

  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug.split("/");
    }
    if (field === "content") {
      items[field] = content;
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
};

// combination of GetDocSlugs and GetDocBySlug
export const getAllDocs = (
  fields: string[] = [],
  subDir: string
): Array<DocMeta> => {
  const slugs = getDocSlugs(subDir);
  const docs = slugs.map((slug) => getDocBySlug(slug, subDir, fields));
  return docs;
};

// combination of GetDocSlugs and GetDocBySlug
export async function getAllDocsFromCMS(): Promise<DocMeta[]> {
  const slugs = await getDocSlugsFromCMS();
  const docs = await Promise.all(slugs.map((slug) => getDocBySlugFromCMS(slug)));
  return docs;
};
