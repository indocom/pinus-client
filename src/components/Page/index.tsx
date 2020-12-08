import React from "react";
import Banner from "../Banner";
import Footer from "../Footer";

interface OwnProps {
  title: string;
  description: string;
  bgImage?: string;
  children: React.ReactNode;
}

const Page: React.FC<OwnProps> = ({
  title,
  description,
  bgImage,
  children,
}) => {
  return (
    <div className={`flex flex-col w-screen`}>
      <Banner title={title} description={description} bgImage={bgImage} />
      <div className={`min-h-screen w-full`}>{children}</div>
      <Footer />
    </div>
  );
};

export default Page;
