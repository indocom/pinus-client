import React from "react";
import AboutContent from "src/pageContent/About";
import Page from "src/components/Page";

const About: React.FC = () => {
  return (
    <Page
      bgImage="about"
      title="About Us"
      subBanner
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas odio dui, laoreet id consequat finibus, iaculis quis risus. Maecenas quis efficitur eros, a iaculis metus."
    >
      <AboutContent />
    </Page>
  );
};

export default About;
