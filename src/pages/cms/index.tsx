import React from "react";
import { NextPage } from "next";
import CmsContent from "src/pageContent/cms";
import Page from "src/components/Page";

const Cms: NextPage = () => {
  return (
    <Page
      bgImage="admissions"
      title="Try The CMS"
      description="Just trying"
      subBanner
    >
      <CmsContent />
    </Page>
  );
};

export default Cms;
