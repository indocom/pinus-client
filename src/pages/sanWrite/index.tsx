import React from "react";
import { NextPage } from "next";
import SanWriteContent from "src/pageContent/SanWrite";
import Page from "src/components/Page";

const SanWrite: NextPage = () => {
  return (
    <Page
      bgImage="events"
      title="SAN"
      subBanner
      description="Write a message for our graduating batch!"
    >
      <SanWriteContent />
    </Page>
  );
};

export default SanWrite;
