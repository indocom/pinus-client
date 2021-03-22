import React from 'react';
import { NextPage } from "next";
import Page from "src/components/Page";
import AksaraServe from "src/pageContent/AksaraServe";
import { postInformation } from "src/pageContent/AksaraServe/stubs";

const Aksara: NextPage = () => {
  return (
    <Page title="Aksara" description="Aksara" renderBanner={false}>
      <AksaraServe {...postInformation} />
    </Page>
  );
};
  
export default Aksara;
  