import AdminLayout from "src/components/Admin/AdminLayout";
import Input from "src/components/Input";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import Button from "src/components/Button";
import Text from "src/components/Text";
import { EditorState, convertToRaw, ContentState } from "draft-js";
const DraftJSInput = dynamic(() => import("src/components/DraftJSInput"), {
  ssr: false,
});

const CreatePost: React.FC = () => {
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [title, setTitle] = useState("");
  const [anonymous, setAnonymous] = useState("false");

  const [descState, setDescState] = React.useState(() =>
    EditorState.createEmpty()
  );

  const [bodyState, setBodyState] = React.useState(() =>
    EditorState.createEmpty()
  );

  const onChangeAnonymous = (event) => {
    setAnonymous(event.target.value);
  };

  const onChangeCategory = (event) => {
    setCategory(event.target.value);
  };

  const onChangeImage = () => {
    // TODO : convert the image into dataURI of base64
    // setCoverImage(URL.createObjectURL(event.target.value));
  };

  const handleSubmit = (event: React.MouseEvent) => {
    event.preventDefault();

    const descBlock = convertToRaw(descState.getCurrentContent()).blocks;
    const desc = descBlock
      .map((block) => (!block.text.trim() && "\n") || block.text)
      .join("\n");

    const bodyBlock = convertToRaw(bodyState.getCurrentContent()).blocks;
    const body = bodyBlock
      .map((block) => (!block.text.trim() && "\n") || block.text)
      .join("\n");

    //error
    if (!author || !body || !desc || !category || !coverImage) {
      return;
    }

    // refresh
    setAuthor("");
    setCoverImage("");

    const newBodyState = EditorState.push(
      bodyState,
      ContentState.createFromText("")
    );
    setBodyState({ newBodyState });

    const newDescState = EditorState.push(
      descState,
      ContentState.createFromText("")
    );
    setDescState({ newDescState });

    const payload = {
      authorName: author,
      title: title,
      anonymous: anonymous,
      imageURL: coverImage,
      desc: desc,
      body: body,
    };

    // TODO : integrate with backend
  };

  return (
    <AdminLayout>
      <div className={`flex flex-col align-center`}>
        <div>
          <div
            className={`border-b-2 p-4 border-black text-3xl font-extrabold mb-4 text-center lg-min:text-4xl`}
          >
            [ak.sa.ra]
          </div>
          <Text
            variant="header-alt"
            styles={`text-center font-extrabold mb-4 lg-min:text-xl`}
          >
            We want to hear your stories!
          </Text>
          <div className={"lg-min:text-xl text-center"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis diam
            lectus, porttitor id velit eget, volutpat feugiat augue. Etiam et
            ligula tortor. Suspendisse nibh turpis.
          </div>
        </div>
        <div
          className={`self-center flex flex-col align-center justify-center max-w-5xl mb-20 mt-8`}
        >
          <div>
            <b>Name</b> (required)
          </div>
          <Input
            type="text"
            name="author"
            value={author || ""}
            placeholder="Your name"
            error={author === "" && "This is a required field"}
            onChange={(event) => setAuthor(event.target.value)}
            onBlur={() => author === "" && setAuthor("")}
          />
          <div className={`mt-4`}>
            <b>Title</b> (required)
          </div>
          <Input
            type="text"
            name="title"
            value={title || ""}
            placeholder="Your name"
            error={title === "" && "This is a required field"}
            onChange={(event) => setTitle(event.target.value)}
            onBlur={() => title === "" && setTitle("")}
          />
          <div className={`mt-4`}>
            <b>Post Anonymously</b> (required)
          </div>
          <div
            className={`flex flex-col justify-start`}
            onChange={onChangeAnonymous}
          >
            <div>
              <input type="radio" id="Manusia" value="true" name="anonymous" />
              <label> True</label>
            </div>
            <div>
              <input
                type="radio"
                id="false"
                value="false"
                name="anonymous"
                checked
              />
              <label> False</label>
            </div>
          </div>
          <div className={`mt-4`}>
            <b>Category</b> (required)
          </div>
          <div
            className={`flex flex-col justify-start`}
            onChange={onChangeCategory}
          >
            <div>
              <input
                type="radio"
                id="Manusia"
                value="Manusia"
                name="Category"
              />
              <label> Manusia</label>
            </div>
            <div>
              <input type="radio" id="Opini" value="Opini" name="Category" />
              <label> Opini</label>
            </div>
            <div>
              <input
                type="radio"
                id="Modulus"
                value="Modulus"
                name="Category"
              />
              <label> Modulus</label>
            </div>
          </div>
          <div className={`mt-4`}>
            <b>Write the Description Here!</b> (required)
          </div>
          <DraftJSInput editorState={descState} setEditorState={setDescState} />
          <div className={`mt-4`}>
            <b>Write the Body Here!</b> (required)
          </div>
          <DraftJSInput editorState={bodyState} setEditorState={setBodyState} />
          <div className={`mt-4`}>
            <b>Upload Your Cover Image!</b> (required)
          </div>
          <input type="file" name="myImage" onChange={onChangeImage} />
          <div className={`mt-8 place-self-center`}>
            <Button variant="secondary" onClick={handleSubmit}>
              Submit
            </Button>
          </div>
          <div className={`mt-8 text-center`}>
            <i>
              For further enquiries, please contact us at aksarapinus@gmail.com
            </i>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default CreatePost;
