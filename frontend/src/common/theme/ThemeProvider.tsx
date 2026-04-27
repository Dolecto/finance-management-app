/* eslint-disable @typescript-eslint/no-explicit-any */
// ThemeContext.jsx

import { useEffect, useState, type ReactNode } from "react";
import { defaultTheme, ThemeContext, type Theme } from "./ThemeContext";

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("app-theme");
    return saved ? JSON.parse(saved) : defaultTheme;
  });

  // Apply CSS variables whenever theme changes
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--color-primary", theme.primary);
    root.style.setProperty("--color-secondary", theme.secondary);
    root.style.setProperty("--color-tertiary", theme.tertiary);
    root.style.setProperty("--color-quaternary", theme.quaternary);
    root.style.setProperty("--color-quinary", theme.quinary);
    root.style.setProperty("--color-senary", theme.senary);
    root.style.setProperty("--color-septenary", theme.septenary);
    root.style.setProperty("--color-octonary", theme.octonary);
    root.style.setProperty("--color-nonary", theme.nonary);
    root.style.setProperty("--color-denary", theme.denary);
    localStorage.setItem("app-theme", JSON.stringify(theme));
  }, [theme]);

  const updateColor = (key: any, value: any) => {
    setTheme((prev: any) => ({ ...prev, [key]: value }));
  };

  const resetTheme = () => setTheme(defaultTheme);

  const updateAllColors = (styles: Theme) => setTheme(styles);

  return (
    <ThemeContext.Provider
      value={{
        defaultTheme,
        theme,
        updateColor,
        resetTheme,
        updateAllColors,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
