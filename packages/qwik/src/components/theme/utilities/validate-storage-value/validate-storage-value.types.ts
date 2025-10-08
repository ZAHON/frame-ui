export interface ValidateStorageValueParams<T> {
  /**
   * The raw string value retrieved from storage, typically the `newValue` from a `StorageEvent`
   * or the result of `localStorage.getItem()`. It can be `null` if the key was removed or not found.
   */
  value: string | null;

  /**
   * An array of predefined, acceptable string values (the source of truth).
   * If the provided `value` is present but not included in this list, it's considered invalid.
   */
  validValues: readonly T[];

  /**
   * The value to be returned if the provided `value` is `null`, empty, or not found
   * in the `validValues` array.
   */
  defaultValue: T;
}
