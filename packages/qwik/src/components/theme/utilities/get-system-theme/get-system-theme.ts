/**
 * Determines the user's preferred system color scheme (theme) based on the
 * `(prefers-color-scheme: dark)` media query.
 */
export const getSystemTheme = (colorSchemeQuery?: MediaQueryList | MediaQueryListEvent) => {
  const query = colorSchemeQuery || window.matchMedia('(prefers-color-scheme: dark)');
  const systemTheme = query.matches ? 'dark' : 'light';

  return systemTheme;
};
