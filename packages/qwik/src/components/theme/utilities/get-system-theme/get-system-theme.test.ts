import { describe, it, expect, vi, afterEach } from 'vitest';
import { getSystemTheme } from '.';

describe('getSystemTheme', () => {
  const originalMatchMedia = window.matchMedia;

  const mockMatchMedia = (matches: boolean) => {
    return vi.fn().mockReturnValue({
      matches,
      media: '(prefers-color-scheme: dark)',
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    });
  };

  afterEach(() => {
    window.matchMedia = originalMatchMedia;
    vi.restoreAllMocks();
  });

  it('should return "dark" when the system prefers dark color scheme (default query)', () => {
    window.matchMedia = mockMatchMedia(true);

    const theme = getSystemTheme();

    expect(theme).toBe('dark');
    expect(window.matchMedia).toHaveBeenCalledWith('(prefers-color-scheme: dark)');
  });

  it('should return "light" when the system prefers light color scheme (default query)', () => {
    window.matchMedia = mockMatchMedia(false);

    const theme = getSystemTheme();

    expect(theme).toBe('light');
    expect(window.matchMedia).toHaveBeenCalledWith('(prefers-color-scheme: dark)');
  });

  it('should use the provided MediaQueryList object if available', () => {
    const mockQueryList = {
      matches: true,
      media: '(prefers-color-scheme: dark)',
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    };

    const matchMediaSpy = vi.spyOn(window, 'matchMedia');
    const theme = getSystemTheme(mockQueryList);

    expect(theme).toBe('dark');
    expect(matchMediaSpy).not.toHaveBeenCalled();

    matchMediaSpy.mockRestore();
  });

  it('should return "light" if the provided query matches false', () => {
    const mockQueryList = {
      matches: false,
      media: '(prefers-color-scheme: dark)',
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    };

    const theme = getSystemTheme(mockQueryList);

    expect(theme).toBe('light');
  });
});
