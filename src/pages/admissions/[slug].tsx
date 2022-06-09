import React from "react";
import {
  NextPage,
  GetStaticProps,
  GetStaticPaths,
  InferGetStaticPropsType,
} from "next";
import AdmissionsContent from "src/pageContent/Admissions";
import Page from "src/components/Page";
import {
  getAllDocsFromCMS,
  getDocBySlugFromCMS,
} from "src/utils/contentful/admissions";
import { ContentfulDocAdmissionMeta } from "src/utils/contentful/types";
import { Content } from "pinus-ui-library";
import { getImage } from "src/utils/contentful/images";
import { Asset } from "contentful";

export const getStaticPaths: GetStaticPaths = async () => {
  const docs = await getAllDocsFromCMS();

  const paths = docs.map(({ slug }) => {
    return { params: { slug } };
  });

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (Array.isArray(params.slug)) {
    throw TypeError(`Received the following array: [${params.slug.join(",")}]`);
  }

  const slug = params.slug;

  const doc = await getDocBySlugFromCMS(slug, "admissions");
  const docs = await getAllDocsFromCMS();
  let navItems: Content[] = [];
  docs.forEach((doc) => {
    const { title, chapter, subchapter } = doc;

    const { slug } = doc;

    // Add missing chapter
    if (navItems.filter((content) => content.title == chapter).length == 0) {
      const newChapter: Content = {
        title: chapter,
        path: "",
        children: [],
      };

      navItems.push(newChapter);
    }

    // TODO: Not safe
    const currChapter = navItems.filter(
      (currChapter) => currChapter.title == chapter
    )[0];
    const subchapterList = currChapter.children;

    // Add missing subchapter
    if (
      subchapterList.filter((content) => content.title == subchapter).length ==
      0
    ) {
      const newSubchapter: Content = {
        title: subchapter,
        path: "",
        children: [],
      };

      subchapterList.push(newSubchapter);
    }

    // TODO: Not safe
    const currSubchapter = subchapterList.filter(
      (currSubchapter) => currSubchapter.title == subchapter
    )[0];
    const contentList = currSubchapter.children;

    if (contentList.filter((content) => content.title == title).length == 0) {
      const newContent: Content = {
        title: title,
        path: slug,
        children: [],
      };

      contentList.push(newContent);
    }

    currChapter.children = subchapterList.sort((a, b) =>
      a.path.localeCompare(b.path)
    );
    currSubchapter.children = contentList.sort((a, b) =>
      a.path.localeCompare(b.path)
    );

    currChapter.path = currChapter.children[0].path;
    currSubchapter.path = currSubchapter.children[0].path;
  });

  // Sorts chapter
  const before = navItems.filter(
    (content) => content.title == "Before Acceptance"
  );
  const after = navItems.filter(
    (content) => content.title == "After Acceptance"
  );
  navItems = before.concat(after);

  const backgroundImage = await getImage("admissions");

  if (!backgroundImage) {
    return {
      notFound: true,
    };
  }

  return { props: { ...doc, navItems, backgroundImage }, revalidate: 60 };
};

const Admissions: NextPage = (
  props: InferGetStaticPropsType<ContentfulDocAdmissionMeta>
) => {
  const image = (props as { backgroundImage: Asset }).backgroundImage;
  const url = image.fields.file.url;
  return (
    <Page
      bgImageUrl={url}
      title="Admissions"
      description="You are our utmost priority - we have compiled essential information to help ease your NUS journey!"
      subBanner
    >
      <AdmissionsContent {...props} />
    </Page>
  );
};

export default Admissions;
