import React from "react";
import { NextPage } from "next";
import Page from "src/components/Page";
import ProfileContent from "src/pageContent/Profile";

const Profile: NextPage = () => {
  return (
    <Page
      bgImage="profile"
      title="Nixon"
      subBanner
      description="Halo gw Nixon Y1 DSA. Nama bos gw Simon."
    >
      <ProfileContent />
    </Page>
  );
};

export default Profile;
