import React from "react";
import { useSelector } from "react-redux";
import BottomMenu from "./BottomMenu";

import "./PostLink.css";

const Post = () => {
  const { postList } = useSelector((state) => state.post);

  const test = () => {
    const result = [];
    for (let i = 0; i < 20; i++) {
      result.push(
        <div className="postContainer">
          <span className="postTitle">제목{i}</span>
          <span>댓글수</span>
        </div>
      );
    }
    return result;
  };
  return (
    <>
      <section className="postSection">
        {test()}
        <BottomMenu />
      </section>
    </>
  );
};

export default Post;
