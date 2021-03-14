import React from "react";
import { NextPage } from "next";
import VisitContent from "src/pageContent/Visit";
import Page from "src/components/Page";

const Visit: NextPage = () => {
  return (
    <Page
      bgImage="admissions"
      title="Visit Us"
      description="Planning to visit NUS? In need of guidance? Leave us your details and we'll get back to you on how we can help you with your arrangements!"
      subBanner
    >
      <VisitContent />
    </Page>
  );
};

export default Visit;
