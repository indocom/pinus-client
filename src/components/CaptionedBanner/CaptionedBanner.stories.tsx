import * as React from "react";
import { storiesOf } from "@storybook/react";
import CaptionedBanner from "./index";

storiesOf("CaptionedBanner", module).add("Base", () => (
  <CaptionedBanner
    title="This is a title"
    description="This is a description"
  />
));
