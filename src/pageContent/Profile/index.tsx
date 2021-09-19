import React, { useState } from "react";
import Image from "next/image";
import Button from "src/components/Button";
import Input from "src/components/Input";
import Text from "src/components/Text";
import * as S from "./styles";

const ProfileContent: React.FC<Record<string, never>> = () => {
    const [name, setName] = useState<string | null>(null);
    const [subject, setSubject] = useState<string | null>(null);
    const [content, setContent] = useState<string | null>(null);

    const handleSubmit = (event: React.MouseEvent) => {
      event.preventDefault();

      let openerSubject: string = "PINUS Profile AMA: ";

      if (name === null || name === "") {
        setName("Anonymous");
      }

      if (subject === null || name === "") {
        setSubject("Default");
      }

      if (content === null || name === "") {
        setContent("Blank body");
      }

      if (!name && !subject && !content) {
        return;
      }

      let finalSubject: string = openerSubject + subject;

      const body =
        `Hello,\n\n` +
        `${content}\n\n` +
        `What's up?.\n\n` +
        `Best regards,\n\n` +
        `${name}\n`;

      location.href =
        `mailto:albersutz123@gmail.com` +
        `?cc=president.pinusonline@gmail.com` +
        `&subject=${encodeURIComponent(finalSubject)}` +
        `&body=${encodeURIComponent(body)}`;
    };

    return (
<>
    <div className={S.Content}>
        <div>
            <Image src="/assets/images/profilejohn.jpg" 
                    alt="My profile picture" 
                    width={300} height={300}
                    className="transform hover:scale-125 transition duration-2000 ease-out"/>
        </div>
        <div className={`font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-blue-500`}>
            <Text> Hello! Welcome to my profile page! My name is John and I'm a year 1 student at NUS majoring in Computer Science!
            </Text>
        </div>

        <div className={S.EmailUsSection}>
            <div className={`max-w-4xl w-2/3 lg:w-4/5 flex flex-col space-y-5`}>
                <p className={S.HeaderText}>Feel Free to Contact Me</p>
                <p className={S.BodyText}>
                        Ask me anything !
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
</>
    )
  };
  
  export default ProfileContent;
