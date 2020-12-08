import React from "react";

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
        flex flex-column justify-start items-start
        w-full bg-transparent
      `}
    >
      <p className={`text-base font-bold mb-5`}>{title}</p>
      {pages.map((page, index) => {
        return (
          <a
            className={`text-xs underline`}
            key={`${page.title}-${index}`}
            href={page.link}
            target="_blank"
          >
            {page.title}
          </a>
        );
      })}
    </div>
  );
};

export default Column;
