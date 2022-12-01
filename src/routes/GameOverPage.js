import React, { useEffect, useState } from "react";

//Style Imports
import "../components/gameOverPage/game-over-page-style.css";
import "../components/gameOverPage/game-over-page-style-media.css";

//Components Imports
import { MainBlock } from "../common";

//Constants Imports
import { gamePage } from "../constants";
import { onFetchQuestions } from "../utils/onFetchQuestions";

export const GameOverPage = () => {
  const [questionId, setQuestionId] = useState(null);
  const award = localStorage.getItem("award");

  const OnGetQuestions = async () => {
    await onFetchQuestions()
      .then((response) => response.json())
      .then((data) => setQuestionId(data?.[0]?.id))
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    OnGetQuestions();
  }, []);

  return (
    <section className={"game-over-wrapper"}>
      <MainBlock
        mainTitle={`$${award || 0} earned`}
        btnTitle={"Try again"}
        withTotalScope
        btnDisabled={!questionId}
        btnLink={`${gamePage}${questionId}`}
        onBtnClick={() => localStorage.removeItem("award")}
      />
    </section>
  );
};
