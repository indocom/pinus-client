import React from "react";
import {
  NextPage,
  GetStaticProps,
  GetStaticPaths,
  InferGetStaticPropsType,
} from "next";
import AdmissionsContent from "src/pageContent/Admissions";
import Page from "src/components/Page";
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

  const navItems = {};
  docs.forEach((doc) => {
    const { title, chapter, subchapter, section, slug } = doc;
    const newDoc = {
      title,
      subchapter,
      section,
      slug,
    };
    if (!(chapter in navItems)) {
      navItems[chapter] = [newDoc];
    } else {
      navItems[chapter].push(newDoc);
    }
  });

  for (const chapter in navItems) {
    navItems[chapter].sort((a, b) => (a.section > b.section ? 1 : -1));
  }

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
