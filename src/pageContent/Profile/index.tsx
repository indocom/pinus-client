import React, { useState } from "react";
import Image from "next/image";
import Button from "src/components/Button";
import Input from "src/components/Input";
import Text from "src/components/Text";
import * as S from "./styles";

const profileContent: React.FC = () => {
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
        `Dear Winston,\n\n` +
        `${content}\n\n` +
        `Thank you.\n\n` +
        `Best regards,\n\n` +
        `${name}\n`;
  
      location.href =
        `mailto:winstoncahya90@gmail.com` +
        `?cc=president.pinusonline@gmail.com` +
        `&subject=${encodeURIComponent(subject)}` +
        `&body=${encodeURIComponent(body)}`;
    };
  
    return (
<>
    <div className={`flex flex-col items-center overflow-hidden`}>
        <div>
            <Image src="/assets/images/winston.jpeg" alt="Supposed to be my image" 
                width={250} height={300}/>
        </div>
        <div>
            <Text> Hello This is my Profile !</Text>
        </div>
        
        <div className={S.EmailUsSection}>
            <div className={`max-w-4xl w-2/3 lg:w-4/5 flex flex-col space-y-5`}>
                <p className={S.HeaderText}>Contact Me</p>
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
  
export default profileContent;