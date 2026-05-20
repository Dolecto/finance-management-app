import { useSettingsStore } from "../settings-store";
import { defaultTheme } from "../theme-slice";

export const useTheme = () => {
  const theme = useSettingsStore((state) => state.theme);
  const updateColor = useSettingsStore((state) => state.updateColor);
  const resetTheme = useSettingsStore((state) => state.resetTheme);
  const updateAllColors = useSettingsStore((state) => state.updateAllColors);

  return { defaultTheme, theme, updateColor, resetTheme, updateAllColors };
};
