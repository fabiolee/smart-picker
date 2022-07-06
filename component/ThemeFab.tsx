import { Pressable, StyleSheet, Text } from "react-native";
import React, { useContext } from "react";
import { ThemeContext } from "../theme/ThemeContext";
import Ionicons from "react-native-vector-icons/Ionicons";

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 56,
    position: "absolute",
    bottom: 16,
    right: 16,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
});

type Props = {
  onPress: () => void;
  iconName: string;
};

export const ThemeFab = ({ onPress, iconName }: Props) => {
  const { theme } = useContext(ThemeContext);
  return (
    <Pressable
      style={[
        styles.container,
        { backgroundColor: theme.actions.secondary.background },
      ]}
      onPress={onPress}
    >
      <Ionicons
        name={iconName}
        size={24}
        color={theme.actions.secondary.foreground}
      />
    </Pressable>
  );
};
