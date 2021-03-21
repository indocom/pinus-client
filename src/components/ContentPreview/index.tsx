import React from "react";
import Image from "next/image";
import Text from "src/components/Text";

type ContentPreviewVariant = "primary" | "secondary";

interface OwnProps {
  bgImage?: string;
  title: string;
  description: string;
  hyperlink: string;
  variant?: ContentPreviewVariant;
}

const ContentPreview: React.FC<OwnProps> = ({
  bgImage = "/assets/aksaraImages/aksara-newspaper.png",
  title,
  description,
  hyperlink = "https://aksarapinus.wordpress.com/",
  variant = "primary", // secondary no image
}) => {
  return (
    <div className={`flex flex-col max-w-xs 2xl-min:max-w-md justify-start`}>
      <div
        className={`${
          variant === "secondary" ? "justify-center" : "justify-start"
        } xl-min:pb-8 bg-aksaraBox bg-no-repeat flex flex-col break-words max-w-sm lg-min:h-${
          variant === "primary" ? "auto" : 96
        }`}
      >
        {variant === "primary" ? (
          <div className={`max-w-xs lg-min:max-w-lg`}>
            <Image
              alt="Some Image"
              src={bgImage}
              layout="responsive"
              width="25"
              height="14"
            ></Image>
          </div>
        ) : null}

        {variant === "primary" ? (
          <div className={`text-2xl mt-4 ml-4 lg-min:ml-6`}>
            <Text variant="subtext-alt">{title}</Text>
          </div>
        ) : (
          <div className={`pl-2 pt-3 mt-4 mb-4 ml-4 lg-min:ml-6`}>
            <Text variant="header-alt" styles={`text-4xl`}>
              {title}
            </Text>
          </div>
        )}
        <div
          className={`${
            variant === "secondary" ? "pl-2 pr-3 pb-3" : null
          } items-center ml-4 pt-3 lg-min:pt-0 lg-min:mt-2 lg-min:ml-6 lg-min:max-h-36 2xl-min:max-h-24 overflow-ellipsis overflow-hidden lg-min:pr-10`}
        >
          {description}
        </div>
        {variant === "primary" ? (
          <div
            className={`text-red-500 ml-4 mt-2 mb-4 mr-4 lg-min:ml-6 lg-min:mt-2`}
          >
            <a href={hyperlink}>Read More!</a>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ContentPreview;
