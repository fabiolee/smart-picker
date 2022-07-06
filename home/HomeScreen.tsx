import React, { useState } from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { ThemeFab } from "../component/ThemeFab";
import { ThemeText } from "../component/ThemeText";
import { HomeThemeModal } from "./HomeThemeModal";

export const HomeScreen = (): JSX.Element => {
  const [modalVisible, onChangeModalVisible] = useState(false);

  const onCloseModal = (text: string): void => {
    alert(`text=${text}`);
    onChangeModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <ThemeText style={styles.title}>
        Help you to make a random decision.
      </ThemeText>
      <ThemeFab
        onPress={() => onChangeModalVisible(true)}
        iconName={"ios-add"}
      />
      <HomeThemeModal onCloseModal={onCloseModal} visible={modalVisible} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    padding: 8,
    fontSize: 18,
    fontWeight: "bold",
  },
});
