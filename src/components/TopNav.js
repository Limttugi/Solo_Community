import React from "react";
import { Link } from "react-router-dom";

import "./TopNav.css";

const TopNav = () => {
  return (
    <nav className="mainConatiner">
      <ul className="navContainer">
        <Link className="go_btn decoNone" to="/latest">
          최신
        </Link>
        <Link className="go_btn decoNone" to="/hot">
          인기
        </Link>
        <Link className="go_btn decoNone" to="/recommend">
          추천
        </Link>
        <div>검색</div>
      </ul>
    </nav>
  );
};

export default TopNav;
