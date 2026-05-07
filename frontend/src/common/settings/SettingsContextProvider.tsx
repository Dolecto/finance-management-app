import { useEffect, useState, type ReactNode } from "react";
import {
  defaultSettings,
  SettingsContext,
  type Settings,
} from "./SettingsContext";
import i18n from "../../i18n";

interface SettingsProviderProps {
  children: ReactNode;
}

export function SettingsProvider({ children }: SettingsProviderProps) {
  const [settings, setSettings] = useState<Settings>(() => {
    const saved = localStorage.getItem("app-settings");
    return saved ? JSON.parse(saved) : defaultSettings;
  });

  useEffect(() => {
    localStorage.setItem("app-settings", JSON.stringify(settings));
    i18n.changeLanguage(settings.language);
  }, [settings]);

  const updateSetting = <K extends keyof Settings>(
    key: K,
    value: Settings[K],
  ) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  };

  const resetSettings = () => setSettings(defaultSettings);

  return (
    <SettingsContext.Provider
      value={{ settings, defaultSettings, updateSetting, resetSettings }}
    >
      {children}
    </SettingsContext.Provider>
  );
}
