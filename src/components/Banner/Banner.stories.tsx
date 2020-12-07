import * as React from "react";
import { storiesOf } from "@storybook/react";
import Banner from "./index";

storiesOf("Banner", module).add("Base", () => (
  <Banner title="This is a title" description="This is a description" />
));
