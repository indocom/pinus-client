import React from "react";

interface OwnProps {
  bgImage?: string;
  title: string;
  description: string;
}

const Banner: React.FC<OwnProps> = ({
  bgImage = "gradient-to-r from-gray-800 to-gray-400",
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
        <p className={`text-lg mt-6 text-white text-center max-w-4xl`}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default Banner;
