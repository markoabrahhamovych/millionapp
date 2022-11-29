import { gameOverPage, gamePage } from "../../../constants";

const onGetCurrentAwards = (list = []) => {
  return list?.length
    ? list?.find((item) => item?.currentAward === true)
    : null;
};

const onNotification = (notification, navigate, award, next_question_id) => {
  if (award) localStorage.setItem("award", award?.value);

  alert(notification);

  if (next_question_id) {
    setTimeout(() => navigate(`${gamePage}${next_question_id}`), 2000);
  } else {
    setTimeout(() => navigate(gameOverPage), 1000);
  }
};

export const onAnswer = (date, navigate, id) => {
  const { answers, next_question_id, awards } = date;

  const correctAnswer = answers?.length
    ? answers?.find((item) => item?.isTrue)
    : null;

  const award = onGetCurrentAwards(awards);
  if (correctAnswer) {
    const answer = correctAnswer?.id === id;
    // if (answer && next_question_id === 0) {
    //   onNotification(
    //     "Answer is correct congratulation you win 1 million dollars!!!",
    //     navigate,
    //     award,
    //     next_question_id
    //   );
    // } else if (answer) {
    //   onNotification(
    //     "Answer is correct congratulation!!!",
    //     navigate,
    //     award,
    //     next_question_id
    //   );
    // } else {
    //   onNotification("Answer is wrong!", navigate);
    // }
  }
};
