import * as React from "react";
import { storiesOf } from "@storybook/react";
import Markdown from "./index";

storiesOf("Markdown", module).add("Base", () => (
  <Markdown source={`# Header \nParagraph`} />
));
