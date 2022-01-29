import React from "react";
import { NextPage } from "next";
import LoginContent from "src/pageContent/Login";
import { withAuth } from "../../redux/util";

const Login: NextPage = () => {
  return <LoginContent />;
};

export default withAuth(Login);
