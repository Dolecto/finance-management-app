import { createContext } from "react";

export interface Theme {
  primary: string;
  secondary: string;
  background: string;
  tertiary: string;
  text: string;
  error: string;
}

export interface ThemeContextType {
  theme: Theme;
  updateColor: (key: keyof Theme, value: string) => void;
  resetTheme: () => void;
}

export const defaultTheme: Theme = {
  primary: "#1C2F73",
  secondary: "#e7decd",
  tertiary: "#4b6858",
  background: "#fbfaf8",
  text: "#040711",
  error: "#ef626c",
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: defaultTheme,
  updateColor: () => {},
  resetTheme: () => {},
});
