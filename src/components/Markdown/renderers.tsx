import React from "react";
import { Text } from "pinus-ui-library";

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
      <div>
        <Text fontSize="5xl" fontWeight="bold">
          {children}
        </Text>
        <span>&nbsp;</span>
      </div>
    );
  }

  return (
    <div>
      <Text fontSize="2xl" fontWeight="bold">
        {children}
      </Text>
    </div>
  );
};

export const ParagraphRenderer: React.FC<BaseProps> = ({ children }) => {
  return (
    <div>
      <Text>{children}</Text>
      <span>&nbsp;</span>
    </div>
  );
};
