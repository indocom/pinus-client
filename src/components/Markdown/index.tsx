import React from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

import { HeadingRenderer, ParagraphRenderer } from "./renderers";

interface OwnProps {
  source: string;
}

const Markdown: React.FC<OwnProps> = ({ source }) => {
  const renderers = { heading: HeadingRenderer, paragraph: ParagraphRenderer };

  return (
    <ReactMarkdown renderers={renderers} plugins={[gfm]}>
      {source}
    </ReactMarkdown>
  );
};

export default Markdown;
