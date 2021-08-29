import React from "react";
import { NextPage } from "next";
import AboutContent from "src/pageContent/About";
import Page from "src/components/Page";
import ProfileContent from "src/pageContent/Profile";

const Profile: NextPage = () => {
  return (
    <Page
      bgImage="winston"
      title="Profile Page"
      subBanner
      description="Hello It's me I've been wondering if after all these years you've lied to Me !"
    >
      <ProfileContent/>
    </Page>
  );
};

export default Profile;
