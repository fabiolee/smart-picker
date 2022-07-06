import React from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { ThemeText } from "./component/ThemeText";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export const SettingsScreen = (): JSX.Element => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <ThemeText>Settings Screen</ThemeText>
    </SafeAreaView>
  );
};
