import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "./Header.css";

const Header = () => {
  const { myInfo } = useSelector((state) => state.user);
  return (
    <div className="mainConatiner">
      <div className="headerContainer">
        <Link className="siteLogo decoNone" to="/">
          로고미정
        </Link>
        <Link className="siteName decoNone" to="/">
          이름미정
        </Link>
        {myInfo ? (
          <Link className="go_btn decoNone" to="/info">
            내정보
          </Link>
        ) : (
          <Link className="go_btn decoNone" to="/login">
            로그인
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
