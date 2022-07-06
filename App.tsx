import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import React from "react";
import { useColorScheme } from "react-native";
import { BottomTabNavigator } from "./bottomTabs/BottomTabNavigator";
import { ThemeProvider } from "./theme/ThemeContext";

export default (): JSX.Element => {
  const scheme = useColorScheme();
  return (
    <ThemeProvider>
      <NavigationContainer
        theme={scheme === "light" ? DefaultTheme : DarkTheme}
      >
        <BottomTabNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
};
