import React from "react";
import { NextPage } from "next";
import Image from "next/image";

import { events, EventInfo, StripOptions } from "./data";

import * as S from "./style";

const renderStrip = (s: StripOptions): React.ReactFragment => {
  const [colStart, colSpan] = s.col;
  const [rowStart, rowSpan] = s.row;

  const gridPos = [
    `col-start-${colStart} col-span-${colSpan}`,
    `row-start-${rowStart} row-span-${rowSpan}`,
  ].join(" ");

  let stripStyle = `h-full w-full bg-pinus-${s.color}`;
  if (s.style) {
    stripStyle = `${stripStyle} ${s.style}`;
  }

  return (
    <div key={`strip-${s.color}`} className={gridPos}>
      <div className={stripStyle} />
    </div>
  );
};

const renderEventSection = (e: EventInfo): React.ReactFragment => {
  return (
    <div
      id={e.id}
      key={`events-${e.id}`}
      className={S.EventSection(e.options.reverse)}
    >
      <div className={S.TextWrapper}>
        <p className={S.EventName}>{e.name}</p>
        <p className={S.EventDesc}>{e.description}</p>
      </div>
      <div className={S.ImageStripWrapper}>
        <div className={S.ImageWrapper}>
          <Image src={e.imageSrc} width={630} height={450} />
        </div>
        <div className={S.StripWrapper}>
          {e.options.strips.map(renderStrip)}
        </div>
      </div>
    </div>
  );
};

const EventsContent: NextPage = () => {
  return (
    <div className={S.EventsWrapper}> {events.map(renderEventSection)} </div>
  );
};

export default EventsContent;
