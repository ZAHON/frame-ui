export interface ThemeRootProps {
  /**
   * Enables automatic theme switching based on the user's system color scheme preference.
   * When enabled, the `"system"` theme option will respect the OS-level dark/light mode setting.
   * @default true
   */
  enableSystemTheme?: boolean;

  /**
   * The default theme to apply when the component is first mounted and no user preference is stored.
   * Can be `"light"`, `"dark"`, or `"system"` (which follows the OS preference).
   * If `enableSystemTheme` is `false`, this will default to `"light"`.
   * @default "system"
   */
  defaultTheme?: 'light' | 'dark' | 'system';

  /**
   * The default border radius preset to apply to UI components.
   * Controls the roundness of corners throughout the themed interface.
   * Options range from sharp corners (`"none"`) to fully rounded (`"full"`).
   * @default "medium"
   */
  defaultRadius?: 'none' | 'small' | 'medium' | 'large' | 'full';

  /**
   * The default scaling factor for the UI.
   * Adjusts the overall size of interface elements while maintaining proportions.
   * Useful for accessibility or user preference adjustments.
   * @default "100%"
   */
  defaultScaling?: '90%' | '95%' | '100%' | '105%' | '110%';

  /**
   * When enabled, temporarily disables CSS transitions during theme changes to prevent
   * visual flickering or jarring animation effects. The transitions are re-enabled
   * immediately after the theme is applied.
   * @default true
   */
  disableTransitionOnThemeChange?: boolean;

  /**
   * A cryptographic nonce (number used once) for Content Security Policy (CSP) compliance.
   * This nonce will be applied to the inline script tag that initializes the theme,
   * allowing it to execute in environments with strict CSP rules.
   * @default undefined
   */
  nonce?: string;

  /**
   * Additional HTML attributes to apply to the inline script element that initializes the theme.
   * Supports standard script attributes as well as custom data attributes.
   * Useful for tracking, analytics, or additional CSP configurations.
   * @default undefined
   */
  scriptProps?: Record<string, unknown>;

  /**
   * The strategy used to execute the `useVisibleTask$` hook, which handles
   * reading initial values from `localStorage` and setting up media query listeners.
   * - `"intersection-observer"`: Executes when the component becomes visible in the viewport
   * - `"document-ready"`: Executes when the DOM is fully parsed
   * - `"document-idle"`: Executes when the browser is idle (recommended for best performance)
   * @default "document-idle"
   */
  strategy?: 'intersection-observer' | 'document-ready' | 'document-idle';

  /**
   * Custom keys to use for storing theme preferences in `localStorage`.
   * Allows customization of storage key names to avoid conflicts with other
   * libraries or to match your application's naming conventions.
   * @default { theme: 'frame-ui-theme', radius: 'frame-ui-radius', scaling: 'frame-ui-scaling' }
   */
  storageKeys?: {
    /**
     * The `localStorage` key used to persist the user's theme preference.
     * This key is used to store and retrieve the theme setting across browser sessions.
     * @default "frame-ui-theme"
     */
    theme?: string;

    /**
     * The `localStorage` key used to persist the user's border radius preference.
     * This key is used to store and retrieve the radius setting across browser sessions.
     * @default "frame-ui-radius"
     */
    radius?: string;

    /**
     * The `localStorage` key used to persist the user's UI scaling preference.
     * This key is used to store and retrieve the scaling factor across browser sessions.
     * @default "frame-ui-scaling"
     */
    scaling?: string;
  };
}
