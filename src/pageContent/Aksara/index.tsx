import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Button from "src/components/Button";
import Text from "src/components/Text";
import ContentPreview from "src/components/ContentPreview";
import * as S from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { loadPostsActionCreator } from "../../redux/post";
import { State } from "../../redux/type";

const AksaraContent: React.FC = () => {
  const router = useRouter();
  const posts = useSelector((state: State) => state.posts);
  const dispatch = useDispatch();

  const titles = [
    {
      title: "Manusia",
      id: 1,
    },
    {
      title: "Opini",
      id: 2,
    },
    {
      title: "Modulus",
      id: 3,
    },
  ];
  const headerContent = [
    [
      "Manusia",
      "A collection of stories from Indonesian students in NUS of how life in Singapore can transform the ideas of identity, community, and nationality among Indonesians.",
    ],
    [
      "Opini",
      "A constructive platform where one’s interests, concerns, and perceptions of the ever-evolving world could be conveyed and shared freely through writings.",
    ],
    [
      "Modulus",
      "A module review platform which allows fellow Indonesians to share and obtain more personal and candid module reviews.",
    ],
  ];

  const renderHeader = () => {
    return (
      <div
        className={`flex flex-col lg-min:flex-wrap lg-min:flex-row lg-min:justify-center lg-min:max-w-screen-lg`}
      >
        {headerContent.map((item) => {
          return (
            <div className={`mt-10 lg-min:m-8 `} key={`header-${item[0]}`}>
              <ContentPreview
                title={item[0]}
                description={item[1]}
                hyperlink="https://aksarapinus.wordpress.com/"
                variant="secondary"
              ></ContentPreview>
            </div>
          );
        })}
      </div>
    );
  };

  const renderSection = (title, id) => {
    const array = posts.posts.filter((p) => p.categoryId === id);

    return (
      <div
        className={`flex flex-col items-center mt-10`}
        key={`section-${title}`}
      >
        <div>
          <div
            className={`border-b-2 border-black font-mono text-2xl lg-min:text-4xl`}
          >
            <Text variant="header-alt">{title.title}</Text>
          </div>
        </div>
        <div
          className={`flex flex-col flex-wrap lg-min:flex-row lg-min:justify-center `}
        >
          {array.map((item) => {
            return (
              <div className={`mt-10 lg-min:m-8`} key={`Content-${item.id}`}>
                <ContentPreview
                  title={item.title}
                  description={item.description}
                  hyperlink="https://aksarapinus.wordpress.com/"
                ></ContentPreview>
              </div>
            );
          })}
        </div>
        <div className={`mt-2 lg-min:mt-0 lg-min:mb-10`}>
          <Button
            variant="secondary"
            onClick={() => {
              dispatch(loadPostsActionCreator({ category: title.id }));
            }}
          >
            Load More!
          </Button>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className={S.AksaraSection}>
        <div
          className={`max-w-screen flex flex-row justify-between w-full h-screen-75 items-start`}
        >
          <div
            className={`ml-8 lg-min:ml-16 flex flex-col w-10/12 justify-around h-full`}
          >
            <div className={`relative`}>
              <div className={`absolute z-0 top-0`}>
                <Image
                  alt="CreamBall"
                  src="/assets/aksaraImages/aksaraCircle1.png"
                  layout="fixed"
                  width="100"
                  height="100"
                ></Image>
              </div>
              <div className={`absolute z-0 top-10 left-10`}>
                <Image
                  alt="OrangeBall"
                  src="/assets/aksaraImages/aksaraCircle2.png"
                  layout="fixed"
                  width="70"
                  height="70"
                ></Image>
              </div>
            </div>
            <div
              className={`flex flex-row justify-between font-mono items-center items-stretch z-10 mt-10 lg-min:justify-start`}
            >
              <div className={`flex flex-row mt-2`}>
                <div
                  className={`border-b-2 border-black text-xl lg-min:text-3xl`}
                >
                  Welcome
                </div>
                <div className={`text-xl lg-min:text-3xl`}>&nbsp;to</div>
              </div>
              <div
                className={`border-b-2 border-black text-4xl lg-min:ml-24 lg-min:text-6xl font-extrabold`}
              >
                [ak.sa.ra]
              </div>
            </div>
            <div className={`flex flex-col content-evenly z-10`}>
              <Text
                variant="subtext-alt"
                styles={`font-extrabold lg-min:text-xl`}
              >
                /ak·sa·ra/ n Ling
              </Text>
              {/* Excessive stack error if use text  */}
              <div className={`lg-min:text-lg`}>
                <b>1</b> sistem tanda grafis yang digunakan manusia untuk
                berkomunikasi dan sedikit banyaknya mewakili ujaran; <b>2</b>{" "}
                jenis sistem tanda grafis tertentu, misalnya aksara Pallawa,
                aksara Inka; <b>3</b> huruf;
              </div>
            </div>
            <Button variant="secondary" onClick={() => router.push("/about")}>
              Send Us Your Posts!
            </Button>
          </div>
          <div
            className={`hidden lg-min:flex lg-min:flex-col lg-min:items-end lg-min:w-screen lg-min:max-h-96`}
          >
            <div className={`flex flex-row`}>
              <Image
                alt="Some Image"
                src="/assets/aksaraImages/aksara-newspaper.png"
                layout="intrinsic"
                width="600"
                height="400"
              ></Image>
            </div>
            <div className={`hidden 2xl-min:flex 2xl-min:flex-row`}>
              <div className={`m-2`}>
                <Image
                  alt="Some Image"
                  src="/assets/aksaraImages/aksara-notes.png"
                  layout="intrinsic"
                  width="292"
                  height="200"
                ></Image>
              </div>
              <div className={`mt-2`}>
                <Image
                  alt="Some Image"
                  src="/assets/aksaraImages/aksara-keyboard.png"
                  layout="intrinsic"
                  width="300"
                  height="300"
                ></Image>
              </div>
            </div>
          </div>
        </div>
        <div className={`flex flex-row justify-start w-screen lg-min:hidden`}>
          <Image
            alt="BlackBar"
            src="/assets/aksaraImages/aksaraOvalBlackSmall.png"
            layout="fixed"
            width="350"
            height="50"
          ></Image>
        </div>
        <div
          className={`hidden lg-min:flex lg-min:flex-row lg-min:justify-start lg-min:w-screen`}
        >
          <Image
            alt="BlackBar"
            src="/assets/aksaraImages/aksaraOvalBlackSmall.png"
            layout="fixed"
            width="500"
            height="50"
          ></Image>
        </div>
        <div
          className={`flex flex-col justify-center align-center mt-12 mb-12`}
        >
          <div
            className={`flex flex-col flex-wrap lg-min:flex-row lg-min:justify-center `}
          >
            {renderHeader()}
          </div>
          <div className={`flex flex-col`}>
            {titles.map((title, idx) => renderSection(title, idx + 1))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AksaraContent;
