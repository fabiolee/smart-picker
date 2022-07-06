import { useContext } from "react";
import { Text, TextProps } from "react-native";
import { ThemeContext } from "../theme/ThemeContext";

export const ThemeText = ({ style, children }: TextProps): JSX.Element => {
  const { theme } = useContext(ThemeContext);
  return (
    <Text style={[style, { color: theme.container.foreground }]}>
      {children}
    </Text>
  );
};
