import React from "react";
import { StatusBar } from "react-native";
import store from "./src/store";
import { Provider } from "react-redux";
import { colors } from "./src/global/utilities";
import AppNavigator from "./src/navigation";
const App = () => {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor={colors.white} barStyle={"dark-content"} />
      <AppNavigator />
    </Provider>
  );
};

export default App;

// import "react-native";
// import React from "react";
// import App from "../App";
// import { it } from "@jest/globals";
// import renderer from "react-test-renderer";
// it("renders correctly", () => {
//   renderer.create(<App />);
// });
