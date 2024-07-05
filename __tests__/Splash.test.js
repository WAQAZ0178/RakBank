import React from "react";
import { render, waitFor } from "@testing-library/react-native";
import Splash from "../src/screens/App/splash/splash";
import { NavigationContainer } from "@react-navigation/native";

jest.mock("@react-navigation/native", () => {
  const actualNav = jest.requireActual("@react-navigation/native");
  return {
    ...actualNav,
    useNavigation: () => ({
      replace: jest.fn(),
    }),
  };
});

describe("Splash Component", () => {
  let navigation;

  beforeEach(() => {
    jest.useFakeTimers(); // Mock the timers
    navigation = require("@react-navigation/native").useNavigation();
  });

  afterEach(() => {
    jest.useRealTimers(); // Restore the real timers
    jest.clearAllMocks(); // Clear all mocks
  });

  test("renders correctly", () => {
    const { getByTestId } = render(
      <NavigationContainer>
        <Splash />
      </NavigationContainer>
    );

    expect(getByTestId("splash-logo")).toBeTruthy();
  });

  test("navigates to Assesment screen after timeout", async () => {
    const { getByTestId } = render(
      <NavigationContainer>
        <Splash />
      </NavigationContainer>
    );

    jest.advanceTimersByTime(2000); // Fast-forward the timer by 2000ms

    await waitFor(() => {
      expect(navigation.replace).toHaveBeenCalledWith("Assesment");
    });
  });
});
