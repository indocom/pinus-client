import React from "react";
import HomeContent from "src/pageContent/Home";
import Page from "src/components/Page";

const Home: React.FC = () => {
  return (
    <Page
      bgImage="home"
      title="Perhimpunan Indonesia NUS"
      description="Fostering relationships among Indonesians in NUS, building bridges between Indonesians and NUS."
    >
      <HomeContent />
    </Page>
  );
};

export default Home;
