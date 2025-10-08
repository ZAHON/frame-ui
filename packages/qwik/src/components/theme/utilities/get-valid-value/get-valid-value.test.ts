import type { GetValidValueParams } from '.';
import { describe, it, expect, vi, afterEach, beforeEach } from 'vitest';
import { getValidValue } from '.';

const THEMES = ['light', 'dark', 'system'] as const;
type Theme = (typeof THEMES)[number];

const localStorageMock = (storedValue: string | null, throwError = false) => ({
  getItem: vi.fn(() => {
    if (throwError) {
      throw new Error('localStorage access denied');
    }
    return storedValue;
  }),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
  length: 0,
});

describe('getValidValue', () => {
  const DEFAULT_PARAMS: GetValidValueParams<Theme> = {
    storageKey: 'app-theme',
    validValues: THEMES,
    defaultValue: 'system',
  };

  let localStorageSpy: ReturnType<typeof localStorageMock>;

  beforeEach(() => {
    vi.clearAllMocks();
    localStorageSpy = localStorageMock(null, false);
    vi.stubGlobal('localStorage', localStorageSpy);
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('should return the stored value if it is found and is valid', () => {
    localStorageSpy = localStorageMock('dark', false);
    vi.stubGlobal('localStorage', localStorageSpy);

    const result = getValidValue(DEFAULT_PARAMS);

    expect(localStorageSpy.getItem).toHaveBeenCalledWith(DEFAULT_PARAMS.storageKey);
    expect(result).toBe('dark');
  });

  it('should return the defaultValue if no value is found in localStorage (null)', () => {
    localStorageSpy = localStorageMock(null, false);
    vi.stubGlobal('localStorage', localStorageSpy);

    const result = getValidValue(DEFAULT_PARAMS);

    expect(localStorageSpy.getItem).toHaveBeenCalledWith(DEFAULT_PARAMS.storageKey);
    expect(result).toBe(DEFAULT_PARAMS.defaultValue);
  });

  it('should return the defaultValue if the stored value is found but is NOT in validValues', () => {
    localStorageSpy = localStorageMock('custom', false);
    vi.stubGlobal('localStorage', localStorageSpy);

    const result = getValidValue(DEFAULT_PARAMS);

    expect(localStorageSpy.getItem).toHaveBeenCalledWith(DEFAULT_PARAMS.storageKey);
    expect(result).toBe(DEFAULT_PARAMS.defaultValue);
  });

  it('should return the defaultValue if localStorage access throws an error', () => {
    localStorageSpy = localStorageMock(null, true);
    vi.stubGlobal('localStorage', localStorageSpy);

    let result: Theme | undefined;

    const runTest = () => {
      result = getValidValue(DEFAULT_PARAMS);
    };

    expect(runTest).not.toThrow();

    expect(localStorageSpy.getItem).toHaveBeenCalledTimes(1);

    expect(result).toBe(DEFAULT_PARAMS.defaultValue);
  });
});
