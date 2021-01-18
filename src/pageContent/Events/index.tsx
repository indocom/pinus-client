import React from "react";
import { NextPage } from "next";

import { events } from "./data";
import { renderEventSection } from "./util";

const EventsContent: NextPage = () => {
  return <> {events.map(renderEventSection)} </>;
};

export default EventsContent;
