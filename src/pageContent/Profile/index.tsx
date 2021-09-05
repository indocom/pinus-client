import React, { useState } from "react";

import Button from "src/components/Button";
import Input from "src/components/Input";
import Text from "src/components/Text";
import Image from "next/image";

import * as S from "./styles";

const ContactUsContent: React.FC = () => {
  const [name, setName] = useState<string | null>(null);
  const [subject, setSubject] = useState<string | null>(null);
  const [content, setContent] = useState<string | null>(null);

  const handleSubmit = (event: React.MouseEvent) => {
    event.preventDefault();

    if (name === null) {
      setName("");
    }

    if (subject === null) {
      setSubject("");
    }

    if (content === null) {
      setContent("");
    }

    if (!name || !subject || !content) {
      return;
    }

    const body =
      `Dear Bernard,\n\n` +
      `${content}\n\n` +
      `Thank you.\n\n` +
      `Best regards,\n\n` +
      `${name}\n`;

    location.href =
      `mailto:bernardsw99@gmail.com` +
      `?cc=krishna.bernardus@gmail.com` +
      `&subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className={`flex flex-col items-center overflow-hidden`}>
      <div>
        <div className={`container h-4`} />
        <div className={`flex justify-center gap-4`}>
          <div className={`container w-4`} />
          <div>
            <Image
              src="/assets/images/bernard.jpg"
              alt="The PINUS Executive Committee"
              width={829.5}
              height={950}
            />
          </div>
          <Text>
            Yeboi I'm Bernard. I legit am not sure of what I am doing now I'm
            just trying to make things work. Wish me luck and @Simon don't kill
            me please.
          </Text>
          <div className={`container w-4`} />
        </div>
      </div>
      <div className={S.EmailUsSection}>
        <div className={`max-w-4xl w-2/3 lg:w-4/5 flex flex-col space-y-5`}>
          <p className={S.HeaderText}>Email Me</p>
          <p className={S.BodyText}>
            Want to ask me anything? Drop me an email and I will get back to you
            as soon as I can.
          </p>
          <div className={`w-full space-y-3`}>
            <Input
              type="text"
              name="name"
              value={name || ""}
              placeholder="Your name"
              error={name === "" && "This is a required field"}
              onChange={(event) => setName(event.target.value)}
              onBlur={() => name === null && setName("")}
            />
            <Input
              type="text"
              name="subject"
              value={subject || ""}
              placeholder="Subject"
              error={subject === "" && "This is a required field"}
              onChange={(event) => setSubject(event.target.value)}
              onBlur={() => subject === null && setSubject("")}
            />
            <Input
              type="textarea"
              name="content"
              value={content || ""}
              placeholder="Your message"
              error={content === "" && "This is a required field"}
              onChange={(event) => setContent(event.target.value)}
              onBlur={() => content === null && setContent("")}
            />
            <Button onClick={handleSubmit} style={`px-12`}>
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsContent;
