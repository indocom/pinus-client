export const EventsWrapper = `flex flex-col py-8 lg:py-12 px-12 lg:px-6 space-y-5`;

export const EventSection = (reverse: boolean): string => {
  const flexDirection = reverse ? `flex-row-reverse` : `flex-row`;

  return `h-full w-full flex ${flexDirection} lg:flex-col-reverse justify-around items-center`;
};

export const TextWrapper = `max-w-xl lg:w-full flex flex-col justify-center space-y-5`;
export const EventName = `font-bold text-5xl lg:text-3xl text-gray-900 lg:text-center`;
export const EventDesc = `text-2xl lg:text-lg text-gray-900`;

export const ImageStripWrapper = `grid grid-cols-12 grid-rows-6`;
export const StripWrapper = `col-start-1 col-span-12 row-start-1 row-span-6 grid grid-cols-12 grid-rows-6`;
export const ImageWrapper = `col-start-1 col-span-12 row-start-2 row-span-4 z-10 flex justify-center items-center shadow-lg`;
