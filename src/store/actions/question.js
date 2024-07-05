import { QuestionTypes } from "../type";
export const setQuestionList = (payload) => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: QuestionTypes.SET_QUESTION_LIST,
        payload: payload,
      });
    } catch (error) {
      console.error("Error list:", error);
    }
  };
};

export const resetData = (payload) => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: QuestionTypes.RESET_DATA,
        payload: payload,
      });
    } catch (error) {
      console.error("Error list:", error);
    }
  };
};

export const ACTIONS = {
  setQuestionList,
  resetData,
};
