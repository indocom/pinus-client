import * as React from "react";
import { storiesOf } from "@storybook/react";
import Input from "./index";

storiesOf("Input", module)
  .add("Base", () => <Input type="text" placeholder="This is an input" />)
  .add("Error", () => (
    <Input
      type="text"
      placeholder="This is an input"
      error={"This is an error"}
    />
  ));
