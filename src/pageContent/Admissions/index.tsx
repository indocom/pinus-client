import React, { Children, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Text, Button } from "pinus-ui-library";

import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { DocMeta } from "src/lib/ssg";

interface OwnProps extends DocMeta {
  navItems: Record<string, Record<string, string>>[];
}

const options = {
  renderNode: {
    [BLOCKS.HEADING_1]: (_node, children) => (
      <div>
        <Text fontSize="6xl" fontWeight="bold" color="black">{children}</Text>
        <br/>
      </div>
    ),
    [BLOCKS.HEADING_2]: (_node, children) => (
      <div>
        <Text fontSize="4xl" fontWeight="bold" color="black">{children}</Text>
      </div>
    ),
    [BLOCKS.HEADING_3]: (_node, children) => (
      <div>
        <Text fontSize="3xl" fontWeight="bold" color="black">{children}</Text>
      </div>
    ),
    [BLOCKS.PARAGRAPH]: (_node, children) => (
      <div>
        <Text>{children}</Text>
        <br/>
      </div>
    ),
  }
}
const AdmissionsContent: React.FC<OwnProps> = ({
  chapter,
  subchapter,
  section,
  navItems,
  post,
}) => {
  const router = useRouter();
  const { slug } = router.query;

  const currPageNum = parseInt(slug[slug.length - 1]);

  const contentRef = useRef(null);
  const firstUpdate = useRef(true);
  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }

    contentRef.current.scrollIntoView();
  });

  const renderNavItems = (navItems, chapter) => {
    return navItems[chapter].map((navItem, index) => {
      let newSlug: string; 
      if (Array.isArray(navItem.slug)) {
        newSlug = navItem.slug.join("/"); // TODO: Yet more hacks to be removed..
      } else {
        newSlug = navItem.slug.replace('-', '/'); // TODO: YET MORE HACKS
      }

      return (
        <div key={`nav-item-${index}`}>
          <Link href={`/admissions/${newSlug}`}>
            <a
              className={
                newSlug ===
                (typeof slug !== "string" && slug.join("/"))
                  ? `text-red-600`
                  : `text-white`
              }
            >
              {`${navItem.section} ${navItem.title}`}
            </a>
          </Link>
        </div>
      );
    });
  };

  return (
    <div className={`grid grid-cols-6 min-h-screen w-screen overflow-hidden`}>
      <div
        className={`lg:hidden col-start-1 col-span-2 bg-black px-24 pb-40 space-y-4`}
      >
        <span>&nbsp;</span>
        <Text fontSize="5xl" fontWeight="bold" color="white">
          For Incoming Freshmen
        </Text>
        <Text color="white">
          All you need to know about NUS, applying to NUS, fees and funding, and
          accommodation options offered.
        </Text>
        <div className={`mb-5`}>
          <Text fontSize="2xl" fontWeight="bold" color="white">
            Before Acceptance
          </Text>
          <div>{renderNavItems(navItems, "Before Acceptance")}</div>
        </div>
        {/* This Chapter does not exist yet so will cause error */}
        {/* <div className={`mb-5`}>
          <Text fontSize="2xl" fontWeight="bold" color="white">
            After Acceptance
          </Text>
          <div>{renderNavItems(navItems, "After Acceptance")}</div>
        </div> */}
      </div>
      <div
        className={`lg:col-span-6 col-span-4 bg-transparent shadow-inner shadow-4xl`}
      >
        <div ref={contentRef} className={`lg:py-20 lg:px-10 p-20`}>
          <Text
            fontSize="xl"
            fontWeight="normal"
            color="rgba(87, 87, 87, 0.48)"
          >{`${chapter} | ${subchapter}`}</Text>
          <span>&nbsp;</span>
          <Text fontSize="5xl" fontWeight="bold">
            {section}
          </Text>
          <div> {documentToReactComponents(post, options)}</div>
          <div className={`flex flex-row justify-between mt-20`}>
            {currPageNum > 1 && (
              <div className="mr-auto">
                <Button
                  onClick={() => {
                    router.push(
                      `/admissions/${slug[0]}/${currPageNum < 10 ? "0" : ""}${
                        currPageNum - 1
                      }`
                    );
                  }}
                  label="Prev"
                  variant="secondary"
                />
              </div>
            )}
            {currPageNum < Object.keys(navItems[chapter]).length && (
              <div className="ml-auto">
                <Button
                  onClick={() => {
                    router.push(
                      `/admissions/${slug[0]}/${currPageNum < 9 ? "0" : ""}${
                        currPageNum + 1
                      }`
                    );
                  }}
                  label="Next"
                  variant="secondary"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionsContent;
