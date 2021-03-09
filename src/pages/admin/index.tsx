import React from "react";
import { NextPage } from "next";

import PrivateRoute from "src/components/Auth/PrivateRoute";
import AdminDashboard from "src/pageContent/Admin/AdminDashboard";

const Admin: NextPage = () => {
  return (
    <PrivateRoute>
      <AdminDashboard />
    </PrivateRoute>
  );
};

export default Admin;
