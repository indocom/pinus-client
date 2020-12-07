import * as React from "react";
import { storiesOf } from "@storybook/react";
import Carousel from "./index";

storiesOf("Carousel", module).add("Base", () => (
  <Carousel
    slides={[
      {
        image:
          "https://earthsky.org/upl/2018/12/comet-wirtanen-Jack-Fusco-dec-2018-Anza-Borrego-desert-CA-e1544613895713.jpg",
        title: "sample",
      },
      {
        image:
          "https://earthsky.org/upl/2018/12/comet-wirtanen-Jack-Fusco-dec-2018-Anza-Borrego-desert-CA-e1544613895713.jpg",
        title: "sample-1",
      },
    ]}
  />
));
