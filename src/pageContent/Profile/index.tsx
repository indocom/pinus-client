import Image from "next/image";
import { ContactDetail, Content, ProfileTagLine } from "./style";
import Text from "src/components/Text";
import React, { useState } from "react";
import Input from "src/components/Input";
import Button from "src/components/Button";

const SimonProfile: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const handleSubmit = (event: React.MouseEvent) => {
    event.preventDefault();

    if (!name || !subject || !content) {
      return;
    }

    const body =
      `Hi Simon,\n\n` +
      `${content}\n\n` +
      `Thank you.\n\n` +
      `Best regards,\n\n` +
      `${name}\n`;

    window.open(
      `mailto:simonjulianl@u.nus.edu?` +
        `subject=${encodeURIComponent(subject)}` +
        `&body=${encodeURIComponent(body)}`
    );

    setContent("");
    setSubject("");
    setName("");
  };

  return (
    <div className={Content}>
      <div className={ProfileTagLine}>
        <div>
          <Image
            src="/assets/images/simon.png"
            alt="The PINUS Executive Committee"
            width={375}
            height={375}
            layout="fixed"
          />
        </div>
        <Text>
          Hello World! My name is Simon! I am a computer science sophomore at
          the National University of Singapore 🏫 who aspires to be a software
          engineer in the future! I am still in quest of finding my true passion
          🤷‍♂️! There are so many interesting stuffs that I wanna do, but yeah …
          time is limited 😥 Hopefully, after 4 years of exploration at NUS, I
          can truly commit to a cause that I can believe on! Interest Despite
          that, currently I am really interested in software engineering 👨‍💻: its
          principles, patterns and formal methodologies. But not only that,
          working as a software engineer is a really fun and exciting job where
          you can work in a team and also with various stakeholders to solve a
          challenging problem! Working in this rapidly changing IT industry also
          excites me! There are so many new and existing interesting projects
          going on such as Android Auto, blockchain, GraphQL, and the list goes
          on and on. I always believe in the principle of lifelong learning! Not
          only that, I am also planning to take specialization in database and
          distributed system. In my free time, I like watching Netflix and
          Anime. Not only that, since my high school days, I have been playing
          squash. Please feel free to contact me! Currently I am looking for a
          summer internship 2022 as a software engineer
        </Text>
      </div>
      <a href="https://simonjulianl.github.io">
        <b>Please visit : simonjulianl.github.io for full info</b>
      </a>
      <div className={ContactDetail}>
        <Input
          type="text"
          name="name"
          value={name}
          placeholder="Your name"
          error={!name && "This is a required field"}
          onChange={(event) => setName(event.target.value)}
          onBlur={() => !name && setName("")}
        />
        <Input
          type="text"
          name="subject"
          value={subject}
          placeholder="Subject"
          error={!subject && "This is a required field"}
          onChange={(event) => setSubject(event.target.value)}
          onBlur={() => !subject && setSubject("")}
        />
        <Input
          type="textarea"
          name="content"
          value={content}
          placeholder="Your message"
          error={!content && "This is a required field"}
          onChange={(event) => setContent(event.target.value)}
          onBlur={() => !content && setContent("")}
        />
        <Button onClick={handleSubmit} style={`px-12`}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default SimonProfile;
