import React from "react";
import {GetStaticPaths, GetStaticProps, NextPage } from "next";
import Page from "src/components/Page";
import { getPeopleSlugsFromKudoboard } from "src/utils/contentful/kudo_read";
import {Seniors} from "src/pageContent/Kudos";


const Kudos: NextPage = () => {
  return (
    <Page
      bgImage=""
      title="Kudos"
      subBanner
      description="Drop your kudos down below !"
    >
    <Seniors />
    </Page>
  );
};

export default Kudos;
