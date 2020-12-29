import React from "react";
import {
  NextPage,
  GetStaticProps,
  GetStaticPaths,
  InferGetStaticPropsType,
} from "next";
import AdmissionsContent from "src/pageContent/Admissions";
import Page from "src/components/Page";
import { DocMeta, getDocBySlug, getAllDocs } from "src/lib/ssg";

export const getStaticPaths: GetStaticPaths = async () => {
  const docs = getAllDocs(["slug"], "admissions");
  return {
    paths: docs.map(({ slug }) => {
      return { params: { slug } };
    }),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const doc: DocMeta = getDocBySlug(params.slug, "admissions", [
    "title",
    "chapter",
    "subchapter",
    "section",
    "content",
  ]);

  const docs = getAllDocs(
    ["title", "chapter", "subchapter", "section", "slug"],
    "admissions"
  );

  return { props: { ...doc, docs } };
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
