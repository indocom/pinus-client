import React from "react";

interface OwnProps {
  bgImage?: string;
  title: string;
  description: string;
}

const CaptionedBanner: React.FC<OwnProps> = ({
  bgImage = "gradient-to-r from-gray-800 to-gray-400",
  title,
  description,
}) => {
  return (
    <div
      className={`
          flex flex-col
          justify-center items-center
          w-screen h-screen
          bg-black bg-opacity-50
          lg:p-32
          font-sans
      `}
    >
      <div
        className={`
          bg-cover bg-no-repeat bg-center bg-${bgImage} w-screen
          flex-grow flex items-center
        `}
      >
        <p className={`text-6xl font-bold text-white text-center mx-auto`}>
          {title}
        </p>
      </div>
      <div className={`bg-secondary w-screen py-10`}>
        <p className={`text-lg text-center max-w-3xl mx-auto`}>{description}</p>
      </div>
    </div>
  );
};

export default CaptionedBanner;
