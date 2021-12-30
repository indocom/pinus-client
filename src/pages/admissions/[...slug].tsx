import React from "react";
import {
  NextPage,
  GetStaticProps,
  GetStaticPaths,
  InferGetStaticPropsType,
} from "next";
import AdmissionsContent from "src/pageContent/Admissions";
import Page from "src/components/Page";
import { Content } from "pinus-ui-library";
import { DocMeta, getAllDocs, getAllDocsFromCMS, getDocBySlugFromCMS } from "src/lib/ssg";

export const getStaticPaths: GetStaticPaths = async () => {
  const docs = getAllDocs(["slug"], "admissions");

  // TODO: WHY THIS NO WORK???
  // const docs = await getAllDocsFromCMS();

  return {
    paths: docs.map(({ slug }) => {
      return { params: { slug } };
    }),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const doc = await getDocBySlugFromCMS(params.slug);
  const docs = await getAllDocsFromCMS();

  const navItems: Content[] = [];
  docs.forEach(doc => {
    const { title, chapter, subchapter, section} = doc;

    let {slug} = doc;
    if (Array.isArray(slug)) {
      slug = slug.join('/');
    }

    // Add missing chapter
    if (navItems.filter(content => content.title == chapter).length == 0) {
      const newChapter: Content = {
        title: chapter,
        path: "",
        children: []
      }

      navItems.push(newChapter);
    }

    // TODO: Not safe 
    const currChapter = navItems.filter(currChapter => currChapter.title == chapter)[0];
    const subchapterList = currChapter.children;

    // Add missing subchapter
    if (subchapterList.filter(content => content.title == subchapter).length == 0) {
      const newSubchapter: Content = {
        title: subchapter,
        path: "",
        children: []
      }

      subchapterList.push(newSubchapter);
    }

    // TODO: Not safe
    const currSubchapter = subchapterList.filter(currSubchapter => currSubchapter.title == subchapter)[0];
    const contentList = currSubchapter.children;
    if (contentList.filter(content => content.title == title).length == 0) {
      const newContent: Content = {
        title: title, 
        path: section, 
        children: []
      }

      contentList.push(newContent);
    }
  })

  // TODO: this form of casting seems bad also...
  navItems.forEach(chapter => chapter.children.map(subchapter => subchapter.children.sort((a, b) => +a.path - +b.path)))
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
