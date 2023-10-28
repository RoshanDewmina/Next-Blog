import React, { useState } from "react";
import { createPost } from "@/app/actions/publishPost"

const NewBlogForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  }
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            name="title"
          />
          <input
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <textarea
            name="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
          <button type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
};

export default NewBlogForm;
