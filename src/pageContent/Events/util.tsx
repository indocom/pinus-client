import Image from "next/image";

import { EventInfo, StripOptions, events } from "./data";

import * as S from "./style";

const renderStrip = (s: StripOptions): React.ReactFragment => {
  const stripStyle = `col-start-${s.colStart} col-span-${s.colSpan} row-start-${s.rowStart} row-span-${s.rowSpan}`;

  return (
    <div key={`strip-${s.color}`} className={stripStyle}>
      <div className={`h-full w-full bg-pinus-${s.color}`}></div>
    </div>
  );
};

export const renderEventSection = (e: EventInfo): React.ReactFragment => {
  return (
    <div
      id={e.id}
      className={S.Section(e.options.reverse)}
      key={`events-${e.id}`}
    >
      <div className={S.TextWrapper}>
        <p className={S.EventName}>{e.name}</p>
        <p className={S.EventDesc}>{e.description}</p>
      </div>
      <div className={`flex`}>
        <div className={S.ImageWrapper}>
          <Image src={e.imageSrc} width={640} height={540} />
        </div>
        <div className={S.StripWrapper}>
          {e.options.strips.map(renderStrip)}
        </div>
      </div>
    </div>
  );
};

export const getEventById = (id: string): EventInfo => {
  return events.find((e) => e.id === id);
};
