import Text from "src/components/Text";
import Button from "src/components/Button";
import Input from "src/components/Input";
import { useState } from "react";

const ProfileContent: React.FC<Record<string, never>> = () => {
  const [name, setName] = useState<string>(undefined);
  const [subject, setSubject] = useState<string>(undefined);
  const [content, setContent] = useState<string>(undefined);

  const handleSubmit = (event: React.MouseEvent) => {
    event.preventDefault();

    if (!name) {
      setName("");
      return;
    }
    if (!subject) {
      setSubject("");
      return;
    }
    if (!content) {
      setContent("");
      return;
    }

    const body =
      `Hello,\n` +
      `${content}\n\n` +
      `Thank you.\n\n` +
      `Yours sincerely,\n` +
      `${name}\n`;

    location.href =
      `mailto:alissayarmantho1@gmail.com` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;
  };

  return (
    <>
      <div className="grid grid-cols-12 grid-rows-8">
        <div className="col-start-4 row-start-4 col-span-6 pt-5 text-center">
          <Text variant="header">Please contact me if you need anything</Text>
          <div className="space-y-3 p-5">
            <Input
              type="text"
              name="name"
              value={name || ""}
              placeholder="Your name"
              error={name === "" && "This is a required field"}
              onChange={(event) => setName(event.target.value)}
            />
            <Input
              type="text"
              name="subject"
              value={subject || ""}
              placeholder="Subject"
              error={subject === "" && "This is a required field"}
              onChange={(event) => setSubject(event.target.value)}
            />
            <Input
              type="textarea"
              name="content"
              value={content || ""}
              placeholder="Your message"
              error={content === "" && "This is a required field"}
              onChange={(event) => setContent(event.target.value)}
            />
            <Button onClick={handleSubmit}>Submit</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileContent;
