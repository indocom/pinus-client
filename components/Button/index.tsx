import React from "react";
import "tailwindcss/tailwind.css";

interface OwnProps {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<OwnProps> = ({ children }) => {
  return <button>{children}</button>;
};

export default Button;
