import React from "react";
import { Link } from "react-router-dom";

import "./TopNav.css";

const TopNav = () => {
  return (
    <nav className="mainConatiner navContainer">
      <Link className="go_btn decoNone" to="/post">
        전체
      </Link>
      <Link className="go_btn decoNone" to="/post/hot">
        인기
      </Link>
      <Link className="go_btn decoNone" to="/post/recommend">
        추천
      </Link>
      <div className="decoNone">검색</div>
    </nav>
  );
};

export default TopNav;
