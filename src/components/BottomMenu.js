import React from "react";

import "./BottomMenu.css";

const onClickNext = () => {};
const onClickPrev = () => {};

const BottomMenu = () => {
  return (
    <>
      <div className="bottomContainer">
        <div className="prevBtn bottomBtn" onClick={onClickPrev}>
          이전
        </div>
        <div className="nextBtn bottomBtn" onClick={onClickNext}>
          다음
        </div>
      </div>
    </>
  );
};

export default BottomMenu;
