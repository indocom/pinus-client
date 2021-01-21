import React from "react";
import { NextPage } from "next";
import Image from "next/image";

import { sections, SectionInfo, StripData } from "./data";

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

const EventsContent: NextPage = () => {
  return <div className={S.EventsWrapper}>{sections.map(renderSection)}</div>;
};

export default EventsContent;
