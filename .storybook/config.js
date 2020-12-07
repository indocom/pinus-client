import { configure, addDecorator } from "@storybook/react";
import { jsxDecorator } from "storybook-addon-jsx";
import { withKnobs } from "@storybook/addon-knobs";

addDecorator(jsxDecorator);
addDecorator(withKnobs);

const req = require.context("../src", true, /\.stories\.tsx$/);
function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
