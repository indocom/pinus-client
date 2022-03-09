import React from "react";
import { InferGetStaticPropsType, NextPage } from "next";
import EventsContent from "src/pageContent/Events";
import Page from "src/components/Page";
import { Asset } from "contentful";
import { getImage } from "src/utils/contentful/images";

export async function getStaticProps() {
  const backgroundImage = await getImage("events");

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

const Events: NextPage = ({
  backgroundImage,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const image = backgroundImage as Asset;
  const url = image.fields.file.url;
  return (
    <Page
      bgImageUrl={url}
      title="PINUS Events"
      subBanner
      description="It is at the heart of our events to help Indonesians in NUS feel home away from home, while showcasing Indonesia’s cultural diversity to a wider audience base. Find out more about our events."
    >
      <EventsContent />
    </Page>
  );
};

export default Events;
