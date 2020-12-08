import * as React from "react";
import { storiesOf } from "@storybook/react";
import Page from "./index";

storiesOf("Page", module).add("Base", () => (
  <Page title="This is a page" description="This is its description">
    <div>This is content</div>
  </Page>
));
