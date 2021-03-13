import React from "react";
import { NextPage } from "next";
import VisitContent from "src/pageContent/Visit";
import Page from "src/components/Page";

const Visit: NextPage = () => {
  return (
    <Page bgImage="about" title="Visit Us" description="Visit us!" subBanner>
      <VisitContent />
    </Page>
  );
};

export default Visit;
