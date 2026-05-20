import i18n from "../i18n";
import { useSettingsStore } from "./settings-store";
import { type Theme } from "./theme-slice";

const applyThemeToDom = (theme: Theme) => {
  const root = document.documentElement;
  (Object.keys(theme) as (keyof Theme)[]).forEach((key) => {
    root.style.setProperty(`--color-${key}`, theme[key]);
  });
};

i18n.changeLanguage(useSettingsStore.getState().language);
applyThemeToDom(useSettingsStore.getState().theme);

useSettingsStore.subscribe(
  (state) => state.theme,
  (theme) => applyThemeToDom(theme),
  { fireImmediately: false },
);

useSettingsStore.subscribe(
  (state) => state.language,
  (language) => i18n.changeLanguage(language),
  { fireImmediately: false },
);
