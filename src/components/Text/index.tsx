import React from "react";
import "tailwindcss/tailwind.css";

export type TextVariant = "header" | "body";
interface OwnProps {
  variant?: string;
  styles?: string;
  children: string;
}

const textStyles = {
  header: { size: "5xl", weight: "bold" },
  subheader: { size: "2xl", weight: "bold" },
  body: { size: "xl", weight: "normal" },
};

const Text: React.FC<OwnProps> = ({
  variant = "body",
  styles = "",
  children,
}) => {
  const variantStyle = textStyles[variant];
  const { size, weight } = variantStyle;

  return (
    <div className={styles}>
      <p className={`font-${weight} text-${size}`}>{children}</p>
    </div>
  );
};

export default Text;
