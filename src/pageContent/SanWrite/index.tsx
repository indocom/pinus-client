import React, { useState } from "react";

import { createContentAndLink } from "src/utils/contentful/kudo";

import { Text, Button, Input, TextArea } from "pinus-ui-library";

const SanWriteContent = ({
  setIsShown,
  setSubmit,
  name,
  isLoading,
  setLoading,
}) => {
  // User inputs
  const recipient = name;
  const [writer, setWriter] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [image, setImage] = useState<File>();
  const [preview, setPreview] = React.useState(null);
  // Internal states
  const [message, setMessage] = useState<string>("");

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
      setTimeout(() => setIsShown(false), 2000);
    } else {
      setMessage("All fields must be filled in");
    }
    setLoading(false);
  }

  return (
    <div className={`flex flex-col items-center w-95vw`}>
      <p>&nbsp;</p>
      <Text fontSize="xl"> Write your wishes for {recipient} </Text>

      <p>&nbsp;</p>
      <Text fontSize="xl"> Your message </Text>
      <div style={{
          opacity: 0,
          pointerEvents: isLoading ? "none" : "initial",
          display:"contents"
        }}>
          <TextArea
            value={content || ""}
            placeholder="Your message"
            onChange={(event) => setContent(event.target.value)}
          />
      </div>
      
      <p>&nbsp;</p>
      <Text fontSize="xl"> Your name </Text>
      <div style={{
          opacity: isLoading ? 0.1 : 1,
          pointerEvents: isLoading ? "none" : "initial",
          display:"contents"}}>
        <Input
          value={writer || ""}
          placeholder="Your name"
          onChange={(event) => setWriter(event.target.value)}
        />
      </div>
      
      <p>&nbsp;</p>
      <Text fontSize="xl"> Picture (optional) </Text>
      <img src={preview} alt={preview} />
      <form
        action="/api/images"
        method="post"
        className={`mx-5 w-3/4 lg-min:w-1/3 xl-min:w-1/4`}
      >
        <input
          type="file"
          accept="image/*"
          onChange={(event) => {
            const files = event.target.files;

            if (files.length !== 1) {
              setImage(null);
              setPreview(null);
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
            setMessage("");
            setImage(file);
            previewFile(file);
          }}
        />
      </form>
      <p>&nbsp;</p>
      <Button
        onClick={handleSubmit}
        label="Submit"
        variant="secondary"
        loadingLabel="Submitting..."
        isLoading={isLoading}
        fontSize="xl"
      />
      <Text color="red">{message}</Text>
    </div>
  );
};

export default SanWriteContent;
