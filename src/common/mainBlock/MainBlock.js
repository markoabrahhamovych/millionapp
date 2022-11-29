import React from "react";

// Style Imports
import "./main-block-style.css";
import "./main-block-style-media.css";

// Components Imports
import Button from "../button/Button";

//Img Imports
import LikeImg from "../../assets/like-img.svg";

export const MainBlock = ({
  mainTitle = "",
  btnTitle = "",
  btnLink = "/",
  withTotalScope,
  totalScopeTitle = "Total score:",
  btnDisabled,
  onBtnClick,
}) => {
  const imgBlock = (
    <img src={LikeImg} alt={"like-img"} className={"like-img"} />
  );

  const blockStart = (
    <div className={"home-main-block-start-side"}>
      {withTotalScope ? <h3>{totalScopeTitle}</h3> : null}
      <h1 className={"first-title"}>{mainTitle}</h1>
      <Button
        name={btnTitle}
        linkTo={btnLink}
        disabled={btnDisabled}
        onClick={onBtnClick}
      />
    </div>
  );

  return (
    <div className={"home-main-block"}>
      {imgBlock}
      {blockStart}
    </div>
  );
};
