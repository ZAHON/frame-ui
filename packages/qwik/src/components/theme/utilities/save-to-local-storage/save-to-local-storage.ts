import type { SaveToLocalStorageParams } from './save-to-local-storage.types';

/**
 * Saves a string value to the browser's `localStorage` under a specified key.
 *
 * This function wraps the native `localStorage.setItem` call in a `try...catch` block
 * to safely ignore potential errors (e.g., when `localStorage` storage quota is exceeded,
 * or if the browser has disabled `localStorage` access).
 */
export const saveToLocalStorage = (params: SaveToLocalStorageParams) => {
  const { storageKey, value } = params;

  try {
    localStorage.setItem(storageKey, value);
  } catch {
    //
  }
};
