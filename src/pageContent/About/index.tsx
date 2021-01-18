import React from "react";

import DesktopPage from "./desktop";
import MobilePage from "./mobile";

const AboutContent: React.FC = () => {
  return (
    <>
      <div className={`lg:hidden`}>
        <DesktopPage />
      </div>
      <div className={`lg-min:hidden`}>
        <MobilePage />
      </div>
    </>
  );
};

export default AboutContent;
