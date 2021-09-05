import React from "react";
import { NextPage } from "next";
import Link from "next/link";
import { Instagram, Facebook } from "react-feather";

import Page from "src/components/Page";
import ProfileContent from "src/pageContent/Profile";

const ContactUs: NextPage = () => {
  return (
    <Page
      bgImage="bernard"
      title="Yeboi it's me Bernard"
      description=""
      subBanner
      renderSubcontent={() => {
        return (
          <div
            className={`flex flex-col justify-center items-center space-y-5`}
          >
            <p
              className={`font-bold text-4xl lg:text-3xl text-gray-900 text-center`}
            >
              Bernardus Krishna, Y2 CS & Biz
            </p>
          </div>
        );
      }}
    >
      <ProfileContent />
    </Page>
  );
};

export default ContactUs;
