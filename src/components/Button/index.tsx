import React from "react";
import "tailwindcss/tailwind.css";

interface OwnProps {
  children: React.ReactNode;
  color?: string;
  bgColor?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<OwnProps> = ({
  children,
  color = "white",
  bgColor = "gray-900",
  onClick,
}) => {
  return (
    <button
      className={`
        font-sans text-base text-${color}
        bg-${bgColor} rounded-lg py-5 px-7
        focus:outline-none
      `}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
