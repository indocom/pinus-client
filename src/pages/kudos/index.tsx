import React from "react";
import { NextPage } from "next";
import Page from "src/components/Page";
import { Seniors } from "src/pageContent/Kudos";

const Kudos: NextPage = () => {
  return (
    <Page
      bgImage="admissions"
      title="Senior Appreciation Night"
      subBanner
      description="Send your well wishes for our graduating batch!"
    >
      <Seniors />
    </Page>
  );
};

export default Kudos;
