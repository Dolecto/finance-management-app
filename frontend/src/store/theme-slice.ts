/* eslint-disable @typescript-eslint/no-explicit-any */
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

export interface ThemeSlice {
  theme: Theme;
  updateColor: (key: keyof Theme, value: string) => void;
  resetTheme: () => void;
  updateAllColors: (styles: Theme) => void;
}

export const createThemeSlice = (set: any): ThemeSlice => ({
  theme: defaultTheme,
  updateColor: (key, value) =>
    set((state: any) => ({ theme: { ...state.theme, [key]: value } })),
  resetTheme: () => set({ theme: defaultTheme }),
  updateAllColors: (styles) => set({ theme: styles }),
});
