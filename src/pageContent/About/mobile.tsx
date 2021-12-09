import React from "react";
// import Text from "src/components/Text";
import { Text } from "pinus-ui-library";

import {
  Camera,
  Eye,
  Heart,
  Key,
  MessageSquare,
  Settings,
  Smile,
  Users,
} from "react-feather";

const AboutMobile: React.FC = () => {
  return (
    <>
      <div className={`px-10 py-20 space-y-20`}>
        <div>
          <Smile size={48} />
          <Text fontSize="5xl" fontWeight="bold">
            Our Story
          </Text>
          <Text fontSize="xl">
            Perhimpunan Indonesia NUS (PINUS) is the NUS Indonesian Students’
            Association. Founded in 1998, it is of our utmost priority to serve
            the Indonesian community in NUS while simultaneously being a bridge
            that connects Indonesia and NUS.
          </Text>
        </div>
        <div>
          <Eye size={48} />
          <Text fontSize="5xl" fontWeight="bold">
            Our Vision
          </Text>
          <Text fontSize="xl">
            Building PINUS as a family-based community that embraces every
            Indonesian student in NUS and fosters potential and talent to give
            back to Indonesia and Singapore.
          </Text>
        </div>
        <div>
          <Key size={48} />
          <Text fontSize="5xl" fontWeight="bold">
            Our Mission
          </Text>
          <ul className={`mt-8 list-disc`}>
            <li>
              <Text fontSize="xl">
                Build a platform for PINUS members to collaborate and exchange
                ideas with one another.
              </Text>
            </li>
            <li className={`mt-2`}>
              <Text fontSize="xl">
                To become an ambassador and representative of Indonesian
                students in NUS and Singapore.
              </Text>
            </li>
            <li className={`mt-2`}>
              <Text fontSize="xl">
                Create events that would foster a sense of belonging and family
                within PINUS.
              </Text>
            </li>
            <li className={`mt-2`}>
              <Text fontSize="xl">
                Ease the adaptation process for new freshmen while maintaining a
                positive relationship with alumnus to build a wholesome
                community.
              </Text>
            </li>
          </ul>
        </div>
      </div>
      <div className={`bg-black mb-36 flex flex-col py-20 px-10 space-y-20`}>
        <Text fontSize="5xl" fontWeight="bold" color="white">
          Our Divisions
        </Text>
        <div className={`flex flex-col`}>
          <Heart color={`#FF3B3A`} size={48} />
          <Text fontSize="2xl" fontWeight="bold" color="white">
            Welfare Team
          </Text>
          <Text fontSize="lg" fontWeight="bold" color="white">
            A home away from home for the PINUSians to bond as one family
            through different welfare initiatives which aim to give a holistic
            support to boost their wellness, while instilling a sense of
            belonging to the PINUS community.
          </Text>
        </div>
        <div className={`flex flex-col`}>
          <Users color={`#FF3B3A`} size={48} />
          <Text fontSize="2xl" fontWeight="bold" color="white">
            Public & Alumni Team
          </Text>
          <Text fontSize="lg" fontWeight="bold" color="white">
            A platform for external parties to engage with, and learn more
            about, the NUS community through initiatives such as PINUS Inspire,
            while fostering a safe and inclusive collaboration and learning
            space between PINUS, alumni and other Indonesian communities.
          </Text>
        </div>
        <div className={`flex flex-col`}>
          <MessageSquare color={`#FF3B3A`} size={48} />
          <Text fontSize="2xl" fontWeight="bold" color="white">
            Special Projects Team
          </Text>
          <Text fontSize="lg" fontWeight="bold" color="white">
            A group dedicated to provide Indonesian students in NUS with various
            opportunities for self-expression, talent development, as well as
            skill sharing within the community.
          </Text>
        </div>
        <div className={`flex flex-col`}>
          <Camera color={`#FF3B3A`} size={48} />
          <Text fontSize="2xl" fontWeight="bold" color="white">
            Publicity Team
          </Text>
          <Text fontSize="lg" fontWeight="bold" color="white">
            A vessel of communal ideas and creativity that aims to promote a
            strong, high, and positive profile of PINUS while raising awareness
            of internal and external events happening around Singapore and
            Indonesia.
          </Text>
        </div>
        <div className={`flex flex-col`}>
          <Settings color={`#FF3B3A`} size={48} />
          <Text fontSize="2xl" fontWeight="bold" color="white">
            Technology Team
          </Text>
          <Text fontSize="lg" fontWeight="bold" color="white">
            A group of creators that build and maintain the PINUS website which
            serves as an avenue of expression & inquiry, a showcase of life in
            PINUS, and a bridge between PINUS and the world.
          </Text>
        </div>
      </div>
    </>
  );
};

export default AboutMobile;
