import React from "react";
import Button from "src/components/Button";
import Page from "src/components/Page";

const Home: React.FC = () => {
  return (
    <Page
      bgImage="home"
      title="Perhimpunan Indonesia NUS"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas odio dui, laoreet id consequat finibus, iaculis quis risus. Maecenas quis efficitur eros, a iaculis metus."
    >
      <div>
        <div className={`grid grid-cols-12 grid-rows-6 gap-6 h-screen`}>
          <div
            className={`col-start-1 col-span-8 row-start-1 row-span-6 bg-transparent z-10`}
          >
            <div
              className={`mt-16 ml-4 grid grid-cols-8 grid-rows-6 gap-6 h-full w-full`}
            >
              <div
                className={`col-start-2 col-span-2 row-start-1 row-span-3 bg-secondary`}
              />
              <div
                className={`col-start-4 col-span-2 row-start-2 row-span-3 bg-secondary`}
              />
              <div
                className={`col-start-6 col-span-2 row-start-3 row-span-3 bg-secondary`}
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas odio dui, laoreet id consequat finibus, iaculis quis
                risus. Maecenas quis efficitur eros, a iaculis metus.
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas odio dui, laoreet id consequat finibus, iaculis quis
                risus. Maecenas quis efficitur eros, a iaculis metus.
              </p>
              <Button>Find Out More</Button>
            </div>
          </div>
          <div className={`col-start-6 col-span-6 row-span-5 bg-secondary`} />
        </div>
        <div className={`flex flex-col items-center py-12`}>
          <p className={`font-bold text-5xl`}>For Incoming Freshmen</p>
          <p className={`text-xl mt-8`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            odio dui, laoreet id consequat finibus, iaculis quis risus.
          </p>
        </div>
        <div
          className={`flex flex-row justify-between px-72 py-28 mb-48 bg-secondary`}
        >
          <div className={`flex flex-col items-center`}>
            <p className={`font-bold text-2xl mb-8`}>Before Acceptance</p>
            <p className={`font-normal text-xl text-center mb-24 w-96`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              odio dui, laoreet id consequat finibus, iaculis quis risus.
            </p>
            <Button>Find Out More</Button>
          </div>
          <div className={`flex flex-col items-center`}>
            <p className={`font-bold text-2xl mb-8`}>After Acceptance</p>
            <p className={`text-xl text-center mb-24 w-96`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              odio dui, laoreet id consequat finibus, iaculis quis risus.
            </p>
            <Button>Find Out More</Button>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default Home;
