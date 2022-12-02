import React, { useEffect, useState } from "react";

//Style Imports
import "./questionList-style.css";
import "./questionList-style-media.css";

//Components Imports
import { QuestionItem } from "./QuestionItem";
import { useNavigate } from "react-router-dom";

//Utils Imports
import { onAnswer } from "../../utils/onAswer";

export const QuestionsList = ({ date }) => {
  const [questions, setQuestions] = useState(date?.answers || []);
  const navigate = useNavigate();

  const onCheckAnswer = (id) => {
    if (date?.answers) {
      const updateList = date?.answers?.map((item) => ({
        ...item,
        isTrueAnswer: item?.isTrue
          ? "question-item-correct"
          : "question-item-wrong",
      }));
      setQuestions(updateList);
      onAnswer(date, navigate, id);
    }
  };

  useEffect(() => {
    setQuestions(date?.answers);
    return () => {
      setQuestions([]);
    };
  }, [date]);

  const questionsList = questions?.length
    ? questions?.map((item) => (
        <QuestionItem item={item} key={item?.id} onAnswer={onCheckAnswer} />
      ))
    : null;

  return <div className={"questions-list-wrapper"}>{questionsList}</div>;
};
