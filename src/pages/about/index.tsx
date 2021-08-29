import React from "react";
import { NextPage } from "next";
import AboutContent from "src/pageContent/About";
import Page from "src/components/Page";

const About: NextPage = () => {
  return (
    <Page
      bgImage="about"
      title="About Us"
      subBanner
      description="Founded in 1998, Perhimpunan Indonesia NUS (PINUS) serves as an avenue that fosters a tight-knit Indonesian community in NUS. Learn more about us. AHHAHAHA"
    >
      <AboutContent />
    </Page>
  );
};

export default About;
