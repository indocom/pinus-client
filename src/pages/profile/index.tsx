import React from "react";
import { NextPage } from "next";
import Page from "src/components/Page";
import ProfileContent from "src/pageContent/Profile";

const Profile: NextPage = () => {
  return (
    <Page
      title="Profile Page"
      description="My Profile Page (Amadeus)"
      subBanner
    >
      <ProfileContent />
    </Page>
  );
};

export default Profile;
