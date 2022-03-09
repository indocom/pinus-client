import React from "react";
import { InferGetStaticPropsType, NextPage } from "next";
import HomeContent from "src/pageContent/Home";
import Page from "src/components/Page";
import { getImage } from "src/utils/contentful/images";
import { Asset } from "contentful";

export async function getStaticProps() {
  const backgroundImage = await getImage("home");

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

const Home: NextPage = ({
  backgroundImage,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const image = backgroundImage as Asset;
  const url = image.fields.file.url;
  return (
    <Page
      bgImageUrl={url}
      title="Perhimpunan Indonesia NUS"
      description="Fostering relationships among Indonesians in NUS, building bridges between Indonesians and NUS."
    >
      <HomeContent />
    </Page>
  );
};

export default Home;
