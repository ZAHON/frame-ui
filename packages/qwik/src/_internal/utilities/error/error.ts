/**
 * Throws an error with a standardized `"Frame UI:"` prefix.
 *
 * This utility function simplifies error handling by automatically
 * prepending a consistent prefix to all error messages originating
 * from the Frame UI library.
 */
export const error = (...messages: string[]) => {
  const message = messages.join(' ');

  throw Error(`Frame UI: ${message}`);
};
