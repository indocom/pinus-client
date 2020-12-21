import React from "react";
import "tailwindcss/tailwind.css";

export type TextVariant = "header" | "body";

const textStyles = {
  header: { size: "5xl", weight: "bold" },
  body: { size: "xl", weight: "normal" },
};

interface OwnProps {
  variant?: string;
  children: string;
}

const Text: React.FC<OwnProps> = ({ variant = "body", children }) => {
  const variantStyle = textStyles[variant];
  const { size, weight } = variantStyle;

  return <p className={`font-${weight} text-${size}`}>{children}</p>;
};

export default Text;
