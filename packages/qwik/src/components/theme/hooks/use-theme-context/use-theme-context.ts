import { useContext } from '@builder.io/qwik';
import { ThemeContext } from '../../contexts';

/**
 * A hook that provides access to the theme's internal state. It exposes readonly signals
 * for the current `theme`, `radius`, and `scaling` preferences, along with `QRL` functions
 * to programmatically update these values.
 */
export const useThemeContext = () => {
  const { theme, resolvedTheme, radius, scaling, setTheme$, setRadius$, setScaling$ } = useContext(ThemeContext);

  return {
    /**
     * A readonly signal holding the user's currently selected theme preference.
     * It may be `undefined` when the application first starts on the server.
     */
    theme: theme,

    /**
     * A readonly signal holding the actual theme applied to the document.
     * This value is the result of resolving the `"system"` preference (if selected)
     * to either `"light"` or `"dark"` based on the user's OS color scheme setting.
     * It may be `undefined` when the application first starts on the server.
     */
    resolvedTheme: resolvedTheme,

    /**
     * A readonly signal holding the user's currently selected border radius preference.
     * Its value determines the roundness of UI component corners.
     * It may be `undefined` when the application first starts on the server.
     */
    radius: radius,

    /**
     * A readonly signal holding the user's currently selected UI scaling factor preference.
     * Its value adjusts the overall size of interface elements.
     * It may be `undefined` when the application first starts on the server.
     */
    scaling: scaling,

    /**
     * A `QRL` function used to programmatically set the theme preference.
     * Invoking this function updates the theme and saves the preference to local storage.
     */
    setTheme$: setTheme$,

    /**
     * A `QRL` function used to programmatically set the border radius preference.
     * Invoking this function updates the radius setting and saves the preference to local storage.
     */
    setRadius$: setRadius$,

    /**
     * A `QRL` function used to programmatically set the UI scaling preference.
     * Invoking this function updates the scaling factor and saves the preference to local storage.
     */
    setScaling$: setScaling$,
  };
};
