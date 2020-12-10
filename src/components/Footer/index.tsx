import React from "react";
import Column from "./Column";
import { columns } from "./columns";

import Logo from "public/assets/icons/pinus.svg";

const Footer: React.FC = () => {
  return (
    <div
      className={`
        grid grid-cols-12 gap-8 grid-rows-4
        bg-secondary font-sans h-96 w-screen
      `}
    >
      <div className={`col-start-2 col-span-3 row-start-2 row-span-2`}>
        <div className={`flex flex-row justify-start items-center`}>
          <Logo />
          <p className={`text-3xl font-bold ml-5`}>PINUS</p>
        </div>
      </div>
      <div className={`col-start-2 col-span-3 row-start-4`}>
        <p className={`text-xs`}>
          ©2021 Perhimpunan Indonesia NUS. All Rights Reserved.
        </p>
      </div>
      {columns.map((column, index) => {
        return (
          <div
            className={`col-start-${4 + index} row-start-2 row-span-2 w-36`}
            key={`${column.title}-${index}`}
          >
            <Column title={column.title} pages={column.pages} />
          </div>
        );
      })}
      <div className={`col-start-10 col-span-2 row-start-2 row-span-2`}>
        <p className={`font-bold`}>Contact Us</p>
      </div>
    </div>
  );
};

export default Footer;
