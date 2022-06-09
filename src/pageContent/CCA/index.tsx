import React, { useEffect, useRef } from "react";
import { Content, Navbar, Text } from "pinus-ui-library";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { ContentfulDocCcaMeta } from "src/utils/contentful/types";
import { options } from "../Admissions";

interface OwnProps extends ContentfulDocCcaMeta {
  navItems: Content[];
}

const CcaContent: React.FC<OwnProps> = ({ chapter, navItems, post }) => {
  const contentRef = useRef(null);
  const firstUpdate = useRef(true);
  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }

    contentRef.current.scrollIntoView();
  });

  return (
    <div className={`grid grid-cols-6 min-h-screen w-screen overflow-hidden`}>
      <div
        className={`lg:hidden col-start-1 col-span-2 bg-black px-24 pb-40 space-y-4`}
      >
        <span>&nbsp;</span>
        <Text fontSize="5xl" fontWeight="bold" color="white">
          List of CCAs and Clubs
        </Text>
        <Text color="white">
          Compilation of CCAs across different categories, along
          with contacts of seniors for each CCA who will help and guide you. You
          can freely drop them a message and ask any queries about the CCA or
          get them to share their experiences.
        </Text>
        <div className={`mb-5`}>
          <Navbar contents={navItems} color="white" />
        </div>
      </div>
      <div
        className={`lg:col-span-6 col-span-4 bg-transparent shadow-inner shadow-4xl`}
      >
        <div ref={contentRef} className={`lg:py-20 lg:px-10 p-20`}>
          <Text
            fontSize="xl"
            fontWeight="normal"
            color="rgba(87, 87, 87, 0.48)"
          >{`${chapter}`}</Text>
          <span>&nbsp;</span>
          <div> {documentToReactComponents(post, options)}</div>
        </div>
      </div>
    </div>
  );
};

export default CcaContent;
