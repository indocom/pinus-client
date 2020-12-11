import * as React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./index";

storiesOf("Button", module)
  .add("Primary", () => <Button>This is a button</Button>)
  .add("Secondary", () => (
    <Button variant="secondary">This is a button</Button>
  ));
