import React from "react";
import {
  NextPage,
  GetStaticProps,
  GetStaticPaths,
  InferGetStaticPropsType,
} from "next";
import AdmissionsContent from "src/pageContent/Admissions";
import Page from "src/components/Page";
import { DocMeta, getAllDocsFromCMS, getDocBySlugFromCMS } from "src/lib/ssg";
import { Content } from "pinus-ui-library";

export const getStaticPaths: GetStaticPaths = async () => {
  const docs = await getAllDocsFromCMS();

  const paths = docs.map(({ slug }) => {
    return { params: { slug } };
  });

  console.debug(`Generated static paths: ${JSON.stringify(paths)}`);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
<<<<<<< HEAD
  if (Array.isArray(params.slug)) {
    throw TypeError(`Received the following array: [${params.slug.join(",")}]`);
=======
  let slug: string;
  if (Array.isArray(params.slug)) {
    slug = params.slug.join("-"); // Should not occur
    throw TypeError(`Received the following array: [${params.slug.join(",")}]`);
  } else {
    slug = params.slug;
>>>>>>> e3ffd8657ab903f1e2970447c875db7b4e34ec18
  }

  const slug = params.slug;

  const doc = await getDocBySlugFromCMS(slug);
  const docs = await getAllDocsFromCMS();

<<<<<<< HEAD
  const navItems: Content[] = [];
=======
  let navItems: Content[] = [];
>>>>>>> e3ffd8657ab903f1e2970447c875db7b4e34ec18
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

<<<<<<< HEAD
    currChapter.path = subchapterList
      .map((x) => x.path)
      .sort((a, b) => a.localeCompare(b))[0];
    currSubchapter.path = contentList
      .map((x) => x.path)
      .sort((a, b) => a.localeCompare(b))[0];
  });

  // TODO: this form of casting seems bad also...
  navItems.forEach((chapter) =>
    chapter.children.map((subchapter) =>
      subchapter.children.sort((a, b) => a.path.localeCompare(b.path))
    )
  );
=======
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
  navItems = navItems.sort((a, b) => a.path.localeCompare(b.path));

>>>>>>> e3ffd8657ab903f1e2970447c875db7b4e34ec18
  return { props: { ...doc, navItems } };
};

const Admissions: NextPage = (props: InferGetStaticPropsType<DocMeta>) => {
  return (
    <Page
      bgImage="admissions"
      title="Admissions"
      description="You are our utmost priority - we have compiled essential information to help ease your NUS journey!"
      subBanner
    >
      <AdmissionsContent {...props} />
    </Page>
  );
};

export default Admissions;
