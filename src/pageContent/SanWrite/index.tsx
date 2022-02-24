import React, { useState } from "react";

import { getPersons, createAndLink } from "src/utils/contentful/kudo";

import { Dropdown, Text, Button, Input, TextArea } from "pinus-ui-library";

const SanWriteContent: React.FC = () => {
  // Fetched data from contentful
  const [persons, setPersons] = useState<Array<string>>();
  
  // User inputs
  const [recipient, setRecipient] = useState<string>("");
  const [writer, setWriter] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [image, setImage] = useState<File>();

  // Internal states
  const [message, setMessage] = useState<string>("");
  const [isDisabled, setDisabled] = useState<boolean>(false);

  React.useEffect(() => {
    async function getData() {
      const res = await getPersons();

      setPersons(res);
    }
    getData();
  }, []);

  type entry = {
    label: string;
    value: string;
  };

  async function handleSubmit() {
    setDisabled(true);
    setMessage("");
    if (recipient && writer && content) {
      let asset = await createAndLink(writer, recipient, content, image);
      setMessage(asset == null ? "Message posting failed. Please report this to Simon Julian Lauw" : "Message successfully posted");
    } else {
      setMessage("All fields must be filled in");
    }
    setDisabled(false);
  }

  return (
    <div className={`flex flex-col items-center w-95vw`}>
      <p>&nbsp;</p>
      <Text fontSize="xl"> Recipient </Text>
      <Dropdown
        onChange={(option: entry) => {
          option && setRecipient(option.label);
        }}
        isMulti={false}
        options={
          persons &&
          persons.map((entry) => {
            return {
              label: entry,
              value: entry,
            };
          })
        }
        placeholder="Recipient"
      />
      <p>&nbsp;</p>
      <Text fontSize="xl"> Your message </Text>
      <TextArea
        value={content || ""}
        placeholder="Your message"
        onChange={(event) => setContent(event.target.value)}
      />
      <p>&nbsp;</p>
      <Text fontSize="xl"> Your name </Text>
      <Input
        value={writer || ""}
        placeholder="Your name"
        onChange={(event) => setWriter(event.target.value)}
      />
      <p>&nbsp;</p>
      <Text fontSize="xl"> Picture (optional) </Text>
      <form action="/api/images" method="post">
        <input
          type="file"
          accept="image/*"
          onChange={(event) => {
            const files = event.target.files;

            if (files.length !== 1) {
              setImage(null);
              setMessage(
                files.length < 1
                  ? "Did you not upload anything??"
                  : "Did you upload more than one??"
              );
              return;
            }

            const file = files[0];
            if (file.type.split("/")[0] !== "image") {
              setImage(null);
              setMessage("Please upload only pictures");
              return;
            }

            setImage(file);
          }}
        />
      </form>
      <p>&nbsp;</p>
      <Button onClick={handleSubmit} label="Submit" variant="secondary" disabled={isDisabled}/>
      <Text color="red">{message}</Text>
    </div>
  );
};

export default SanWriteContent;
