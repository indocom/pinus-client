import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "react-feather";

interface OwnProps {
  pathname: string;
}

const Navbar: React.FC<OwnProps> = ({ pathname }) => {
  const pages = [
    { title: "About", slug: "about" },
    { title: "Admissions", slug: "admissions" },
    { title: "Events", slug: "events" },
    { title: "Contact Us", slug: "contact" },
  ];

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const renderNavLink = ({ title, slug, pathname }) => {
    const currentPage = pathname.split("/");
    return (
      <Link href={`/${slug}`} key={`navbar-${slug}`}>
        <a
          className={`
            lg:my-3
            lg:text-lg
            text-${
              currentPage.length > 1 && currentPage[1] === slug
                ? "red-600"
                : "white"
            }
          `}
        >
          {title}
        </a>
      </Link>
    );
  };

  return (
    <div className={`flex flex-col items-center`}>
      <nav
        className={`absolute bg-transparent text-white w-full max-w-7xl pt-8`}
      >
        <div className={`flex flex-row justify-between items-center w-full`}>
          <Link href="/">
            <a className={`lg:ml-12 flex flex-row items-center`}>
              <Image
                src="/assets/icons/pinus.png"
                alt="PINUS navbar logo"
                height={48}
                width={48}
              />
              <p className={`lg:hidden font-bold text-2xl ml-4`}>PINUS</p>
            </a>
          </Link>
          <div className={`lg:hidden flex flex-row justify-between w-2/5`}>
            {pages.map((page) => renderNavLink({ ...page, pathname }))}
          </div>
          <button
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
            className={`lg:mr-12 lg-min:hidden focus:outline-none border-none p-0`}
          >
            <Menu size={32} />
          </button>
        </div>
        {isDrawerOpen && (
          <div
            className={`
              absolute w-screen win-h-content mt-6
              flex flex-col items-center
              bg-black bg-opacity-70
              py-3
          `}
          >
            {pages.map((page) => renderNavLink({ ...page, pathname }))}
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
