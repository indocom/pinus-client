import React from "react";
import { NextPage } from "next";
import Link from "next/link";
import { Instagram, Facebook } from "react-feather";

import Page from "src/components/Page";
import Text from "src/components/Text";
import ContactUsContent from "src/pageContent/ContactUs";

const ContactUs: NextPage = () => {
  return (
    <Page
      bgImage="contact"
      title="Contact Us"
      description="Want to know more? Find us on our social media."
      subBanner
      renderSubcontent={() => {
        return (
          <div className={`flex flex-col justify-center items-center`}>
            <Text variant="header">Social Media</Text>
            <Text variant="body" styles={`mt-4`}>
              Want to know more? Find us on our social media.
            </Text>
            <div className={`flex flex-row justify-around items-center mt-6`}>
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
                <a target="_blank" className={`ml-4`}>
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
