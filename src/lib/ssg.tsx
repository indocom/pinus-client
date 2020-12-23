import fs from "fs";
import { sync } from "glob";
import { join, relative } from "path";
import matter from "gray-matter";

export interface DocMeta {
  content: string;
  title: string;
  chapter: string;
  subchapter: string;
  section: string;
  slug?: string;
}

export const getDocSlugs = (subDir: string): string[] => {
  const docsDirectory = join(process.cwd(), `docs/${subDir}`);
  const files = sync(join(docsDirectory, "**/*.md"));
  const fileNames = files.map((file) => {
    return relative(docsDirectory, file);
  });
  return fileNames;
};

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
    content: "",
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

export const getAllDocs = (
  fields: string[] = [],
  subDir: string
): Array<DocMeta> => {
  const slugs = getDocSlugs(subDir);
  const docs = slugs.map((slug) => getDocBySlug(slug, subDir, fields));
  return docs;
};
