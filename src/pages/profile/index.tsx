import React from "react";
import { NextPage } from "next";
import Page from "src/components/Page";
import ProfileContent from "src/pageContent/Profile";

const Profile: NextPage = () => {
  return (
    <Page
      bgImage="profile"
      title="Profile Page"
      subBanner
      description="Hello, PINUS Tech! Happy to be working with you guys :D"
    >
      <ProfileContent />
    </Page>
  );
};

export default Profile;