import React from "react";

import "./PagingBtn.css";

const onClickNext = () => {};
const onClickPrev = () => {};

const PagingBtn = () => {
  return (
    <div className="btnContainer">
      <div className="prevBtn bottomBtn" onClick={onClickPrev}>
        이전
      </div>
      <div className="nextBtn bottomBtn" onClick={onClickNext}>
        다음
      </div>
    </div>
  );
};

export default PagingBtn;
