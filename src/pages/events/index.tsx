import React from "react";
import { NextPage } from "next";
import EventsContent from "src/pageContent/Events";
import Page from "src/components/Page";

const Events: NextPage = () => {
  return (
    <Page
      bgImage="events"
      title="PINUS Events"
      subBanner
      description="It is at the heart of our events to help Indonesians in NUS feel home away from home, while showcasing Indonesia’s cultural diversity to a wider audience base. Find out more about our events."
    >
      <EventsContent />
    </Page>
  );
};

export default Events;
