import React from "react";
import Link from "next/link";
import Text from "src/components/Text";
import Markdown from "src/components/Markdown";
import { DocMeta } from "src/lib/ssg";

interface OwnProps extends DocMeta {
  docs: DocMeta[];
}

const AdmissionsContent: React.FC<OwnProps> = ({
  content,
  chapter,
  subchapter,
  section,
  docs,
}) => {
  const renderNavItems = (docs, chapter) => {
    return docs.map((doc) => {
      if (doc.chapter === chapter) {
        return (
          <div>
            <Link href={`/admissions/${doc.slug.join("/")}`}>
              <a className={`text-white`}>{doc.title}</a>
            </Link>
          </div>
        );
      }
    });
  };

  return (
    <div className={`grid grid-cols-6 min-h-screen w-screen`}>
      <div className={`col-start-1 col-span-2 bg-black px-24`}>
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
          <div>{renderNavItems(docs, "Before Acceptance")}</div>
        </div>
        <div className={`mb-5`}>
          <Text variant="subheader" color="white">
            After Acceptance
          </Text>
          <div>{renderNavItems(docs, "After Acceptance")}</div>
        </div>
      </div>
      <div className={`col-span-4 bg-transparent shadow-inner shadow-4xl`}>
        <div className={`p-20`}>
          <Text
            styles={`mb-10`}
            color="gray-300"
          >{`${chapter} | ${subchapter}`}</Text>
          <Text styles={`mb-2`} variant="header">
            {section}
          </Text>
          <Markdown source={content} />
        </div>
      </div>
    </div>
  );
};

export default AdmissionsContent;
