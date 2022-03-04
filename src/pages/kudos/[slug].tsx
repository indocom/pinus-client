import { useRouter } from "next/router";
import { KudosContent } from "src/pageContent/Kudos";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Page from "src/components/Page";
import { getPeopleSlugsFromKudoboard } from "src/utils/contentful/kudo";
import React from "react";

export const getStaticPaths: GetStaticPaths = async () => {
  const docs = await getPeopleSlugsFromKudoboard();

  const paths = docs.map((name) => {
    const slug = name.toLowerCase().replace(/ /g, "-");
    return {
      params: { slug },
    };
  });

  console.debug(`Generated static paths: ${JSON.stringify(paths)}`);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async () => {
  return { props: {} };
};

const KudosPerson: NextPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  let name: string = slug as string;

  name = name
    .split("-")
    .map((word) => {
      return word[0].toUpperCase() + word.substring(1);
    })
    .join(" ");

  return (
    <Page
      bgImage="admissions"
      title={"Happy Graduation, " + name}
      subBanner
      description={`Hello ${name}, here are our well wishes for you! Hope you enjoyed your journey in NUS!`}
    >
      <div>
        <KudosContent person={slug} />
      </div>
    </Page>
  );
};

export default KudosPerson;
