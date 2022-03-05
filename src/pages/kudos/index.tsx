import React from "react";
import { InferGetStaticPropsType, NextPage } from "next";
import Page from "src/components/Page";
import { Seniors } from "src/pageContent/Kudos";
import { getImage } from "src/utils/contentful/images";
import { Asset } from "contentful";

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
  return (
    <Page
      bgImageUrl={url}
      title="Senior Appreciation Night"
      subBanner
      description="Send your well wishes for our graduating batch!"
    >
      <Seniors />
    </Page>
  );
};

export default Kudos;
