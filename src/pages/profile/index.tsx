import React from "react";
import { NextPage } from "next";
import Page from "src/components/Page";
import SimonProfile from "src/pageContent/Profile";

const Profile: NextPage = () => {
  return (
    <Page title="Profile" description="Simon's Profile" renderBanner={false}>
      <SimonProfile />
    </Page>
  );
};

export default Profile;
