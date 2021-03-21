import React from "react";
import Image from "next/image";
import Text from "src/components/Text";

interface OwnProps {
  bgImage?: string;
  title: string;
  description: string;
  hyperlink: string;
}

const ContentPreview: React.FC<OwnProps> = ({
  bgImage = "/assets/aksaraImages/aksara-newspaper.png",
  title,
  description,
  hyperlink = "https://aksarapinus.wordpress.com/",
}) => {
  return (
    <div className={`flex flex-col max-w-sm lg-min:max-w-lg justify-start`}>
      <div className={`bg-aksaraBox bg-no-repeat flex flex-col break-words`}>
        <div className={`max-w-sm lg-min:max-w-lg`}>
          <Image
            alt="Some Image"
            src={bgImage}
            layout="responsive"
            width="25"
            height="14"
          ></Image>
        </div>
        <div className={`text-2xl mt-4 ml-4 lg-min:ml-6`}>
          <Text variant="subtext-alt">{title}</Text>
        </div>
        <div
          className={`ml-4 pt-3 lg-min:pt-0 lg-min:mt-2 lg-min:ml-6 max-h-28 lg-min:max-h-30 lg-min:h-24 overflow-ellipsis overflow-hidden w-9/10 lg-min:w-96 lg-min:pr-4`}
        >
          {description}
        </div>
        <div
          className={`text-red-500 ml-4 mt-2 mb-4 mr-4 lg-min:ml-6 lg-min:mt-2`}
        >
          <a href={hyperlink}>Read More!</a>
        </div>
      </div>
    </div>
  );
};

export default ContentPreview;
