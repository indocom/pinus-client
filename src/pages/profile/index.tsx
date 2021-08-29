import React from "react";
import { NextPage } from "next";
import Page from "src/components/Page";
import ProfileContent from "src/pageContent/Profile";

const Profile: NextPage = () => {
  return (
    <Page bgImage="profile" title="Profile Page" subBanner description="">
      <ProfileContent />
    </Page>
  );
};

export default Profile;
