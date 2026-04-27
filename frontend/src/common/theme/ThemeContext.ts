import { createContext } from "react";

export interface Theme {
  primary: string;
  secondary: string;
  tertiary: string;
  quaternary: string;
  quinary: string;
  senary: string;
  septenary: string;
  octonary: string;
  nonary: string;
  denary: string;
}

export interface ThemeContextType {
  defaultTheme: Theme;
  theme: Theme;
  updateColor: (key: keyof Theme, value: string) => void;
  resetTheme: () => void;
  updateAllColors: (styles: Theme) => void;
}

export const defaultTheme: Theme = {
  primary: "#253031",
  secondary: "#315659",
  tertiary: "#2978a0",
  quaternary: "#c6e0ff",
  quinary: "#006616",
  senary: "#000000",
  septenary: "#000000",
  octonary: "#000000",
  nonary: "#000000",
  denary: "#000000",
};

const theme = defaultTheme;

export const ThemeContext = createContext<ThemeContextType>({
  defaultTheme: defaultTheme,
  theme,
  updateColor: (colorStyle: string, colorValue: string) => {
    const root = document.documentElement;
    root.style.setProperty(`--color-${colorStyle}`, colorValue);
  },
  resetTheme: () => {
    const root = document.documentElement;
    root.style.setProperty("--color-primary", defaultTheme.primary);
    root.style.setProperty("--color-secondary", defaultTheme.secondary);
    root.style.setProperty("--color-tertiary", defaultTheme.tertiary);
    root.style.setProperty("--color-quaternary", defaultTheme.quaternary);
    root.style.setProperty("--color-quinary", defaultTheme.quinary);
    root.style.setProperty("--color-senary", defaultTheme.senary);
    root.style.setProperty("--color-septenary", defaultTheme.septenary);
    root.style.setProperty("--color-octonary", defaultTheme.octonary);
    root.style.setProperty("--color-nonary", defaultTheme.nonary);
    root.style.setProperty("--color-denary", defaultTheme.denary);
    localStorage.setItem("app-theme", JSON.stringify(defaultTheme));
  },
  updateAllColors: (styles: Theme) => {
    const root = document.documentElement;
    root.style.setProperty("--color-primary", styles.primary);
    root.style.setProperty("--color-secondary", styles.secondary);
    root.style.setProperty("--color-tertiary", styles.tertiary);
    root.style.setProperty("--color-quaternary", styles.quaternary);
    root.style.setProperty("--color-quinary", styles.quinary);
    root.style.setProperty("--color-senary", styles.senary);
    root.style.setProperty("--color-septenary", styles.septenary);
    root.style.setProperty("--color-octonary", styles.octonary);
    root.style.setProperty("--color-nonary", styles.nonary);
    root.style.setProperty("--color-denary", styles.denary);
    localStorage.setItem("app-theme", JSON.stringify(styles));
  },
});
