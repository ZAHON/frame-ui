export interface ThemeScriptParams {
  /**
   * Toggles whether the 'system' theme preference should automatically track the user's
   * operating system setting (`prefers-color-scheme`).
   */
  enableSystemTheme: boolean;

  /**
   * The fallback theme to use if no preference is found in local storage.
   * This is the initial value used to resolve the final theme.
   */
  defaultTheme: 'light' | 'dark' | 'system';

  /**
   * The default border radius preset to apply if no user preference is stored.
   * This value is set as the initial border radius for UI components.
   */
  defaultRadius: 'none' | 'small' | 'medium' | 'large' | 'full';

  /**
   * The default scaling factor for the UI if no user preference is stored.
   * This value is set as the initial global scaling factor.
   */
  defaultScaling: '90%' | '95%' | '100%' | '105%' | '110%';

  /**
   * Key names used to retrieve the theme, radius, and scaling preferences from `localStorage`.
   */
  storageKeys: {
    /**
     * The `localStorage` key used to look up the stored theme preference.
     */
    theme: string;
    /**
     * The `localStorage` key used to look up the stored border radius preference.
     */
    radius: string;
    /**
     * The `localStorage` key used to look up the stored UI scaling preference.
     */
    scaling: string;
  };
}
