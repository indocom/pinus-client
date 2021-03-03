import React from "react";
import Image from "next/image";
import Link from "next/link";
import Column from "./Column";
import { columns } from "./columns";

const Footer: React.FC = () => {
  return (
    <div
      className={`flex flex-row lg:flex-wrap justify-between items-start bg-grey-primary font-sans w-full h-96 lg:h-full px-24 lg:px-6 py-12 lg:space-y-3`}
    >
      {/* Logo and copyright */}
      <div className={`flex flex-col justify-between h-full lg:space-y-3`}>
        <div className={`flex flex-row justify-start items-center`}>
          <Image
            src="/assets/icons/pinus.png"
            alt="PINUS footer logo"
            height={50}
            width={50}
          />
          <p className={`text-3xl lg:text-2xl font-bold ml-5`}>PINUS</p>
        </div>
        <p className={`text-sm lg:text-xs text-gray-400`}>
          ©2021 Perhimpunan Indonesia NUS. All Rights Reserved.
        </p>
      </div>

      {/* Navigations */}
      <div className={`flex flex-row lg:flex-col justify-between lg:space-y-3`}>
        {columns.map((column, index) => {
          return (
            <div
              className={`w-content mr-16 lg:mr-0`}
              key={`${column.title}-${index}`}
            >
              <Column title={column.title} pages={column.pages} />
            </div>
          );
        })}
      </div>

      {/* Contact */}
      <div className={`w-48 lg:w-content`}>
        <p className={`font-bold lg:text-base mb-5`}>Contact Us</p>
        <p className={`text-xs lg:text-sm mb-10 lg:mb-5`}>
          Feel free to drop us a message. We would love to hear from you!
        </p>
        <div className={`flex flex-row w-14 justify-between`}>
          <Link
            href="https://www.facebook.com/PerhimpunanIndonesiaNUS/"
            key="facebook-icon"
          >
            <a target="_blank">
              <Image
                alt="Facebook profile"
                src="/assets/icons/fb.png"
                height={20}
                width={20}
              />
            </a>
          </Link>
          <Link
            href="https://www.instagram.com/pinusonline"
            key="instagram-icon"
          >
            <a target="_blank">
              <Image
                alt="Instagram profile"
                src="/assets/icons/ig.png"
                height={20}
                width={20}
              />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
