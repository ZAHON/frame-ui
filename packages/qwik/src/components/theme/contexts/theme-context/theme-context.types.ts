import type { ReadonlySignal, QRL } from '@builder.io/qwik';

export interface ThemeContextValue {
  /**
   * A readonly signal holding the user's currently selected theme preference.
   * It may be `undefined` when the application first starts on the server.
   */
  theme: ReadonlySignal<'light' | 'dark' | 'system' | undefined>;

  /**
   * A readonly signal holding the actual theme applied to the document.
   * This value is the result of resolving the `"system"` preference (if selected)
   * to either `"light"` or `"dark"` based on the user's OS color scheme setting.
   * It may be `undefined` when the application first starts on the server.
   */
  resolvedTheme: ReadonlySignal<'light' | 'dark' | 'system' | undefined>;

  /**
   * A readonly signal holding the user's currently selected border radius preference.
   * Its value determines the roundness of UI component corners.
   * It may be `undefined` when the application first starts on the server.
   */
  radius: ReadonlySignal<'none' | 'small' | 'medium' | 'large' | 'full' | undefined>;

  /**
   * A readonly signal holding the user's currently selected UI scaling factor preference.
   * Its value adjusts the overall size of interface elements.
   * It may be `undefined` when the application first starts on the server.
   */
  scaling: ReadonlySignal<'90%' | '95%' | '100%' | '105%' | '110%' | undefined>;

  /**
   * A `QRL` function used to programmatically set the theme preference.
   * Invoking this function updates the theme and saves the preference to local storage.
   */
  setTheme$: QRL<(newTheme: 'light' | 'dark' | 'system') => void>;

  /**
   * A `QRL` function used to programmatically set the border radius preference.
   * Invoking this function updates the radius setting and saves the preference to local storage.
   */
  setRadius$: QRL<(newRadius: 'none' | 'small' | 'medium' | 'large' | 'full') => void>;

  /**
   * A `QRL` function used to programmatically set the UI scaling preference.
   * Invoking this function updates the scaling factor and saves the preference to local storage.
   */
  setScaling$: QRL<(newScaling: '90%' | '95%' | '100%' | '105%' | '110%') => void>;
}
