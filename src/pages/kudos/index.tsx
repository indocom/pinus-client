import React from "react";
import { NextPage } from "next";
import Page from "src/components/Page";
<<<<<<< HEAD
=======
import { Seniors } from "src/pageContent/Kudos";
>>>>>>> 7cdc558b9c23f253f406f2d2fb3c10d52231ff0f

const Kudos: NextPage = () => {
  return (
    <Page
<<<<<<< HEAD
      bgImage=""
      title="Kudos"
      subBanner
      description="Drop your kudos down below !"
    >
      Kudos UI to write
=======
      bgImage="admissions"
      title="Senior Appreciation Night"
      subBanner
      description="Send your well wishes for our graduating batch!"
    >
      <Seniors />
>>>>>>> 7cdc558b9c23f253f406f2d2fb3c10d52231ff0f
    </Page>
  );
};

export default Kudos;
