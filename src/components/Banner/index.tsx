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
    <div className={`bg-cover bg-no-repeat bg-center bg-${bgImage}`}>
      <div
        className={`
          flex flex-col
          font-sans
          justify-center items-center
          w-screen h-screen
          bg-black bg-opacity-50
          lg:p-32
        `}
      >
        <p className={`text-6xl font-bold text-white text-center`}>{title}</p>
        {subBanner ? (
          <div
            className={`flex flex-row items-center justify-center absolute bottom-0 w-screen bg-gray-200`}
          >
            <p className={`text-lg text-center my-12 text-gray-900 max-w-4xl`}>
              {description}
            </p>
          </div>
        ) : (
          <p className={`text-lg mt-6 text-white text-center max-w-4xl`}>
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default Banner;
