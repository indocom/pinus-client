import React from "react";
import { InferGetStaticPropsType, NextPage } from "next";
import { getImage } from "../../utils/contentful/images";
import { Asset } from "contentful";
import Page from "../../components/Page";
import { YearbookContent } from "../../pageContent/Yearbooks";

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

const Yearbooks: NextPage = ({
  backgroundImage,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const image = backgroundImage as Asset;
  const url = image.fields.file.url;
  return (
    <Page
      bgImageUrl={url}
      title={"Yearbooks Archive"}
      subBanner
      description="A collection of PINUSians memories"
    >
      <YearbookContent />
    </Page>
  );
};

export default Yearbooks;
