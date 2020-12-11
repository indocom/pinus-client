import React from "react";
import "tailwindcss/tailwind.css";

export type ButtonVariant = "primary" | "secondary";

const buttonStyles = {
  primary: { color: "white", bgColor: "gray-900" },
  secondary: { color: "white", bgColor: "pinus-red" },
};

interface OwnProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  name?: string;
  type?: "button" | "submit" | "reset";
  color?: string;
  bgColor?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<OwnProps> = ({
  children,
  variant = "primary",
  name,
  type = "button",
  onClick,
}) => {
  const variantStyle = buttonStyles[variant];
  const { color, bgColor } = variantStyle;

  return (
    <button
      className={`
        font-sans text-base text-${color}
        bg-${bgColor} rounded-lg py-5 px-7 w-max
        focus:outline-none
      `}
      name={name}
      type={type}
      aria-label={`${name}-button`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
