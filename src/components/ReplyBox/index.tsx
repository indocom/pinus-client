import React, { useState } from "react";
import Input from "src/components/Input";
import Button from "src/components/Button";

const ReplyBox = () => {
  const [comment, setComment] = useState<string | null>(null);
  const handleSubmit = (event: React.MouseEvent) => {
    event.preventDefault();

    if (comment === null) {
      setComment("");
    }

    if (!comment) {
      return;
    }

    /*WILL BE UPDATED LATER*/
  };
  return (
    <div className={`w-4/5`}>
      <div className={`mt-8 mb-8 text-2xl lg-min:text-3xl font-bold`}>
        Leave a Reply
      </div>
      <div>
        <Input
          type="text"
          name="comment"
          value={comment || ""}
          placeholder="Enter your comment here..."
          error={comment === "" && "This is a required field"}
          onChange={(event) => {
            event.preventDefault();
            setComment(event.target.value);
          }}
          onBlur={() => comment === null && setComment("")}
        />
      </div>
      <div className={`mt-4 flex flex-row justify-end`}>
        <Button variant="secondary" onClick={handleSubmit}>
          Post
        </Button>
      </div>
    </div>
  );
};

export default ReplyBox;
