import type { GetValidValueParams } from './get-valid-value.types';

/**
 * Retrieves a value from `localStorage` and validates it against a list of acceptable values.
 *
 * It provides robust error handling by wrapping the `localStorage.getItem` call in a `try...catch`
 * block, ensuring that the `defaultValue` is returned safely if storage access fails.
 */
export const getValidValue = <T extends string>(params: GetValidValueParams<T>) => {
  const { storageKey, validValues, defaultValue } = params;

  try {
    const stored = localStorage.getItem(storageKey);
    return stored && validValues.includes(stored as T) ? (stored as T) : defaultValue;
  } catch {
    return defaultValue;
  }
};
