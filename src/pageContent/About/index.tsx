import React from "react";
import Text from "src/components/Text";
import Image from "next/image";

import AnnouncementOutlinedIcon from "@material-ui/icons/AnnouncementOutlined";
import CameraAltOutlinedIcon from "@material-ui/icons/CameraAltOutlined";
import EmojiObjectsOutlinedIcon from "@material-ui/icons/EmojiObjectsOutlined";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import SentimentSatisfiedAltIcon from "@material-ui/icons/SentimentSatisfiedAlt";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";

import * as S from "./styles";

const AboutContent: React.FC = () => {
  return (
    <>
      <div className={S.StorySection}>
        <div className={`col-start-2 col-span-4 row-start-3`}>
          <SentimentSatisfiedAltIcon style={{ fontSize: 48 }} />
          <Text variant="header" styles={`mt-8`}>
            Our Story
          </Text>
          <Text styles={`mt-8`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            odio dui, laoreet id consequat finibus, iaculis quis risus. Maecenas
            quis efficitur eros, a iaculis metus. Proin porttitor risus ut
            tortor vestibulum, suscipit ornare ex consequat. Nullam id facilisis
            orci. Aenean id ullamcorper est, eget posuere lacus. Morbi felis
            magna, mollis quis tristique a, interdum et diam. Nam lobortis
            tellus in ornare posuere. Mauris aliquet lectus at tincidunt
            accumsan.
          </Text>
        </div>

        <div className={`col-start-7 col-span-5 row-start-2 row-span-4 z-10`}>
          <div className={S.StoryImage}>
            <Image
              src="/assets/images/exco-group.png"
              alt="The PINUS Executive Committee"
              width={950}
              height={825}
            />
          </div>
        </div>

        <div className={`col-start-6 col-span-2 row-start-1 row-span-5`}>
          <div className={S.StoryRedStrip} />
        </div>
        <div className={`col-start-9 col-span-2 row-start-1 row-span-4`}>
          <div className={S.StoryBlueStrip} />
        </div>
        <div className={`col-start-11 col-span-2 row-start-4 row-span-2`}>
          <div className={S.StoryYellowStrip} />
        </div>
      </div>

      <div className={S.VisionMissionSection}>
        <div className={`col-start-2 col-span-4`}>
          <VisibilityOutlinedIcon style={{ fontSize: 48 }} />
          <Text variant="header" styles={`mt-4`}>
            Our Vision
          </Text>
          <Text styles={`mt-4`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            odio dui, laoreet id consequat finibus, iaculis quis risus. Maecenas
            quis efficitur eros, a iaculis metus. Proin porttitor risus ut
            tortor vestibulum, suscipit ornare ex consequat.
          </Text>
        </div>
        <div className={`col-start-7 col-span-4`}>
          <EmojiObjectsOutlinedIcon style={{ fontSize: 48 }} />
          <Text variant="header" styles={`mt-4`}>
            Our Mission
          </Text>
          <ul className={`mt-4`}>
            <li>
              <Text>
                To provide a platform for Indonesian students in NUS to build
                meaningful and long-lasting friendships.
              </Text>
            </li>
            <li>
              <Text>
                To become an ambassador and representative of Indonesian
                students in NUS and Singapore.
              </Text>
            </li>
          </ul>
        </div>
      </div>

      <div className={S.DivisionSection}>
        <div className={`col-start-2 col-span-3 row-start-1 row-span-1`}>
          <div className={`h-full w-full flex flex-row items-center`}>
            <Text variant="header">Our Divisions</Text>
          </div>
        </div>
        <div className={`col-start-2 col-span-3 row-start-2 row-span-2`}>
          <div className={`flex flex-col`}>
            <FavoriteBorderIcon style={S.DivisionIcon} />
            <Text variant="subheader" styles={`mt-2`}>
              Welfare Team
            </Text>
            <Text variant="body-small" styles={`mt-2`}>
              A home away from home for the PINUSians to bond as one family
              through different welfare initiatives which aim to give a holistic
              support to boost their wellness, while instilling a sense of
              belonging to the PINUS community.
            </Text>
          </div>
        </div>

        <div className={`col-start-5 col-span-4 row-start-2 row-span-2`}>
          <div className={`flex flex-col`}>
            <PeopleOutlineIcon style={S.DivisionIcon} />
            <Text variant="subheader" styles={`mt-2`}>
              Public & Alumni Team
            </Text>
            <Text variant="body-small" styles={`mt-2`}>
              A platform for external parties to engage with, and learn more
              about, the NUS community through initiatives such as PINUS
              Inspire, while fostering a safe and inclusive collaboration and
              learning space between PINUS, alumni and other Indonesian
              communities.
            </Text>
          </div>
        </div>

        <div className={`col-start-9 col-span-3 row-start-2 row-span-2`}>
          <div className={`flex flex-col`}>
            <AnnouncementOutlinedIcon style={S.DivisionIcon} />
            <Text variant="subheader" styles={`mt-2`}>
              Special Projects Team
            </Text>
            <Text variant="body-small" styles={`mt-2`}>
              A group dedicated to provide Indonesian students in NUS with
              various opportunities for self-expression, talent development, as
              well as skill sharing within the community.
            </Text>
          </div>
        </div>

        <div className={`col-start-2 col-span-3 row-start-4 row-span-2`}>
          <div className={`flex flex-col`}>
            <CameraAltOutlinedIcon style={S.DivisionIcon} />
            <Text variant="subheader" styles={`mt-2`}>
              Publicity Team
            </Text>
            <Text variant="body-small" styles={`mt-2`}>
              A vessel of communal ideas and creativity that aims to promote a
              strong, high, and positive profile of PINUS while raising
              awareness of internal and external events happening around
              Singapore and Indonesia.
            </Text>
          </div>
        </div>

        <div className={`col-start-5 col-span-4 row-start-4 row-span-2`}>
          <div className={`flex flex-col`}>
            <SettingsOutlinedIcon style={S.DivisionIcon} />
            <Text variant="subheader" styles={`mt-2`}>
              Technology Team
            </Text>
            <Text variant="body-small" styles={`mt-2`}>
              A group of creators that build and maintain the PINUS website
              which serves as an avenue of expression & inquiry, a showcase of
              life in PINUS, and a bridge between PINUS and the world.
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutContent;
