import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Button from "src/components/Button";
import Text from "src/components/Text";
import Markdown from "src/components/Markdown";
import { DocMeta } from "src/lib/ssg";

interface OwnProps extends DocMeta {
  navItems: Record<string, Record<string, string>>[];
}

const AdmissionsContent: React.FC<OwnProps> = ({
  content,
  chapter,
  subchapter,
  section,
  navItems,
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
      return (
        <div key={`nav-item-${index}`}>
          <Link href={`/admissions/${navItem.slug.join("/")}`}>
            <a
              className={
                navItem.slug.join("/") ===
                  (typeof slug !== "string" && slug.join("/"))
                  ? `text-red-600`
                  : `text-white`
              }
            >
              {navItem.title}
            </a>
          </Link>
        </div>
      );
    });
  };

  return (
    <div className={`grid grid-cols-6 min-h-screen w-screen`}>
      <div className={`lg:hidden col-start-1 col-span-2 bg-black px-24 pb-40`}>
        <Text variant="header" color="white" styles={`mt-20`}>
          For
        </Text>
        <Text variant="header" color="white">
          Incoming Freshmen
        </Text>
        <Text variant="subtext" color="white" styles={`mt-5 mb-8`}>
          All you need to know about NUS, applying to NUS, fees and funding, and
          accommodation options offered.
        </Text>
        <div className={`mb-5`}>
          <Text variant="subheader" color="white">
            Before Acceptance
          </Text>
          <div>{renderNavItems(navItems, "Before Acceptance")}</div>
        </div>
        <div className={`mb-5`}>
          <Text variant="subheader" color="white">
            After Acceptance
          </Text>
          <div>{renderNavItems(navItems, "After Acceptance")}</div>
        </div>
      </div>
      <div
        className={`lg:col-span-6 col-span-4 bg-transparent shadow-inner shadow-4xl`}
      >
        <div ref={contentRef} className={`lg:py-20 lg:px-10 p-20`}>
          <Text
            styles={`mb-10`}
            color="gray-300"
          >{`${chapter} | ${subchapter}`}</Text>
          <Text styles={`mb-2`} variant="header">
            {section}
          </Text>
          <Markdown source={content} />
          <div className={`flex flex-row justify-between mt-20`}>
            {currPageNum > 1 && (
              <Button
                onClick={() => {
                  router.push(
                    `/admissions/${slug[0]}/${currPageNum < 10 ? "0" : ""}${currPageNum - 1
                    }`
                  );
                }}
                style={`mr-auto`}
              >
                Prev
              </Button>
            )}
            {currPageNum < Object.keys(navItems[chapter]).length && (
              <Button
                onClick={() => {
                  router.push(
                    `/admissions/${slug[0]}/${currPageNum < 10 ? "0" : ""}${currPageNum + 1
                    }`
                  );
                }}
                style={`ml-auto`}
              >
                Next
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionsContent;
