import * as React from "react";
import { storiesOf } from "@storybook/react";
import CaptionedBanner from "./index";

storiesOf("CaptionedBanner", module).add("Base", () => (
  <CaptionedBanner
    title="This is a title"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas odio dui, laoreet id consequat finibus, iaculis quis risus. Maecenas quis efficitur eros, a iaculis metus."
  />
));
