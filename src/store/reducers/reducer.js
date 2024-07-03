import { questions } from "../../services/dataSet";
import { QuestionTypes } from "../type";
const initialState = {
  questionList: questions,
};
const questionReducer = (state = initialState, action) => {
  switch (action.type) {
    case QuestionTypes.SET_QUESTION_LIST:
      return {
        ...state,
        questionList: action.payload,
      };

    default:
      return state;
  }
};

export default questionReducer;
