import React from "react";
import { NextPage } from "next";
import Image from "next/image";

import { SectionInfo, StripData, optionsArray, EventData } from "./data";

import { getItems } from "src/utils/contentful/events";

import * as S from "./style";

const renderStrip = (s: StripData): React.ReactFragment => {
  const [colStart, colSpan] = s.col;
  const [rowStart, rowSpan] = s.row;
  const { style, color } = s;

  const gridPos = [
    `col-start-${colStart} col-span-${colSpan}`,
    `row-start-${rowStart} row-span-${rowSpan}`,
  ].join(" ");

  let stripStyle = `h-full w-full bg-pinus-${color}`;
  if (style) {
    stripStyle = `${stripStyle} ${style}`;
  }

  return (
    <div key={`strip-${s.color}`} className={gridPos}>
      <div className={stripStyle} />
    </div>
  );
};

const renderSection = (s: SectionInfo): React.ReactFragment => {
  const { id, data, options } = s;

  return (
    <div id={id} key={`events-${id}`} className={S.EventSection(options.flip)}>
      <div className={S.TextWrapper}>
        <p className={S.EventName}>{data.name}</p>
        <p className={S.EventDesc}>{data.description}</p>
      </div>
      <div className={S.ImageStripWrapper}>
        <div className={`${S.ImageWrapper}`}>
          <Image src={data.imageSrc} width={630} height={450} />
        </div>
        <div className={S.StripWrapper}>{options.strips.map(renderStrip)}</div>
      </div>
    </div>
  );
};
interface Entry {
  // eslint-disable-next-line
  [key: string]: any;
}
const EventsContent: NextPage = () => {
  React.useEffect(() => {
    async function getData() {
      const res = await getItems();
      setData(res);
    }
    getData();
  }, []);
  const [data, setData] = React.useState<Array<Entry>>();
  if (!data) {
    return <div></div>;
  }

  const newData: Array<EventData> = data.map((data) => {
    return {
      name: data.fields.name,
      description: data.fields.eventDescription,
      url: data.fields.url,
      imageSrc: "http:" + data.fields.eventPicture.fields.file.url,
    };
  });
  let index = -1;
  const sections: Array<SectionInfo> = newData.map((data) => {
    index++;
    return {
      id: data.name,
      data: data,
      options: optionsArray[index % optionsArray.length],
    };
  });
  return <div className={S.EventsWrapper}>{sections.map(renderSection)}</div>;
};

export default EventsContent;
