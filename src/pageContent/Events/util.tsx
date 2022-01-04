import { EventData, getItems } from "./data";
import React from "react";

export const getEventById = (id: string): EventData | undefined => {
  React.useEffect(() => {
    async function getData() {
      const res = await getItems();
      setData(res);
    }
    getData();
  }, []);
  interface Entry {
    // eslint-disable-next-line
    [key: string]: any;
  }
  const [data, setData] = React.useState<Array<Entry>>();

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
