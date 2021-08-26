import React from "react";
import { NextPage } from "next";
import Page from "src/components/Page";
import ProfileContent from "src/pageContent/Profile";

const Profile: NextPage = () => {
  return (
    <Page
      bgImage="about"
      title="Profile Page"
      subBanner
      description="My Profile Page"
    >
      <ProfileContent />
    </Page>
  );
};

export default Profile;
