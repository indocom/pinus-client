import React from "react";

interface OwnProps {
  bgImage?: string;
  subBanner?: boolean;
  title: string;
  description: string;
}

const Banner: React.FC<OwnProps> = ({
  bgImage = "gradient-to-r from-gray-800 to-gray-400",
  subBanner = false,
  title,
  description,
}) => {
  return (
    <div
      className={`
          flex flex-col
          justify-center items-center
          w-screen h-screen
          bg-cover bg-no-repeat bg-center bg-${bgImage} 
          font-sans
      `}
    >
      <div
        className={`
          h-screen w-screen bg-black bg-opacity-50
          flex flex-col flex-grow items-center justify-center
        `}
      >
        <p className={`text-6xl font-bold text-white text-center mx-auto`}>
          {title}
        </p>
        {!subBanner && (
          <p className={`text-lg mt-6 text-white text-center max-w-4xl`}>
            {description}
          </p>
        )}
      </div>
      {subBanner && (
        <div className={`bg-secondary w-screen py-10`}>
          <p className={`text-lg text-center max-w-4xl mx-auto`}>
            {description}
          </p>
        </div>
      )}
    </div>
  );
};

export default Banner;
