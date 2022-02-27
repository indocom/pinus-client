import React, { useState } from "react";

import { Text, Button, Input, TextArea } from "pinus-ui-library";

import * as S from "./styles";

const ContactUsContent: React.FC = () => {
  const [name, setName] = useState<string | null>(null);
  const [subject, setSubject] = useState<string | null>(null);
  const [content, setContent] = useState<string | null>(null);

  const handleSubmit = () => {
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
      `Dear PINUS Committee,\n\n` +
      `${content}\n\n` +
      `Thank you.\n\n` +
      `Best regards,\n\n` +
      `${name}\n`;

    location.href =
      `mailto:pna.pinusonline@gmail.com` +
      `?cc=president.pinusonline@gmail.com` +
      `&subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className={`flex flex-col items-center overflow-hidden`}>
      <div className={S.EmailUsSection}>
        <div className={`max-w-4xl w-2/3 lg:w-4/5 flex flex-col space-y-5`}>
          <p className={S.HeaderText}>Email Us</p>
          <p className={S.BodyText}>
            Want to ask us anything? Drop us an email and we will get back to
            you as soon as we can.
          </p>
          <div className={`w-full space-y-3`}>
            <Input
              type="text"
              name="name"
              value={name || ""}
              placeholder="Your name"
              onChange={(event) => setName(event.target.value)}
              onBlur={() => name === null && setName("")}
              isRequired={true}
            />
            {name === "" && <Text color="red"> This is a required field </Text>}
            <Input
              type="text"
              name="subject"
              value={subject || ""}
              placeholder="Subject"
              onChange={(event) => setSubject(event.target.value)}
              onBlur={() => subject === null && setSubject("")}
              isRequired={true}
            />
            {subject === "" && (
              <Text color="red"> This is a required field </Text>
            )}
            <TextArea
              name="content"
              value={content || ""}
              placeholder="Your message"
              onChange={(event) => setContent(event.target.value)}
              onBlur={() => content === null && setContent("")}
              numRows={7}
              isRequired={true}
            />
            {content === "" && (
              <Text color="red"> This is a required field </Text>
            )}
            <Button onClick={handleSubmit} label="Submit" variant="secondary" fontSize="lg"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsContent;
