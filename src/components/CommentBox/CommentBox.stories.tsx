import * as React from "react";
import { storiesOf } from "@storybook/react";
import CommentBox from "./index";

storiesOf("CommentBox", module).add("Base", () => (
  <CommentBox
    username="This is a username"
    comment="This is a comment"
  />
));
