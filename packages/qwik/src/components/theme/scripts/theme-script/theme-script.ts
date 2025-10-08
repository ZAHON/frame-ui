import type { ThemeScriptParams } from './theme-script.types';

/**
 * This function is designed to be serialized and injected as a small, non-blocking
 * inline `<script>` tag that runs synchronously as soon as it is encountered by the browser.
 *
 * Its primary purpose is to immediately read user preferences from `localStorage`
 * and apply the correct styling attributes (like `data-theme`, `data-radius`, etc.)
 * to `document.documentElement`. This synchronous execution ensures that the page
 * renders with the correct user theme from the very start, effectively preventing
 * the jarring visual flicker (FOUC) before the main application logic loads.
 */
export const themeScript = (params: ThemeScriptParams) => {
  const { enableSystemTheme, defaultTheme, defaultRadius, defaultScaling, storageKeys } = params;

  const themes = ['light', 'dark', 'system'] as const;
  const radiuses = ['none', 'small', 'medium', 'large', 'full'] as const;
  const scalings = ['90%', '95%', '100%', '105%', '110%'] as const;

  const documentElement = document.documentElement;

  const getSystemTheme = () => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  const getValidValue = <T extends string>(storageKey: string, validValues: readonly T[], defaultValue: T): T => {
    try {
      const stored = localStorage.getItem(storageKey);
      return stored && validValues.includes(stored as T) ? (stored as T) : defaultValue;
    } catch {
      return defaultValue;
    }
  };

  const themeName = getValidValue(storageKeys.theme, themes, defaultTheme);
  const isSystem = enableSystemTheme && themeName === 'system';
  const theme = isSystem ? getSystemTheme() : themeName;
  documentElement.setAttribute('data-theme', theme);

  const radius = getValidValue(storageKeys.radius, radiuses, defaultRadius);
  documentElement.setAttribute('data-radius', radius);

  const scaling = getValidValue(storageKeys.scaling, scalings, defaultScaling);
  documentElement.setAttribute('data-scaling', scaling);
};
