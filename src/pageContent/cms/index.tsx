import { createClient, Entry } from "contentful";
import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from '@contentful/rich-text-types';
import { getAllDocsFromCMS } from "src/lib/ssg";

// interface DocMeta {
//   title: string,
//   section: string,
//   chapter: string, 
//   subchapter: string, 
//   post: Document, 
//   slug: string
// }

interface DocMeta {
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

async function getDocSlugs(): Promise<string[]> {
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

async function getDocBySlug(slug: string): Promise<DocMeta> {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries<DocMeta>({
    content_type: "admissions", 
    'fields.slug[match]': slug
  })

  // Obviously wrong + potentially buggy implementation since match may return more than one doc
  // To be dealt with some other time
  return res.items[0].fields;
}

const Cms: React.FC = () => {
  React.useEffect(() => {
    async function getData() {
      const res = await getDocSlugs();
      let docs = await Promise.all(res.map(async slug => await getDocBySlug(slug)));

      docs = await getAllDocsFromCMS();

      setData(docs);
    }
    getData();
  }, []);

  const [posts, setData] = React.useState<Array<DocMeta>>();
  if (!posts) {
    return <div>No posts found!</div>;
  }
  console.log(posts);
  return (
    <div>
      {posts.map((post: DocMeta, index) => 
        (
          <div>
            <div key={index}>{post.slug}</div>
            <div key={index}>{post.section}</div>
            <div key={index}>{post.chapter}</div>
            <div key={index}>{post.subchapter}</div>
            <div> {documentToReactComponents(post.post)}</div>
          </div>
        )
      )}
    </div>
  );
};

export default Cms;
