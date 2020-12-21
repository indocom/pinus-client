import React from "react";
import Button from "src/components/Button";
import Carousel from "src/components/Carousel";
import Text from "src/components/Text";
import * as S from "./styles";

const HomeContent: React.FC = () => {
  return (
    <>
      <div className={S.Section}>
        <div
          className={`col-start-1 col-span-8 row-start-1 row-span-6 bg-transparent z-10`}
        >
          <div className={S.ImageBanners}>
            <div className={S.ImageBanner1} />
            <div className={S.ImageBanner2} />
            <div className={S.ImageBanner3} />
          </div>
        </div>
        <div className={S.RedBanner} />
        <div className={S.BlueBanner} />
        <div className={S.YellowBanner} />
        <div className={`col-start-9 col-span-3 row-start-3`}>
          <div className={`flex flex-col`}>
            <Text variant="header">About PINUS</Text>
            <Text styles={`mt-8 mb-14`}>
              Founded in 1998, Perhimpunan Indonesia NUS (PINUS) serves as an
              avenue that fosters a tight-knit Indonesian community in NUS.
              Learn more about us.
            </Text>
            <Button>Find Out More</Button>
          </div>
        </div>
      </div>
      <div className={S.Section}>
        <div className={`col-start-2 col-span-4 row-start-2`}>
          <div className={`flex flex-col`}>
            <Text variant="header">PINUS Events</Text>
            <Text styles={`mt-8 mb-14`}>
              It is at the heart of our events to help Indonesians in NUS feel
              home away from home, while showcasing Indonesia’s cultural
              diversity to a wider audience base. Find out more about our
              events.
            </Text>
            <Button>Find Out More</Button>
          </div>
        </div>
        <div className={S.Carousel}>
          <Carousel
            slides={[{ title: "", image: "/assets/images/nuansa.jpg" }]}
          />
        </div>
        <div className={`col-start-6 col-span-7 row-start-1 row-span-6`}>
          <div
            className={`mt-6 ml-6 grid grid-cols-7 grid-rows-6 h-full w-full`}
          >
            <div className={`col-span-6 row-span-5 bg-pinus-blue`} />
          </div>
        </div>
      </div>
      <div className={S.FreshmenHeader}>
        <Text variant="header">For Incoming Freshmen</Text>
        <Text styles={`mt-8`}>
          You are our utmost priority - we have compiled essential information
          to help ease your NUS journey!
        </Text>
      </div>
      <div className={S.FreshmenSection}>
        <div className={`flex flex-col items-center`}>
          <Text variant="subheader">Before Acceptance</Text>
          <Text styles={`text-center mt-8 mb-24 w-96 h-full`}>
            Comprises essentials, such as programmes offered and living costs,
            you have to know before applying to NUS.
          </Text>
          <Button variant="secondary">Find Out More</Button>
        </div>
        <div className={`flex flex-col items-center`}>
          <Text variant="subheader">After Acceptance</Text>
          <Text styles={`text-center mt-8 mb-24 w-96 h-full`}>
            Comprises the next steps after your acceptance letter.
          </Text>
          <Button variant="secondary">Find Out More</Button>
        </div>
      </div>
    </>
  );
};

export default HomeContent;
