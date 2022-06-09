import React from "react";
import {
  NextPage,
  GetStaticProps,
  GetStaticPaths,
  InferGetStaticPropsType,
} from "next";
import Page from "src/components/Page";
import {
  getAllCcaDocsFromCMS,
  getDocBySlugFromCMS,
} from "src/utils/contentful/admissions";
import { ContentfulDocCcaMeta } from "src/utils/contentful/types";
import { Content } from "pinus-ui-library";
import { getImage } from "src/utils/contentful/images";
import { Asset } from "contentful";
import CcaContent from "../../pageContent/CCA";

export const getStaticPaths: GetStaticPaths = async () => {
  const docs = await getAllCcaDocsFromCMS();

  const paths = docs.map(({ slug }) => {
    return { params: { slug } };
  });

  return {
    paths,
    fallback: "blocking",
  };
};

function updateNavItemsOnChapter(
  docs: ContentfulDocCcaMeta[],
  chapter: string,
  navItems: Content[]
) {
  const children = docs
    .filter((x) => x.chapter == chapter)
    .map((x) => ({
      title: x.title,
      path: x.slug,
      children: [],
    }));

  const newChapter: Content = {
    title: chapter,
    path: "",
    children: children,
  };

  navItems.push(newChapter);
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (Array.isArray(params.slug)) {
    throw TypeError(`Received the following array: [${params.slug.join(",")}]`);
  }

  const slug = params.slug;

  const doc = await getDocBySlugFromCMS(slug, "cca");
  const docs = await getAllCcaDocsFromCMS();
  const navItems: Content[] = [];
  const chapters = new Set<string>();

  docs.forEach((doc) => {
    const { chapter } = doc;
    chapters.add(chapter);
  });

  const indexChapter = "Index";
  updateNavItemsOnChapter(docs, indexChapter, navItems);

  Array.from(chapters)
    .sort()
    .forEach((chapter) => {
      if (chapter == indexChapter) {
        return;
      }

      updateNavItemsOnChapter(docs, chapter, navItems);
    });

  const backgroundImage = await getImage("contact");

  if (!backgroundImage) {
    return {
      notFound: true,
    };
  }

  return { props: { ...doc, navItems, backgroundImage }, revalidate: 60 };
};

const Cca: NextPage = (
  props: InferGetStaticPropsType<ContentfulDocCcaMeta>
) => {
  const image = (props as { backgroundImage: Asset }).backgroundImage;
  const url = image.fields.file.url;
  return (
    <Page
      bgImageUrl={url}
      title="CCAs and Clubs"
      description="Thinking of joining a club or CCA but still feeling unsure? Fret not! We have curated a comprehensive guide just for you!"
      subBanner
    >
      <CcaContent {...props} />
    </Page>
  );
};

export default Cca;
