import { ContentfulEvent } from "src/utils/contentful/types";
import { Entry } from "contentful";
import { EventData } from "src/pageContent/Events/data";

import React from "react";
import { getItems } from "src/utils/contentful/events";

export const getEventById = (id: string): EventData | undefined => {
  React.useEffect(() => {
    async function getData() {
      const res = await getItems();
      setData(res);
    }
    getData();
  }, []);

  const [data, setData] = React.useState<Array<Entry<ContentfulEvent>>>();

  const eventsData: Array<EventData> = data.map((data) => {
    return {
      name: data.fields.name,
      description: data.fields.eventDescription,
      url: data.fields.url,
      imageSrc: "http:" + data.fields.eventPicture.fields.file.url,
    };
  });
  const searchedUrl = "/events/" + id;
  const s = eventsData.find((e) => e.url === searchedUrl);
  if (s === undefined) {
    return undefined;
  }

  return s;
};
