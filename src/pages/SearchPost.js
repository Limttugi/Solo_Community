import React from "react";

import "./SearchPost.css";

const onKeyPress = (e) => {
  if (e.key === "Enter") {
    console.log("enter");
  }
};

const SearchPost = () => {
  return (
    <div className="searchPostContainer">
      <input
        type="text"
        className="inputSearch"
        placeholder="검색어를 입력하세요"
        onKeyPress={onKeyPress}
      />
      <div>입력 후 엔터를 눌러주세요</div>
    </div>
  );
};

export default SearchPost;
