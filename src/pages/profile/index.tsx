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
            {/* <p className={`text-xl lg:text-md text-gray-900 text-center`}>
              Want to know more? Find us on our social media accounts.
            </p>
            <div
              className={`flex flex-row justify-center items-center space-x-5`}
            >
              <Link
                href="https://www.facebook.com/PerhimpunanIndonesiaNUS/"
                key="facebook-icon"
              >
                <a target="_blank">
                  <Facebook size={40} />
                </a>
              </Link>
              <Link
                href="https://www.instagram.com/pinusonline"
                key="instagram-icon"
              >
                <a target="_blank">
                  <Instagram size={40} />
                </a>
              </Link>
            </div> */}
          </div>
        );
      }}
    >
      <ProfileContent />
    </Page>
  );
};

export default ContactUs;
