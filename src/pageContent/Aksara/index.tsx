import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Text from "src/components/Text";
import * as S from "./styles";
import Button from "src/components/Button";
import { textArray } from "./stubs.tsx";

const AksaraContent: React.FC = () => {
  const router = useRouter();
  // TODO : use render About for mobile version
  const renderAbout = () => (
    <div className={`lg:items-left flex flex-row`}>
      <div className={``}>
        <Text styles={`lg:text-left font-mono`} variant="aksaraHeader">
          <span className={`border-b-2 border-black`}> Welcome</span> to{" "}
          <span className={`font-bold text-5xl ml-28 border-b-2 border-black`}>
            [ak.sa.ra]
          </span>
        </Text>
        <Text styles={`font-sans lg:text-center lg:max-w-md lg:px-6 mt-8`}>
          <p className={`font-bold text-base`}>/ak-sa-ra/ n Ling</p>
        </Text>
        <Text variant="aksaraSubheader">
          <b>1</b> sistem tanda grafis yang digunakan manusia untuk
          berkomunikasi dengan sedikit banyaknya mewakili ujaran; <b>2</b> jenis
          sistem tanda grafis tertentu, misalnya aksara Pallawa, aksara Inka;{" "}
          <b>3</b> huruf;
        </Text>
        <br />
        <Button onClick={() => router.push("/about")} variant="secondary">
          Share Your Story
        </Button>
      </div>
    </div>
  );

  const renderBox = (title: string, description: string, image? = "empty") => {
    return (
      <div className={S.Box}>
        {image === "empty" ? null : (
          <Image
            src="/assets/images/nuansa.jpg"
            alt="Picture of a small black Oval"
            width={407}
            height={220}
          />
        )}
        <div
          className={
            S.BoxText + `${image === "empty" ? " mt-28" : " mt-8 h-1/4"}`
          }
        >
          <Text
            styles={S.AksaraText}
            variant={image === "empty" ? "header" : "subheader"}
          >
            {title}
          </Text>
          <br></br>
          <Text styles={S.AksaraText} variant="aksaraText">
            {description}
          </Text>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className={S.Section}>
        <div className={`col-start-2 col-span-2 row-start-1 ml-10 mt-28`}>
          <Image
            src="/assets/images/aksaraCircle1.png"
            alt="Picture of a white ball"
            width={200}
            height={200}
          />
        </div>
        <div className={`col-start-3 col-span-1 row-start-2 mt-20`}>
          <Image
            src="/assets/images/aksaraCircle2.png"
            alt="Picture of a red ball"
            width={100}
            height={100}
          />
        </div>
        <div className={`col-start-2 col-span-5 row-start-4 row-span-7`}>
          {renderAbout()}
        </div>
        <div className={`col-start-9 col-span-5 row-start-1 row-span-3 mt-24`}>
          <Image
            src="/assets/images/aksara-newspaper.png"
            alt="Picture of a newspaper"
            width={500}
            height={400}
          />
        </div>
        <div className={`col-start-10 col-span-3 row-start-5 row-span-3 ml-10`}>
          <Image
            src="/assets/images/aksara-keyboard.png"
            alt="Picture of a keyboard"
            width={320}
            height={300}
          />
        </div>
        <div className={`col-start-9 col-span-2 row-start-5 row-span-2`}>
          <Image
            src="/assets/images/aksara-notes.png"
            alt="Picture of a notes"
            width={170}
            height={170}
          />
        </div>
        <div className={`col-start-1 col-span-3 row-start-7`}>
          <Image
            src="/assets/images/aksaraOvalBlackSmall.png"
            alt="Picture of a small black Oval"
            width={400}
            height={75}
          />
        </div>
        <div className={`col-start-5 col-span-2 row-start-6`}>
          <Image
            src="/assets/images/aksaraOvalBlackBig.png"
            alt="Picture of a big black Oval"
            width={200}
            height={75}
          />
        </div>
      </div>
      <div className={S.Section}>
        <div className={`col-span-5 col-start-1 mt-24 z-0`}>
          <Image
            src="/assets/images/aksaraCircle3.png"
            alt="Picture of a big Circle"
            width={400}
            height={600}
          />
        </div>
        <div className={`absolute left-48 top-64 z-20`}>
          <Image
            src="/assets/vectors/manusia.png"
            alt="Picture of a human"
            width={100}
            height={100}
          />
        </div>
        <div className={`absolute right-96 top-56 z-20`}>
          <Image
            src="/assets/vectors/modulus.png"
            alt="Picture of a human"
            width={100}
            height={100}
          />
        </div>
        <div className={`absolute right-1/2 top-60 z-20`}>
          <Image
            src="/assets/vectors/opini.png"
            alt="Picture of a human"
            width={100}
            height={100}
          />
        </div>
        <div className={S.Content + ` mt-44`}>
          {renderBox(
            "Manusia",
            "A collection of stories from Indonesian students in NUS of how life in Singapore can transform the ideas of identity, community, and nationality among Indonesians."
          )}
          {renderBox(
            "Opini",
            "A constructive platform where one’s interests, concerns, and perceptions of the ever-evolving world could be conveyed and shared freely through writings."
          )}
          {renderBox(
            "Modulus",
            "A module review platform which allows fellow Indonesians to share and obtain more personal and candid module reviews."
          )}
        </div>
        <div className={`absolute left-1/4 bottom-12 z-20`}>
          <Image
            src="/assets/vectors/aksaraLongOvalOrange.png"
            alt="Picture of a long oval orange"
            width={300}
            height={50}
          />
        </div>
        <div className={`absolute right-0 bottom-32 z-20`}>
          <Image
            src="/assets/vectors/aksaraLongRightBlack.png"
            alt="Picture of a long black"
            width={300}
            height={75}
          />
        </div>
        <div className={`absolute left-96 bottom-32 z-20`}>
          <Image
            src="/assets/vectors/aksaraShortOvalOrange.png"
            alt="Picture of a short oval orange"
            width={150}
            height={50}
          />
        </div>
      </div>
      <div className={S.Section}>
        <div className={S.AksaraTitle}>
          <b>Manusia</b>
        </div>
        <div className={`absolute top-96 z-0`}>
          <Image
            src="/assets/vectors/aksaraBigBlackBall.png"
            alt="Picture of a big black ball"
            width={400}
            height={600}
          />
        </div>
        <div className={`absolute left-1/3 mt-16 ml-24 z-0`}>
          <Image
            src="/assets/images/aksaraCircle2.png"
            alt="Picture of a red ball"
            width={100}
            height={100}
          />
        </div>
        <div className={S.Content + ` mt-20`}>
          {textArray.map((item, index: number) =>
            index % 3 === 0 && index !== 0 ? (
              <div className={S.Box}>test</div> // TODO :expand when load more than 3
            ) : (
              renderBox("Manusia", item, "hand")
            )
          )}
        </div>
        <div className={`absolute bottom-20 z-20 right-1/3 mr-48`}>
          {/* TODO : Make the button works */}
          <Button onClick={() => router.push("/about")} variant="secondary">
            Load More
          </Button>
        </div>
      </div>
      <div className={S.Section}>
        <div className={S.AksaraTitle}>
          <b>Opini</b>
        </div>
        <div className={`absolute left-1/3 mt-16 ml-56 z-0`}>
          <Image
            src="/assets/images/aksaraCircle1.png"
            alt="Picture of a Cream ball"
            width={100}
            height={100}
          />
        </div>
        <div className={S.Content + ` mt-20`}>
          {textArray.map((item, index: number) =>
            index % 3 === 0 && index !== 0 ? (
              <div className={S.Box}>test</div> // TODO :expand when load more than 3
            ) : (
              renderBox("Opini", item, "hand")
            )
          )}
        </div>
        <div className={`absolute bottom-20 z-20 right-1/3 mr-48`}>
          {/* TODO : Make the button works */}
          <Button onClick={() => router.push("/about")} variant="secondary">
            Load More
          </Button>
        </div>
      </div>
      <div className={S.Section}>
        <div className={S.AksaraTitle}>
          <b>Modulus</b>
        </div>
        <div className={`absolute left-1/3 mt-16 ml-24 z-0`}>
          <Image
            src="/assets/images/aksaraCircle2.png"
            alt="Picture of a red ball"
            width={100}
            height={100}
          />
        </div>
        <div className={S.Content + ` mt-20`}>
          {textArray.map((item, index: number) =>
            index % 3 === 0 && index !== 0 ? (
              <div className={S.Box}>test</div> // TODO :expand when load more than 3
            ) : (
              renderBox("Modulus", item, "hand")
            )
          )}
        </div>
        <div className={`absolute bottom-20 z-20 right-1/3 mr-48`}>
          {/* TODO : Make the button works */}
          <Button onClick={() => router.push("/about")} variant="secondary">
            Load More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AksaraContent;
