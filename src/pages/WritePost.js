import React from "react";
import useInput from "../hooks/useInput";

import "./WritePost.css";

const WritePost = () => {
  const [postTitle, onChangePostTitle] = useInput("");
  const [postContent, onChangeContent] = useInput("");

  const sendPostForm = () => {
    console.log(`Title ${postTitle} , Content ${postContent}`);
  };

  return (
    <form action="GET" className="writePostForm">
      <input
        type="text"
        name="postTitle"
        className="postArticle postTitle"
        placeholder="제목"
        value={postTitle}
        onChange={onChangePostTitle}
      />
      <textarea
        type="textarea"
        name="postContent"
        className="postArticle postContent"
        placeholder="내용"
        value={postContent}
        onChange={onChangeContent}
      />
      <button
        type="button"
        className="postArticle sendPostForm"
        onClick={sendPostForm}
      >
        완료
      </button>
    </form>
  );
};

export default WritePost;
