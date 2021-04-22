import React from "react";
import { NextPage } from "next";

import PrivateRoute from "src/components/Auth/PrivateRoute";
import AdminArticles from "src/pageContent/Admin/AdminArticles";

const AdminArticlesPage: NextPage = () => {
  return (
    <PrivateRoute>
      <AdminArticles />
    </PrivateRoute>
  );
};

export default AdminArticlesPage;
