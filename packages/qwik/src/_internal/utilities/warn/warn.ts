/**
 * Displays a warning message in the console.
 *
 * This function is a wrapper around `console.warn` that automatically
 * prepends the `"Frame UI:"` prefix to the message for easy identification
 * of warnings coming from the Frame UI library.
 *
 */
export const warn = (...messages: string[]) => {
  const message = messages.join(' ');

  console.warn(`Frame UI: ${message}`);
};
