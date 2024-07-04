import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Assesment from "../path/to/Assesment";
import { NavigationContainer } from "@react-navigation/native";
import { ACTIONS } from "../../../store/actions/question";

jest.mock("@react-navigation/native", () => {
  const actualNav = jest.requireActual("@react-navigation/native");
  return {
    ...actualNav,
    useNavigation: () => ({
      replace: jest.fn(),
    }),
  };
});

describe("Assesment Component", () => {
  const mockStore = configureStore([]);
  let store;
  let navigation;

  beforeEach(() => {
    store = mockStore({
      state: {
        reducer: {
          questionList: [
            {
              id: 1,
              question: "How would you describe your investment knowledge?",
              options: [
                { option: "Novice", score: 1, isSelected: false },
                { option: "Intermediate", score: 2, isSelected: false },
                { option: "Advanced", score: 3, isSelected: false },
              ],
            },
            {
              id: 2,
              question: "Investment Duration",
              options: [
                {
                  option: "Short-term (less than 1 year)",
                  score: 1,
                  isSelected: false,
                },
                {
                  option: "Medium-term (1-5 years)",
                  score: 2,
                  isSelected: false,
                },
                {
                  option: "Long-term (more than 5 years)",
                  score: 3,
                  isSelected: false,
                },
              ],
            },
          ],
        },
      },
    });

    navigation = require("@react-navigation/native").useNavigation();
  });

  test("renders correctly", () => {
    const { getByText } = render(
      <Provider store={store}>
        <NavigationContainer>
          <Assesment navigation={navigation} />
        </NavigationContainer>
      </Provider>
    );

    expect(
      getByText("Q 1 : How would you describe your investment knowledge?")
    ).toBeTruthy();
  });

  test("updates selected option and dispatches action", () => {
    const { getByText } = render(
      <Provider store={store}>
        <NavigationContainer>
          <Assesment navigation={navigation} />
        </NavigationContainer>
      </Provider>
    );

    const noviceOption = getByText("Novice");
    fireEvent.press(noviceOption);

    const actions = store.getActions();
    expect(actions).toEqual([
      {
        type: ACTIONS.setQuestionList.type,
        payload: expect.anything(),
      },
    ]);
  });

  test("navigates correctly on clicking Next and Previous buttons", () => {
    const { getByText } = render(
      <Provider store={store}>
        <NavigationContainer>
          <Assesment navigation={navigation} />
        </NavigationContainer>
      </Provider>
    );

    const nextButton = getByText("Next");
    fireEvent.press(nextButton);
    expect(getByText("Q 2 : Investment Duration")).toBeTruthy();

    const previousButton = getByText("Previous");
    fireEvent.press(previousButton);
    expect(
      getByText("Q 1 : How would you describe your investment knowledge?")
    ).toBeTruthy();
  });

  test("calculates total score and profile on finish", async () => {
    const { getByText } = render(
      <Provider store={store}>
        <NavigationContainer>
          <Assesment navigation={navigation} />
        </NavigationContainer>
      </Provider>
    );

    const intermediateOption = getByText("Intermediate");
    fireEvent.press(intermediateOption);

    const nextButton = getByText("Next");
    fireEvent.press(nextButton);

    const mediumTermOption = getByText("Medium-term (1-5 years)");
    fireEvent.press(mediumTermOption);

    const finishButton = getByText("Finish");
    fireEvent.press(finishButton);

    await waitFor(() =>
      expect(navigation.replace).toHaveBeenCalledWith("Result", {
        totalScore: 4, // Adjust the score as per the selected options
        profile: "⚖️ Balanced: A mix of safety and growth.", // Adjust the profile as per the score
      })
    );
  });
});
