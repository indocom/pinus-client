import React from "react";

interface OwnProps {
  bgImage?: string;
  subBanner?: boolean;
  title: string;
  description: string;
  renderSubcontent?: () => React.ReactNode;
}

const Banner: React.FC<OwnProps> = ({
  bgImage = "gradient-to-r from-gray-800 to-gray-400",
  subBanner = false,
  title,
  description,
  renderSubcontent,
}) => {
  const bannerHeight = subBanner ? `h-screen` : `h-screen-80 lg:h-screen-75`;
  const subBannerHeight = `h-screen-20 lg:h-screen-25`;

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
          ${bannerHeight} w-screen bg-black bg-opacity-50
          flex flex-col flex-grow items-center justify-center
          px-2
        `}
      >
        <p
          className={`text-6xl lg:text-4xl font-bold text-white text-center mx-auto`}
        >
          {title}
        </p>
        {!subBanner && (
          <p
            className={`text-lg lg:text-md mt-6 text-white text-center max-w-4xl`}
          >
            {description}
          </p>
        )}
      </div>
      {subBanner && (
        <div className={`${subBannerHeight} w-screen bg-secondary py-8`}>
          {description && (
            <p
              className={`text-lg lg:text-md text-center max-w-4xl mx-auto px-3`}
            >
              {description}
            </p>
          )}
          {renderSubcontent && renderSubcontent()}
        </div>
      )}
    </div>
  );
};

export default Banner;
