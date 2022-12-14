export const onFetchQuestions = async (id) => {
  const API_URL = "https://test-app-2423.herokuapp.com";
  const QUESTIONS_ROUTE = "/questions";
  let response = null;
  if (id) {
    response = await fetch(`${API_URL}${QUESTIONS_ROUTE}/${id}`);
  } else {
    response = await fetch(`${API_URL}${QUESTIONS_ROUTE}`);
  }
  return response;
};
