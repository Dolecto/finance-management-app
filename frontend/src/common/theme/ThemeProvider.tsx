/* eslint-disable @typescript-eslint/no-explicit-any */
// ThemeContext.jsx

import { useEffect, useState, type ReactNode } from "react";
import { defaultTheme, ThemeContext } from "./ThemeContext";

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
    root.style.setProperty("--color-background", theme.background);
    root.style.setProperty("--color-text", theme.text);
    root.style.setProperty("--color-error", theme.error);
    localStorage.setItem("app-theme", JSON.stringify(theme));
  }, [theme]);

  const updateColor = (key: any, value: any) => {
    setTheme((prev: any) => ({ ...prev, [key]: value }));
  };

  const resetTheme = () => setTheme(defaultTheme);

  return (
    <ThemeContext.Provider value={{ theme, updateColor, resetTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
