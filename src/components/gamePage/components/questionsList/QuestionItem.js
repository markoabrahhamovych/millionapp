import React from "react";

//Styles Imports
import "./questionList-style.css";

export const QuestionItem = ({ item, onAnswer }) => {
  const { answer, isTrueAnswer, id, variant } = item;

  return (
    <div
      className={`question-item ${isTrueAnswer ?? null}`}
      onClick={() => onAnswer(id)}
    >
      <div className={"question-item-wrapper"}>
        <div className={"question-item-left"}></div>
        <span>{variant}</span>
        <h4>{answer}</h4>
        <div className={"question-item-right"}></div>
      </div>
    </div>
  );
};
