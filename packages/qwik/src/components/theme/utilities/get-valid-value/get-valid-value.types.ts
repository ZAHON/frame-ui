export interface GetValidValueParams<T> {
  /**
   * The key used to look up the stored value in the browser's `localStorage`.
   */
  storageKey: string;

  /**
   * An array of predefined, acceptable string values.
   * If the stored value is present in `localStorage` but not included in this list,
   * it will be considered invalid.
   */
  validValues: readonly T[];

  /**
   * The value to be returned if the stored value is `null`, `undefined`, or not found
   * in the `validValues` array.
   */
  defaultValue: T;
}
