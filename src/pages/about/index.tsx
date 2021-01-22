import React from "react";
import AboutContent from "src/pageContent/About";
import Page from "src/components/Page";

const About: React.FC = () => {
  return (
    <Page
      bgImage="about"
      title="About Us"
      subBanner
      description="Founded in 1998, Perhimpunan Indonesia NUS (PINUS) serves as an avenue that fosters a tight-knit Indonesian community in NUS. Learn more about us."
    >
      <AboutContent />
    </Page>
  );
};

export default About;
