import React from "react";
import Button from "src/components/Button";
import Carousel from "src/components/Carousel";

const HomeContent: React.FC = () => {
  return (
    <div>
      <div className={`grid grid-cols-12 grid-rows-6 gap-6 h-screen`}>
        <div
          className={`col-start-1 col-span-8 row-start-1 row-span-6 bg-transparent z-10`}
        >
          <div
            className={`mt-16 ml-4 grid grid-cols-8 grid-rows-6 gap-6 h-full w-full`}
          >
            <div
              className={`col-start-2 col-span-2 row-start-1 row-span-3 bg-home-showcase1 bg-cover bg-top bg-no-repeat`}
            />
            <div
              className={`col-start-4 col-span-2 row-start-2 row-span-3 bg-home-showcase2 bg-cover bg-center bg-no-repeat`}
            />
            <div
              className={`col-start-6 col-span-2 row-start-3 row-span-3 bg-home-showcase3 bg-cover bg-center bg-no-repeat`}
            />
          </div>
        </div>
        <div
          className={`col-start-2 col-span-2 row-start-1 row-span-3 bg-pinus-red`}
        />
        <div
          className={`col-start-4 col-span-2 row-start-1 row-span-4 bg-pinus-blue`}
        />
        <div
          className={`col-start-6 col-span-2 row-start-3 row-span-4 bg-pinus-yellow`}
        />
        <div className={`col-start-9 col-span-3 row-start-3`}>
          <div className={`flex flex-col`}>
            <p className={`font-bold text-5xl`}>About PINUS</p>
            <p className={`font-normal text-xl mt-8 mb-14`}>
              Founded in 1998, Perhimpunan Indonesia NUS (PINUS) serves as an
              avenue that fosters a tight-knit Indonesian community in NUS.
              Learn more about us.
            </p>
            <Button>Find Out More</Button>
          </div>
        </div>
      </div>
      <div className={`grid grid-cols-12 grid-rows-6 gap-6 h-screen`}>
        <div className={`col-start-2 col-span-4 row-start-2`}>
          <div className={`flex flex-col`}>
            <p className={`font-bold text-5xl`}>PINUS Events</p>
            <p className={`font-normal text-xl mt-8 mb-14`}>
              It is at the heart of our events to help Indonesians in NUS feel
              home away from home, while showcasing Indonesia’s cultural
              diversity to a wider audience base. Find out more about our
              events.
            </p>
            <Button>Find Out More</Button>
          </div>
        </div>
        <div className={`col-start-6 col-span-6 row-start-1 row-span-5`}>
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
      <div className={`flex flex-col items-center py-12`}>
        <p className={`font-bold text-5xl`}>For Incoming Freshmen</p>
        <p className={`text-xl mt-8`}>
          You are our utmost priority - we have compiled essential information
          to help ease your NUS journey!
        </p>
      </div>
      <div
        className={`flex flex-row justify-between px-72 py-28 mb-48 bg-pinus-black text-white`}
      >
        <div className={`flex flex-col items-center`}>
          <p className={`font-bold text-2xl mb-8`}>Before Acceptance</p>
          <p className={`font-normal text-xl text-center mb-24 w-96 h-full`}>
            Comprises essentials, such as programmes offered and living costs,
            you have to know before applying to NUS.
          </p>
          <Button variant="secondary">Find Out More</Button>
        </div>
        <div className={`flex flex-col items-center`}>
          <p className={`font-bold text-2xl mb-8`}>After Acceptance</p>
          <p className={`text-xl text-center mb-24 w-96 h-full`}>
            Comprises the next steps after your acceptance letter.
          </p>
          <Button variant="secondary">Find Out More</Button>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
