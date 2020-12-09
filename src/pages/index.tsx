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
        <div className={`flex flex-col items-center py-12`}>
          <p className={`font-bold text-5xl`}>For Incoming Freshmen</p>
          <p className={`text-xl mt-8`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            odio dui, laoreet id consequat finibus, iaculis quis risus.
          </p>
        </div>
        <div
          className={`flex flex-row justify-between px-72 py-28 bg-secondary`}
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
