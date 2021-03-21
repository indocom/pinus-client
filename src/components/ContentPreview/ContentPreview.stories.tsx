import * as React from "react";
import { storiesOf } from "@storybook/react";
import ContentPreview from "./index";

storiesOf("ContentPreview", module)
  .add("Primary", () => (
    <ContentPreview
      title="This is a title"
      description="This is a description"
      hyperlink="https://google.com"
      variant="primary"
    />
  ))
  .add("Secondary", () => (
    <ContentPreview
      title="This is a title"
      description="This is a description"
      hyperlink="https://google.com"
      variant="secondary"
    />
  ));
