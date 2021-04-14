import React from "react";
import { NextPage } from "next";
import Page from "src/components/Page";
import PrivateRoute from "src/components/Auth/PrivateRoute";
import CreatePost from "src/pageContent/Admin/AdminArticles/Create";

const CreatePostAdmin: NextPage = () => {
  return (
    <Page
      title="AdminCreate"
      description="AdminCreate"
      renderBanner={false}
      renderNavbar={false}
    >
      <PrivateRoute>
        <CreatePost />
      </PrivateRoute>
    </Page>
  );
};

export default CreatePostAdmin;
