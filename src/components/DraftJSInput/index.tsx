import React, { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "draft-js/dist/Draft.css";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

interface OwnProps {
  editorState: any;
  setEditorState: any;
}

const DraftJSInput: React.FC<OwnProps> = ({ editorState, setEditorState }) => {
  const [editor, setEditor] = useState<boolean>(false);
  useEffect(() => {
    setEditor(true);
  });

  return (
    <div
      className={`border-solid border-2  border-black rounded-lg resize-none focus:outline-none focus:ring min-h-80`}
    >
      {editor ? (
        <Editor
          editorState={editorState}
          wrapperClassName="rich-editor"
          editorClassName="draftjseditor"
          placeholder="The message goes here..."
          onEditorStateChange={setEditorState}
        />
      ) : null}
    </div>
  );
};

export default DraftJSInput;
