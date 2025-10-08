import type { ValidateStorageValueParams } from '.';
import { describe, it, expect } from 'vitest';
import { validateStorageValue } from '.';

const THEMES = ['light', 'dark', 'system'] as const;
type Theme = (typeof THEMES)[number];

describe('validateStorageValue', () => {
  const DEFAULT_PARAMS: Omit<ValidateStorageValueParams<Theme>, 'value'> = {
    validValues: THEMES,
    defaultValue: 'system',
  };

  it('should return the value if it is present and found in validValues', () => {
    const params: ValidateStorageValueParams<Theme> = {
      ...DEFAULT_PARAMS,
      value: 'dark',
    };

    const result = validateStorageValue(params);

    expect(result).toBe('dark');
  });

  it('should return the defaultValue if the value is null', () => {
    const params: ValidateStorageValueParams<Theme> = {
      ...DEFAULT_PARAMS,
      value: null,
    };

    const result = validateStorageValue(params);

    expect(result).toBe(DEFAULT_PARAMS.defaultValue);
  });

  it('should return the defaultValue if the value is a string but not in validValues', () => {
    const params: ValidateStorageValueParams<Theme> = {
      ...DEFAULT_PARAMS,
      value: 'custom-theme',
    };

    const result = validateStorageValue(params);

    expect(result).toBe(DEFAULT_PARAMS.defaultValue);
  });

  it('should return the defaultValue if the value is an empty string ("")', () => {
    const params: ValidateStorageValueParams<Theme> = {
      ...DEFAULT_PARAMS,
      value: '',
    };

    const result = validateStorageValue(params);

    expect(result).toBe(DEFAULT_PARAMS.defaultValue);
  });

  it('should return another valid value from the list (e.g., "light")', () => {
    const params: ValidateStorageValueParams<Theme> = {
      ...DEFAULT_PARAMS,
      value: 'light',
    };

    const result = validateStorageValue(params);

    expect(result).toBe('light');
  });
});
