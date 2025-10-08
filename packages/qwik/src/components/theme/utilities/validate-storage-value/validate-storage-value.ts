import type { ValidateStorageValueParams } from './validate-storage-value.types';

/**
 * Validates a potential string value retrieved from storage against a list of acceptable values.
 *
 * This function is primarily used to process raw string data (e.g., from a `StorageEvent` or `localStorage`)
 * to ensure it is a safe and expected value, returning the default if validation fails.
 */
export const validateStorageValue = <T extends string>(params: ValidateStorageValueParams<T>) => {
  const { value, validValues, defaultValue } = params;

  return value && validValues.includes(value as T) ? (value as T) : defaultValue;
};
