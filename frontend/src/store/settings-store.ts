import { create } from "zustand";
import { persist, devtools, subscribeWithSelector } from "zustand/middleware";
import { type ThemeSlice, createThemeSlice } from "./theme-slice";
import { createLanguageSlice, type LanguageSlice } from "./language-slice";

type StoreState = ThemeSlice & LanguageSlice;

export const useSettingsStore = create<StoreState>()(
  devtools(
    persist(
      subscribeWithSelector((...a) => ({
        ...createThemeSlice(...a),
        ...createLanguageSlice(...a),
      })),
      { name: "app-store" },
    ),
  ),
);
