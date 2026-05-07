import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import de from "./locales/de.json";
import {
  defaultSettings,
  type Settings,
} from "./common/settings/SettingsContext";

const settings = localStorage.getItem("app-settings");
const lang = settings ? (JSON.parse(settings) as Settings) : defaultSettings;

i18n.use(initReactI18next).init({
  resources: { en: { translation: en }, de: { translation: de } },
  lng: lang.language,
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
