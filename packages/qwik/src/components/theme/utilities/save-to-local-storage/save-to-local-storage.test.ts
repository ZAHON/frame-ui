import type { SaveToLocalStorageParams } from '.';
import { describe, it, expect, vi, afterEach, beforeEach } from 'vitest';
import { saveToLocalStorage } from '.';

const localStorageMock = (throwError = false) => ({
  setItem: vi.fn(() => {
    if (throwError) {
      throw new Error('Storage quota exceeded');
    }
  }),
  getItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
  length: 0,
});

describe('saveToLocalStorage', () => {
  const MOCK_PARAMS: SaveToLocalStorageParams = {
    storageKey: 'testKey',
    value: 'testValue',
  };

  let localStorageSpy: ReturnType<typeof localStorageMock>;

  beforeEach(() => {
    localStorageSpy = localStorageMock(false);
    vi.stubGlobal('localStorage', localStorageSpy);
  });

  afterEach(() => {
    vi.unstubAllGlobals();
    vi.clearAllMocks();
  });

  it('should call localStorage.setItem with the correct key and value', () => {
    saveToLocalStorage(MOCK_PARAMS);

    expect(localStorageSpy.setItem).toHaveBeenCalledTimes(1);
    expect(localStorageSpy.setItem).toHaveBeenCalledWith(MOCK_PARAMS.storageKey, MOCK_PARAMS.value);
  });

  it('should silently catch and ignore errors when localStorage fails', () => {
    localStorageSpy = localStorageMock(true);
    vi.stubGlobal('localStorage', localStorageSpy);

    const saveWithError = () => saveToLocalStorage(MOCK_PARAMS);

    expect(saveWithError).not.toThrow();

    expect(localStorageSpy.setItem).toHaveBeenCalledTimes(1);
  });
});
