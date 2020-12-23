import React from "react";
import Text from "src/components/Text";
import Markdown from "src/components/Markdown";
import { DocMeta } from "src/lib/ssg";

const AdmissionsContent: React.FC<DocMeta> = ({
  content,
  chapter,
  subchapter,
  section,
}) => {
  return (
    <div className={`grid grid-cols-6 min-h-screen w-screen`}>
      <div className={`col-start-1 col-span-2 bg-black px-24`}>
        <Text variant="header" color="white" styles={`mt-20`}>
          For
        </Text>
        <Text variant="header" color="white">
          Incoming Freshmen
        </Text>
        <Text variant="subtext" color="white" styles={`mt-5`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas odio
          dui, laoreet id consequat finibus, iaculis quis risus. Maecenas quis
          efficitur eros, a iaculis metus.
        </Text>
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
