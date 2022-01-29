import React from "react";
import { NextPage } from "next";
import PrivateRoute from "../../components/Auth/PrivateRoute";

const Login: NextPage = () => {
  return (
    <PrivateRoute>
      <div>
        Content Management System (CMS) can be used to change the content of
        events, background images and admissions (and more!). We are using
        Contentful headless CMS, for the credential, please ask one of the
        pintech (pinus tech) member!
      </div>
    </PrivateRoute>
  );
};

export default Login;
