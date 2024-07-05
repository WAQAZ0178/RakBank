import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Result from "../src/screens/App/result/result";
import { ACTIONS } from "../../../store/actions/question";

const mockStore = configureStore([]);

describe("Result Component", () => {
  let store;
  let navigation;
  let route;

  beforeEach(() => {
    store = mockStore({
      // Initial state if needed
    });

    store.dispatch = jest.fn();

    navigation = {
      replace: jest.fn(),
    };

    route = {
      params: {
        profile: "John Doe",
        totalScore: 85,
      },
    };
  });

  it("should render correctly", () => {
    const { toJSON } = render(
      <Provider store={store}>
        <Result navigation={navigation} route={route} />
      </Provider>
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it("should display profile information correctly", () => {
    const { getByText } = render(
      <Provider store={store}>
        <Result navigation={navigation} route={route} />
      </Provider>
    );

    expect(getByText("Your Profile")).toBeTruthy();
    expect(getByText("Total Score: 85")).toBeTruthy();
    expect(getByText("Profile: John Doe")).toBeTruthy();
  });

  it("should dispatch resetData action and navigate to Assesment on button press", () => {
    const { getByText } = render(
      <Provider store={store}>
        <Result navigation={navigation} route={route} />
      </Provider>
    );

    fireEvent.press(getByText("Restart"));

    expect(store.dispatch).toHaveBeenCalledWith(ACTIONS.resetData());
    expect(navigation.replace).toHaveBeenCalledWith("Assesment");
  });
});
