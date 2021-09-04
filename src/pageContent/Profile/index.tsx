import Text from "src/components/Text";
import Image from "next/image";
import Button from "src/components/Button";
import Input from "src/components/Input";
import { useState } from "react";

const ProfileContent: React.FC<Record<string, never>> = () => {
  const [name, setName] = useState<string | undefined>(undefined);
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

    location.href =
      `mailto:amadeusw6@gmail.com.com` +
      `&subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;
  };

  // Agak ngestuck ngecenter image nya biar g ngeffect hello, world nya
  return (
    <div className="flex flex-col sm:items-center">
      <div className="items-center">
        <Image
          src="/assets/backgrounds/profileAmadeus.jpeg"
          alt="Sup"
          width={250}
          height={300}
        />
      </div>
      {/* Default spans 1 only */}
      <div className="p-2 text-left px-5 sm:text-center">
        <div className="text-left sm:text-center md:text-center lg:text-center">
          <Text variant="header">Hello, World</Text>
        </div>
        <div>
          <Text>Idk what to put here so sup. See you.</Text>
        </div>
      </div>

      {/* Default spans 1 only */}
      <div className="p-2 text-right sm:text-center">
        <div className="text-right sm:text-center">
          <Text variant="header">Compulsory Lorem Ipsum</Text>
        </div>
        <div>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit dolorum omnis, modi error eos commodi, quae
            perspiciatis numquam tempora eligendi alias inventore nesciunt totam
            ex asperiores temporibus sint! Numquam, quia!
          </Text>
        </div>
      </div>

      {/* Form Validation */}
      <div className="min-h-screen max-h-full w-screen flex flex-row justify-center items-center py-8 px-3">
        <div className="max-w-4xl w-2/3 lg:w-4/5 flex flex-col space-y-5 text-center">
          <Text variant="header">Mail me, Maybe?</Text>
          <div className="w-full space-y-3">
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
    </div>
  );
};

export default ProfileContent;
