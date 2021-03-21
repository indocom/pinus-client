import * as React from "react";
import { storiesOf } from "@storybook/react";
import ContentPreview from "./index";

storiesOf("ContentPreview", module).add("Base", () => (
  <ContentPreview
    title="This is a title"
    description="This is a description"
    hyperlink="https://google.com"
  />
));
