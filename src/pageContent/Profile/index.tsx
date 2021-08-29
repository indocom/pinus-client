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
      setName(""); // Lazy way to trigger errror
      return;
    }
    if (!subject) {
      setSubject(""); // Lazy way to trigger errror
      return;
    }
    if (!content) {
      setContent(""); // Lazy way to trigger errror
      return;
    }

    const body =
      `Sup Amadeus,\n\n` +
      `${content}\n\n` +
      `Thank you.\n\n` +
      `Best regards,\n\n` +
      `${name}\n`;

    // Not too sure why the below needs encodeURIComponent. Think because its a URL? 
    // Oh it doesn't actually send the email just to open the email App, if any. 
    // What happens if don't have (?)
    location.href =
      `mailto:amadeusw6@gmail.com.com` +
      `&subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;
  };

  return (
    <>
      <div className="grid grid-cols-12 grid-rows-8">
        {/* Default spans 1 only */}
        <div className="col-start-2 row-start-1 col-span-4 pt-2">
          <Text variant="header">Hello, World</Text>
          <Text>Idk what to put here so sup. See you.</Text>
        </div>

        {/* Default spans 1 only */}
        <div className="col-start-8 row-start-2 col-span-5">
          <div>
            <Text variant="header">Compulsory Lorem Ipsum</Text>
          </div>
          <div>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit dolorum omnis, modi error eos commodi, quae
              perspiciatis numquam tempora eligendi alias inventore nesciunt
              totam ex asperiores temporibus sint! Numquam, quia!
            </Text>
          </div>
        </div>

        {/* Form Validation */}
        {/* TODO: Make this auto centered + figure out why row-start doesn't work */}
        <div className="col-start-4 row-start-4 col-span-6 pt-5 text-center">
          <Text variant="header">Mail me, Maybe?</Text>
          <div className="space-y-3">
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
