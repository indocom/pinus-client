import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "react-feather";

import { NavLink, navLinks, altPages } from "./links";

interface OwnProps {
  pathname: string;
}

export function renderNavLink(
  link: NavLink,
  pathname: string,
  alt?: boolean
): React.ReactFragment {
  const { title, slug } = link;
  const pagePaths = pathname.split("/");
  const isHere = pagePaths.length > 1 && pagePaths[1] === slug;

  const hlColor = "red-600";
  const textColor = isHere ? hlColor : alt ? "black" : "white";

  const mobileStyle = `lg:my-3 lg:text-lg`;
  const linkStyle = `text-center transition-colors text-${textColor} hover:text-${hlColor} ${mobileStyle}`;

  return (
    <Link href={`/${slug}`} key={`navbar-${slug}`}>
      <a className={linkStyle}>{title}</a>
    </Link>
  );
}

const Navbar: React.FC<OwnProps> = ({ pathname }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const alt = altPages.includes("/" + pathname.split("/")[1]);

  return (
    <div className={`flex flex-col items-center`}>
      <nav
        className={`absolute w-full max-w-7xl bg-transparent text-${
          alt ? "black" : "white"
        } p-6`}
      >
        <div className={`w-full flex flex-row justify-between items-center`}>
          <Link href="/">
            <a className={`flex flex-row items-center space-x-4`}>
              <Image
                src="/assets/icons/pinus.png"
                alt="PINUS navbar logo"
                height={48}
                width={48}
              />
              <p className={`font-bold text-2xl lg:hidden`}>PINUS</p>
            </a>
          </Link>
          <div
            className={`lg:hidden flex flex-row items-center justify-between space-x-5 w-2/5`}
          >
            {navLinks.map((link) => renderNavLink(link, pathname, alt))}
          </div>
          <button
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
            className={`lg-min:hidden focus:outline-none border-none p-0`}
          >
            <Menu size={32} />
          </button>
        </div>
        {isDrawerOpen && (
          <div
            className={`absolute w-screen min-h-content py-3 mt-6 flex flex-col items-center bg-black`}
          >
            {navLinks.map((link) => renderNavLink(link, pathname, alt))}
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
