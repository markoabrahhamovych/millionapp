import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//Style Imports
import "../components/gamePage/game-page-style.css";
import "../components/gamePage/game-page-style-media.css";

//Components Imports
import { QuestionsList, AwardsList } from "../components/gamePage/components";

//Utils Imports
import { onFetchQuestions } from "../utils/onFetchQuestions";

export const GamePage = () => {
  const [questionsDate, setQuestionsDate] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const { id } = useParams();

  const onFetchDate = () => {
    if (id) {
      onFetchQuestions(id)
        .then((response) => response.json())
        .then((data) => setQuestionsDate(data))
        .catch((e) => console.log(e));
    }
  };

  useEffect(() => {
    onFetchDate();
  }, [id]);

  const hamburgerMenu = (
    <div
      className={`hamburger-wrapper ${openMenu && "hamburger-menu-active"}`}
      onClick={() => setOpenMenu(!openMenu)}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );

  const leftSide = (
    <div className={"left-side"}>
      <h1>{questionsDate?.question}</h1>
      <QuestionsList date={questionsDate || {}} />
    </div>
  );

  const rightSide = (
    <div className={`right-side ${openMenu && "right-side-active"} `}>
      <AwardsList list={questionsDate?.awards || []} />
    </div>
  );

  return (
    <section className={"game-page-wrapper"}>
      {hamburgerMenu}
      {leftSide}
      {rightSide}
    </section>
  );
};
