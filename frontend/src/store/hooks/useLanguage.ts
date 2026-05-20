import { useSettingsStore } from "../settings-store";

export const useLanguage = () => {
  const language = useSettingsStore((state) => state.language);
  const updateLanguage = useSettingsStore((state) => state.updateLanguage);
  const resetLanguage = useSettingsStore((state) => state.resetLanguage);

  return { language, updateLanguage, resetLanguage };
};
