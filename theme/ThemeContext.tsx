import { createContext } from "react";
import { useColorScheme } from "react-native";
import { darkTheme, lightTheme, ThemeProps } from "./Theme";

type ThemeContextProps = {
  theme: ThemeProps;
};

export const ThemeContext = createContext<ThemeContextProps>({
  theme: lightTheme,
});

type ThemeProviderProps = {
  children: React.ReactNode;
};

export const ThemeProvider = ({
  children,
}: ThemeProviderProps): JSX.Element => {
  const scheme = useColorScheme();
  return (
    <ThemeContext.Provider
      value={{ theme: scheme === "light" ? lightTheme : darkTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
