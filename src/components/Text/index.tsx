import React from "react";
import "tailwindcss/tailwind.css";

export type TextVariant = "header" | "body";
interface OwnProps {
  variant?: string;
  styles?: string;
  color?: string;
  children: string;
}

const textStyles = {
  header: { size: "5xl", weight: "bold" },
  subheader: { size: "2xl", weight: "bold" },
  body: { size: "xl", weight: "normal" },
  "body-small": { size: "lg", weight: "normal" },
  subtext: { size: "base", weight: "normal" },
  aksaraHeader: { size: "4xl", weight: "extrabold" },
  aksaraSubheader: { size: "xl", weight: "normal" },
  aksaraText: { size: "base", weight: "normal" },
  aksaraTextheader: { size: "m", weight: "bold" },
};

const Text: React.FC<OwnProps> = ({
  variant = "body",
  styles = "",
  color = "gray-900",
  children,
}) => {
  const variantStyle = textStyles[variant];
  const { size, weight } = variantStyle;

  return (
    <div className={styles}>
      <p className={`font-${weight} text-${size} text-${color}`}>{children}</p>
    </div>
  );
};

export default Text;
