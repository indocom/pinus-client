import Text from "src/components/Text";
import React, { useState } from "react";
import Button from "src/components/Button";
import Input from "src/components/Input";

import * as S from "./styles";

const ProfileContent: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const handleSubmit = (event: React.MouseEvent) => {
    if (!name || !subject || !content) {
      return;
    }

    const body =
      `Hi Nixon,\n\n` +
      `${content}\n\n` +
      `Thank you.\n\n` +
      `Best regards,\n\n` +
      `${name}\n`;

    window.open(
      `mailto:nixon@gmail.com?` +
        `subject=${encodeURIComponent(subject)}` +
        `&body=${encodeURIComponent(body)}`
    );

    setContent("");
    setSubject("");
    setName("");
  };
  return (
    <>
      <div className={`flex flex-col items-center overflow-hidden`}>
        {/* Default spans 1 only */}
        <div className={`max-w-4xl w-2/3 lg:w-4/5 flex flex-col space-y-5`}>
          <Text variant="header">Perkenalkan</Text>
          <Text>
            Bos gw namanya Simon. + makasi Winston udh ngajarin gw bikin ini.
          </Text>
        </div>
      </div>

      <div className={`flex flex-col items-center overflow-hidden`}>
        <div className={S.EmailUsSection}>
          <div className={`max-w-4xl w-2/3 lg:w-4/5 flex flex-col space-y-5`}>
            <p className={S.HeaderText}>Email Me</p>
            <p className={S.BodyText}>
              Want to ask me anything? Drop me an email and my boss will get
              back to you as soon as he can.
            </p>
            <div className={`w-full space-y-3`}>
              <Input
                type="text"
                name="name"
                value={name || ""}
                placeholder="Your name"
                onChange={(event) => setName(event.target.value)}
              />
              <Input
                type="text"
                name="subject"
                value={subject || ""}
                placeholder="Subject"
                onChange={(event) => setSubject(event.target.value)}
              />
              <Input
                type="textarea"
                name="content"
                value={content || ""}
                placeholder="Your message"
                onChange={(event) => setContent(event.target.value)}
              />
              <Button onClick={handleSubmit} style={`px-12`}>
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProfileContent;
