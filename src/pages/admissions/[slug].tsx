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

  const doc = await getDocBySlugFromCMS(params.slug as string);
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
