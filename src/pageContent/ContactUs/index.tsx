import React, { useState } from "react";

import Button from "src/components/Button";
import Input from "src/components/Input";
import Text from "src/components/Text";

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
    <>
      <div className={`h-screen flex flex-row justify-center items-center`}>
        <div
          className={`max-w-4xl w-2/3 flex flex-col justify-center items-center`}
        >
          <Text variant="header">Email Us</Text>
          <Text variant="body" styles={`mt-6`}>
            Want to ask us anything? Drop us an email and we will get back to
            you as soon as we can.
          </Text>
          <div className={`w-full`}>
            <Input
              type="text"
              name="name"
              value={name || ""}
              placeholder="Your name"
              error={name === "" && "This is a required field"}
              onChange={(event) => setName(event.target.value)}
              onBlur={() => name === null && setName("")}
              style={`mt-6`}
            />
            <Input
              type="text"
              name="subject"
              value={subject || ""}
              placeholder="Subject"
              error={subject === "" && "This is a required field"}
              onChange={(event) => setSubject(event.target.value)}
              onBlur={() => subject === null && setSubject("")}
              style={`mt-6`}
            />
            <Input
              type="textarea"
              name="content"
              value={content || ""}
              placeholder="Your message"
              error={content === "" && "This is a required field"}
              onChange={(event) => setContent(event.target.value)}
              onBlur={() => content === null && setContent("")}
              style={`mt-6`}
            />
            <Button onClick={handleSubmit} style={`px-12 mt-6`}>
              Submit
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUsContent;
