import React from "react";
import Image from "next/image";
import Link from "next/link";

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

  const renderNavLink = ({ title, slug, pathname }) => {
    const currentPage = pathname.split("/");
    return (
      <Link href={`/${slug}`}>
        <a
          className={`
            text-base ml-16
            text-${currentPage[1] === slug ? "red-600" : "white"}
          `}
        >
          {title}
        </a>
      </Link>
    );
  };

  return (
    <nav className={`absolute bg-transparent text-white w-screen px-24 pt-8`}>
      <div className={`flex flex-row justify-between items-center`}>
        <Link href="/">
          <a className={`flex flex-row items-center`}>
            <Image
              src="/assets/icons/pinus.png"
              alt="PINUS navbar logo"
              height={48}
              width={48}
            />
            <p className={`font-bold text-2xl ml-4`}>PINUS</p>
          </a>
        </Link>
        <div>{pages.map((page) => renderNavLink({ ...page, pathname }))}</div>
      </div>
    </nav>
  );
};

export default Navbar;
