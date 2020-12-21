import * as React from "react";
import { storiesOf } from "@storybook/react";
import Text from "./index";

storiesOf("Text", module)
  .add("Body", () => <Text>This is some text</Text>)
  .add("Header", () => <Text variant="header">This is some text</Text>);
