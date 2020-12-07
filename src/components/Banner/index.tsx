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
    <div
      className={`
        flex flex-col
        font-sans
        justify-center items-center
        w-screen h-screen
        bg-cover bg-no-repeat bg-center
        bg-${bgImage}
      `}
    >
      <p className={`text-6xl font-bold text-white`}>{title}</p>
      <p className={`text-lg mt-6 text-white`}>{description}</p>
    </div>
  );
};

export default Banner;
