import React, { useState } from "react";

<<<<<<< HEAD
import { getPersons, createAndLink } from "src/utils/contentful/kudo";

import { Dropdown, Text, Button, Input, TextArea } from "pinus-ui-library";

const SanWriteContent: React.FC = () => {
  const [persons, setPersons] = useState<Array<string>>();

  const [recipient, setRecipient] = useState<string>("");
  const [writer, setWriter] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [image, setImage] = useState<File>();

  const [message, setMessage] = useState<string>("");

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
    if (recipient && writer && content && image) {
      await createAndLink(writer, recipient, content, image);
      setMessage("Message successfully posted");
    } else {
      setMessage("All fields must be filled in");
    }
=======
import { createContentAndLink } from "src/utils/contentful/kudo";

import { Text, Button, Input, TextArea } from "pinus-ui-library";

const SanWriteContent = ({ setIsShown, setSubmit, name }) => {
  // User inputs
  const recipient = name;
  const [writer, setWriter] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [image, setImage] = useState<File>();
  const [preview, setPreview] = React.useState(null);
  // Internal states
  const [message, setMessage] = useState<string>("");
  const [isLoading, setLoading] = useState<boolean>(false);

  function previewFile(file) {
    const reader = new FileReader();
    console.debug(file);
    reader.addEventListener(
      "load",
      function () {
        setPreview(reader.result);
      },
      false
    );

    if (file) {
      reader.readAsDataURL(file);
    }
  }

  async function handleSubmit() {
    setLoading(true);
    setMessage("");
    if (recipient && writer && content) {
      const asset = await createContentAndLink(
        writer,
        recipient,
        content,
        image
      );
      setMessage(
        asset == null
          ? "Message posting failed. Please report this to Simon Julian Lauw"
          : "Message successfully posted"
      );
      setSubmit(true);
      setTimeout(() => setIsShown(false), 1000);
    } else {
      setMessage("All fields must be filled in");
    }
    setLoading(false);
>>>>>>> 7cdc558b9c23f253f406f2d2fb3c10d52231ff0f
  }

  return (
    <div className={`flex flex-col items-center w-95vw`}>
      <p>&nbsp;</p>
<<<<<<< HEAD
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
=======
      <Text fontSize="xl"> Write your wishes for {recipient} </Text>

>>>>>>> 7cdc558b9c23f253f406f2d2fb3c10d52231ff0f
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
<<<<<<< HEAD
=======
      <img src={preview} alt={preview} />
>>>>>>> 7cdc558b9c23f253f406f2d2fb3c10d52231ff0f
      <form action="/api/images" method="post">
        <input
          type="file"
          accept="image/*"
          onChange={(event) => {
            const files = event.target.files;

            if (files.length !== 1) {
              setImage(null);
<<<<<<< HEAD
=======
              setPreview(null);
>>>>>>> 7cdc558b9c23f253f406f2d2fb3c10d52231ff0f
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
<<<<<<< HEAD

            setImage(file);
=======
            setMessage("");
            setImage(file);
            previewFile(file);
>>>>>>> 7cdc558b9c23f253f406f2d2fb3c10d52231ff0f
          }}
        />
      </form>
      <p>&nbsp;</p>
<<<<<<< HEAD
      <Button onClick={handleSubmit} label="Submit" variant="secondary" />
=======
      <Button
        onClick={handleSubmit}
        label="Submit"
        variant="secondary"
        loadingLabel="Submitting..."
        isLoading={isLoading}
        fontSize="xl"
      />
>>>>>>> 7cdc558b9c23f253f406f2d2fb3c10d52231ff0f
      <Text color="red">{message}</Text>
    </div>
  );
};

export default SanWriteContent;
