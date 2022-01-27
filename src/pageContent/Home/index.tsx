import React from "react";
import { useRouter } from "next/router";
import { Text, Button } from "pinus-ui-library";
import * as S from "./styles";

const HomeContent: React.FC = () => {
  const router = useRouter();
  const renderAbout = () => (
    <div className={`lg:items-center flex flex-col space-y-4`}>
      <Text fontSize="5xl" fontWeight="bold">
        About PINUS
      </Text>
      <Text fontSize="xl">
        Founded in 1998, Perhimpunan Indonesia NUS (PINUS) serves as an avenue
        that fosters a tight-knit Indonesian community in NUS. Learn more about
        us.
      </Text>
      <div>
        <Button
          onClick={() => router.push("/about")}
          label="Find Out More"
          variant="secondary"
        />
      </div>
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
          <div className={`lg:items-center flex flex-col space-y-4`}>
            <Text fontSize="5xl" fontWeight="bold">
              PINUS Events
            </Text>
            <Text fontSize="xl">
              It is at the heart of our events to help Indonesians in NUS feel
              home away from home, while showcasing Indonesia’s cultural
              diversity to a wider audience base. Find out more about our
              events.
            </Text>
            <div>
              <Button
                onClick={() => router.push("/events")}
                label="Find Out More"
                variant="secondary"
              />
            </div>
          </div>
        </div>
        <div className={S.Nuansa} />
        <div
          className={`lg:hidden col-start-6 col-span-7 row-start-1 row-span-6`}
        >
          <div
            className={`pt-6 pl-6 grid grid-cols-7 grid-rows-6 h-full w-full`}
          >
            <div className={`col-span-6 row-span-5 bg-pinus-blue`} />
          </div>
        </div>
      </div>
      <div className={S.FreshmenHeader}>
        <Text fontSize="5xl" fontWeight="bold">
          For Incoming Freshmen
        </Text>
        <span>&nbsp;</span>
        <Text fontSize="xl">
          You are our utmost priority - we have compiled essential information
          to help ease your NUS journey!
        </Text>
      </div>
      <div className={`flex justify-center bg-pinus-black w-full mb-48`}>
        <div className={S.FreshmenSection}>
          <div className={`lg:mb-16 flex flex-col items-center`}>
            <Text fontSize="2xl" fontWeight="bold" color="white">
              Before Acceptance
            </Text>
            <div className={`max-w-sm h-full text-center m-8`}>
              <Text color="white" fontSize="xl">
                Comprises essentials, such as programmes offered and living
                costs, you have to know before applying to NUS.
              </Text>
            </div>
            <div>
              <Button
                onClick={() => router.push("/admissions/before-01")}
                label="Find Out More"
                variant="primary"
              />
            </div>
          </div>
          <div className={`flex flex-col items-center text-center`}>
            <Text fontSize="2xl" fontWeight="bold" color="white">
              After Acceptance
            </Text>
            <div className={`max-w-sm h-full m-8`}>
              <Text color="white" fontSize="xl">
                Comprises the next steps after your acceptance letter.
              </Text>
            </div>
            <div>
              <Button
                onClick={() => router.push("/admissions/after-01")}
                label="Find Out More"
                variant="primary"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeContent;
