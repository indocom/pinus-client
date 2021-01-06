import React from "react";
import Text from "../Text";

interface BaseProps {
  children: string;
}

interface HeadingProps extends BaseProps {
  level: number;
}

export const HeadingRenderer: React.FC<HeadingProps> = ({
  level,
  children,
}) => {
  if (level === 1) {
    return (
      <Text styles={`mb-10`} variant={"header"}>
        {children}
      </Text>
    );
  }

  return <Text variant={"subheader"}>{children}</Text>;
};

export const ParagraphRenderer: React.FC<BaseProps> = ({ children }) => {
  return (
    <Text styles={`mb-6`} variant={"subtext"}>
      {children}
    </Text>
  );
};
