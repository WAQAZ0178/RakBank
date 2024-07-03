import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Assesment, Result, Splash } from "../screens/App";
const MainApp = createNativeStackNavigator();

const App = () => {
  return (
    <MainApp.Navigator
      screenOptions={{ headerShown: false, gestureEnabled: false }}
      initialRouteName={"Splash"}
    >
      <MainApp.Screen name={"Splash"} component={Splash} />
      <MainApp.Screen name={"Result"} component={Result} />
      <MainApp.Screen name={"Assesment"} component={Assesment} />
    </MainApp.Navigator>
  );
};
export default App;
