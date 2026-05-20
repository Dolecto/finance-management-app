export type Language = "en" | "de";

export interface LanguageSlice {
  language: Language;
  updateLanguage: (language: Language) => void;
  resetLanguage: () => void;
}

export const createLanguageSlice = (set): LanguageSlice => ({
  language: "en",
  updateLanguage: (lang) => set({ language: lang }),
  resetLanguage: () => set({ language: "en" }),
});
