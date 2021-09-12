import React from "react";
import { NextPage } from "next";
import Page from "src/components/Page";
import ProfileContent from "src/pageContent/Profile";

const Profile: NextPage = () => {
  return (
    <Page
      bgImage="profile"
      title="Me Myself and I"
      subBanner
      description="Ah yes, let's get this learning journey started shall we? I'm here to try and do as many stuff as possible :)"
    >
      <ProfileContent />
    </Page>
  );
};

export default Profile;