import * as React from "react";
import { storiesOf } from "@storybook/react";
import AksaraBox from "./index";

storiesOf("AksaraBox", module).add("Base", () => (
	<AksaraBox
		title="This is a title"
		description="This is a description"
		hyperlink="https://google.com"
	/>
));
