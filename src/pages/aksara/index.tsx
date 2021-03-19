import React from "react";
import { NextPage } from "next";
import Page from "src/components/Page";
import AksaraContent from "src/pageContent/Aksara";
const Aksara: NextPage = () => {
  return (
    <Page title="Aksara" description="Aksara">
      <AksaraContent />
    </Page>
  );
};

export default Aksara;
