import React from "react";
import { GetStaticPaths, InferGetStaticPropsType, NextPage } from "next";
import Page from "src/components/Page";
import { Seniors } from "src/pageContent/Kudos";
import { getImage } from "src/utils/contentful/images";
import { Asset } from "contentful";
import { useRouter } from "next/router";
import { getYearfromKudoboard } from "src/utils/contentful/kudo";

export const getStaticPaths: GetStaticPaths = async () => {
  const docs = await getYearfromKudoboard();
  const paths = docs.map((year) => {
    return {
      params: { year },
    };
  });

  console.debug(`Generated static paths: ${JSON.stringify(paths)}`);
  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps() {
  const backgroundImage = await getImage("admissions");

  if (!backgroundImage) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      backgroundImage,
    },
    revalidate: 60, // seconds
  };
}

const Kudos: NextPage = ({
  backgroundImage,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const image = backgroundImage as Asset;
  const url = image.fields.file.url;
  const router = useRouter();
  const year = parseInt(router.query.year as string);
  return (
    <Page
      bgImageUrl={url}
      title={"Board of Gratitude to Graduates of " + year}
      subBanner
      description="Send your well wishes for our graduating batch!"
    >
      <Seniors year={year} />
    </Page>
  );
};

export default Kudos;
