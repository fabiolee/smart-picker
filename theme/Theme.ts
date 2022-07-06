import { ColorValue } from "react-native";

export type ThemeProps = {
  actions: {
    primary: {
      background: ColorValue & string;
      foregroundActive: ColorValue & string;
      foregroundInactive: ColorValue & string;
    };
    secondary: {
      background: ColorValue & string;
      foreground: ColorValue & string;
    };
  };
  container: {
    background: ColorValue & string;
    foreground: ColorValue & string;
  };
  modal: {
    background: ColorValue & string;
    border: ColorValue & string;
    foreground: ColorValue & string;
    placeholder: ColorValue & string;
  };
};

const defaultTheme: ThemeProps = {
  actions: {
    primary: {
      background: "#000000",
      foregroundActive: "#ffffff",
      foregroundInactive: "#cccccc",
    },
    secondary: {
      background: "#000000",
      foreground: "#ffffff",
    },
  },
  container: {
    background: "#ffffff",
    foreground: "#000000",
  },
  modal: {
    background: "#ffffff",
    border: "#000000",
    foreground: "#000000",
    placeholder: "#888888",
  },
};

export const lightTheme: ThemeProps = {
  ...defaultTheme,
  actions: {
    primary: {
      background: "#2196f3",
      foregroundActive: defaultTheme.actions.primary.foregroundActive,
      foregroundInactive: defaultTheme.actions.primary.foregroundInactive,
    },
    secondary: {
      background: "#ffc107",
      foreground: defaultTheme.actions.secondary.foreground,
    },
  },
  modal: {
    background: "#dedede",
    border: defaultTheme.modal.border,
    foreground: "#121212",
    placeholder: defaultTheme.modal.placeholder,
  },
};

export const darkTheme: ThemeProps = {
  ...defaultTheme,
  actions: {
    primary: {
      background: "#6200ee",
      foregroundActive: defaultTheme.actions.primary.foregroundActive,
      foregroundInactive: defaultTheme.actions.primary.foregroundInactive,
    },
    secondary: {
      background: "#03dac5",
      foreground: defaultTheme.actions.secondary.foreground,
    },
  },
  container: {
    background: "#000000",
    foreground: "#ffffff",
  },
  modal: {
    background: "#121212",
    border: "#ffffff",
    foreground: "#dedede",
    placeholder: defaultTheme.modal.placeholder,
  },
};
