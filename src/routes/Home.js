import React, { useEffect, useState } from "react";

//Style Imports
import "../components/home/home-style.css";
import "../components/home/home-style-media.css";

//Components Imports
import { MainBlock } from "../common";
import { gamePage } from "../constants";
import { onFetchQuestions } from "../utils/onFetchQuestions";

export const Home = () => {
  const [questionId, setQuestionId] = useState(null);

  const OnGetQuestions = async () => {
    await onFetchQuestions()
      .then((response) => response.json())
      .then((data) => setQuestionId(data?.[0]?.id))
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    OnGetQuestions();
  }, []);

  const triangleBlock = <div id={"triangle"}></div>;

  const titleText = (
    <>
      Who wants to be <br />a millionaire?
    </>
  );

  return (
    <section className={"home-wrapper"}>
      {triangleBlock}
      <MainBlock
        btnDisabled={!questionId}
        mainTitle={titleText}
        btnTitle={"Start"}
        btnLink={`${gamePage}${questionId}`}
      />
    </section>
  );
};
