// i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import de from "./locales/de.json";

// Read directly from the Zustand persisted store
const stored = localStorage.getItem("app-store");
const lang = stored ? (JSON.parse(stored)?.state?.language ?? "en") : "en";

i18n.use(initReactI18next).init({
  resources: { en: { translation: en }, de: { translation: de } },
  lng: lang,
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
