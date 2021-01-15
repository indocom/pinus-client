import React from "react";
import Link from "next/link";

export interface Page {
  title: string;
  link: string;
}

interface OwnProps {
  title: string;
  pages: Page[];
}

const Column: React.FC<OwnProps> = ({ title, pages }) => {
  return (
    <div
      className={`
        font-sans text-gray-900
        flex flex-col
        bg-transparent
        lg:space-y-1
      `}
    >
      <p className={`text-base font-bold mb-5 lg:mb-0`}>{title}</p>
      {pages.map((page, index) => {
        return (
          <Link href={page.link} key={`${page.title}-${index}`}>
            <a className={`text-xs lg:text-sm mb-1 lg:mb-0`}>{page.title}</a>
          </Link>
        );
      })}
    </div>
  );
};

export default Column;
