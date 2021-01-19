export const Section = (reverse: boolean): string => {
  const flexDirection = reverse ? `flex-row-reverse` : `flex-row`;

  return `h-screen lg:h-full w-screen flex ${flexDirection} lg:flex-col-reverse justify-around py-8 px-12 lg:space-y-5 lg:space-y-reverse`;
};

export const TextWrapper = `max-w-xl lg:w-full flex flex-col justify-center space-y-5`;
export const EventName = `font-bold text-5xl lg:text-3xl text-gray-900 lg:text-center`;
export const EventDesc = `text-2xl lg:text-lg text-gray-900`;
export const StripWrapper = `col-start-1 col-span-4 row-start-1 row-span-4 z-10 w-full h-full grid grid-cols-12 grid-rows-6`;
export const ImageWrapper = `col-start-1 col-span-4 row-start-1 row-span-4 z-20 w-full h-full flex justify-center items-center`;
