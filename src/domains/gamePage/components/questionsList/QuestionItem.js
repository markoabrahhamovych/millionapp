import React from "react";

//Styles Imports
import "./questionList-style.css";

export const QuestionItem = ({ item, onAnswer }) => {
  const { answer, isTrueAnswer, id } = item;

  return (
    <div
      className={`question-item ${isTrueAnswer ?? null}`}
      onClick={() => onAnswer(id)}
    >
      <div className={"question-item-wrapper"}>
        <div className={"question-item-left"}></div>
        <span>{answer}</span>
        <div className={"question-item-right"}></div>
      </div>
    </div>
  );
};
