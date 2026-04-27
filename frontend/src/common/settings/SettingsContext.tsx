import { createContext } from "react";

export interface Settings {
  language: "en" | "de";
}

export interface SettingsContextType {
  defaultSettings: Settings;
  settings: Settings;
  updateSetting: <K extends keyof Settings>(key: K, value: Settings[K]) => void;
  resetSettings: () => void;
}

export const defaultSettings: Settings = {
  language: "en",
};

const settings = defaultSettings;

export const SettingsContext = createContext<SettingsContextType>({
  defaultSettings,
  settings,
  updateSetting: (setting, newSetting) => {
    localStorage.setItem(
      "app-settings",
      JSON.stringify({ ...settings, [setting]: newSetting }),
    );
  },
  resetSettings: () => {
    localStorage.setItem("app-settings", JSON.stringify(defaultSettings));
  },
});
