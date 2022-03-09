import React from "react";
import { InferGetStaticPropsType, NextPage } from "next";
import AboutContent from "src/pageContent/About";
import Page from "src/components/Page";
import { getImage } from "src/utils/contentful/images";
import { Asset } from "contentful";

export async function getStaticProps() {
  const backgroundImage = await getImage("about");

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

const About: NextPage = ({
  backgroundImage,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const image = backgroundImage as Asset;
  const url = image.fields.file.url;
  return (
    <Page
      bgImageUrl={url}
      title="About Us"
      subBanner
      description="Founded in 1998, Perhimpunan Indonesia NUS (PINUS) serves as an avenue that fosters a tight-knit Indonesian community in NUS. Learn more about us."
    >
      <AboutContent />
    </Page>
  );
};

export default About;
