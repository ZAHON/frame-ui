export interface SaveToLocalStorageParams {
  /**
   * The unique key under which the value will be stored in `localStorage`.
   */
  storageKey: string;

  /**
   * The string value to be stored.
   */
  value: string;
}
