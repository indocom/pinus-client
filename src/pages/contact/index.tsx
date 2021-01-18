import React from "react";
import { NextPage } from "next";
import Link from "next/link";
import { Instagram, Facebook } from "react-feather";

import Page from "src/components/Page";
import ContactUsContent from "src/pageContent/ContactUs";

const ContactUs: NextPage = () => {
  return (
    <Page
      bgImage="contact"
      title="Contact Us"
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
              Social Media
            </p>
            <p className={`text-xl lg:text-md text-gray-900 text-center`}>
              Want to know more? Find us on our social media.
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
            </div>
          </div>
        );
      }}
    >
      <ContactUsContent />
    </Page>
  );
};

export default ContactUs;
