import React from "react";
import { useRouter } from "next/router";
import Button from "src/components/Button";
import Carousel from "src/components/Carousel";
import Text from "src/components/Text";
import * as S from "./styles";

const HomeContent: React.FC = () => {
  const router = useRouter();

  const renderAbout = () => (
    <div className={`lg:items-center flex flex-col`}>
      <Text styles={`lg:text-center`} variant="header">
        About PINUS
      </Text>
      <Text styles={S.SectionText}>
        Founded in 1998, Perhimpunan Indonesia NUS (PINUS) serves as an avenue
        that fosters a tight-knit Indonesian community in NUS. Learn more about
        us.
      </Text>
      <Button onClick={() => router.push("/about")}>Find Out More</Button>
    </div>
  );

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
        <div className={`lg:hidden col-start-9 col-span-3 row-start-3`}>
          {renderAbout()}
        </div>
      </div>
      <div className={`lg-min:hidden mt-24 mb-52`}>{renderAbout()}</div>
      <div className={S.Section}>
        <div
          className={`lg:col-start-1 lg:col-span-6 lg:row-start-4 col-start-2 col-span-4 row-start-2`}
        >
          <div className={`lg:items-center flex flex-col`}>
            <Text styles={`lg:text-center`} variant="header">
              PINUS Events
            </Text>
            <Text styles={S.SectionText}>
              It is at the heart of our events to help Indonesians in NUS feel
              home away from home, while showcasing Indonesia’s cultural
              diversity to a wider audience base. Find out more about our
              events.
            </Text>
            <Button onClick={() => router.push("/events")}>
              Find Out More
            </Button>
          </div>
        </div>
        <div className={S.Carousel}>
          <Carousel
            slides={[{ title: "", image: "/assets/images/nuansa.jpg" }]}
          />
        </div>
        <div
          className={`lg:hidden col-start-6 col-span-7 row-start-1 row-span-6`}
        >
          <div
            className={`mt-6 ml-6 grid grid-cols-7 grid-rows-6 h-full w-full`}
          >
            <div className={`col-span-6 row-span-5 bg-pinus-blue`} />
          </div>
        </div>
      </div>
      <div className={S.FreshmenHeader}>
        <Text styles={`text-center`} variant="header">
          For Incoming Freshmen
        </Text>
        <Text styles={`text-center mt-8 lg:max-w-md`}>
          You are our utmost priority - we have compiled essential information
          to help ease your NUS journey!
        </Text>
      </div>
      <div className={S.FreshmenSection}>
        <div className={`lg:mb-16 flex flex-col items-center`}>
          <Text variant="subheader" color="white">
            Before Acceptance
          </Text>
          <Text
            color="white"
            styles={`lg:mb-12 text-center mt-8 mb-24 max-w-sm h-full`}
          >
            Comprises essentials, such as programmes offered and living costs,
            you have to know before applying to NUS.
          </Text>
          <Button
            variant="secondary"
            onClick={() =>
              router.push(
                "/admissions/before/melanjutkan-studi-di-nus/kenapa-singapura"
              )
            }
          >
            Find Out More
          </Button>
        </div>
        <div className={`flex flex-col items-center`}>
          <Text variant="subheader" color="white">
            After Acceptance
          </Text>
          <Text
            color="white"
            styles={`lg:mb-12 text-center mt-8 mb-24 max-w-sm h-full`}
          >
            Comprises the next steps after your acceptance letter.
          </Text>
          <Button
            variant="secondary"
            onClick={() => router.push("/admissions/after/overview")}
          >
            Find Out More
          </Button>
        </div>
      </div>
    </>
  );
};

export default HomeContent;
