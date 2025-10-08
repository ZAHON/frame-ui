import type { ThemeScriptParams } from '.';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { themeScript } from '.';

describe('themeScript', () => {
  let mockDocumentElement: HTMLElement;
  let mockLocalStorage: Record<string, string>;
  let mockMatchMedia: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    mockLocalStorage = {};
    mockDocumentElement = {
      setAttribute: vi.fn(),
    } as unknown as HTMLElement;

    global.document = {
      documentElement: mockDocumentElement,
    } as unknown as Document;

    mockMatchMedia = vi.fn((query: string) => ({
      matches: query === '(prefers-color-scheme: dark)' ? false : false,
      media: query,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    }));

    global.window = {
      matchMedia: mockMatchMedia,
    } as unknown as Window & typeof globalThis;

    global.localStorage = {
      getItem: vi.fn((key: string) => mockLocalStorage[key] || null),
      setItem: vi.fn((key: string, value: string) => {
        mockLocalStorage[key] = value;
      }),
      removeItem: vi.fn((key: string) => {
        delete mockLocalStorage[key];
      }),
      clear: vi.fn(() => {
        mockLocalStorage = {};
      }),
      length: 0,
      key: vi.fn(),
    };
  });

  it('should apply default theme when no localStorage value exists', () => {
    const params: ThemeScriptParams = {
      enableSystemTheme: true,
      defaultTheme: 'light',
      defaultRadius: 'medium',
      defaultScaling: '100%',
      storageKeys: {
        theme: 'frame-ui-theme',
        radius: 'frame-ui-radius',
        scaling: 'frame-ui-scaling',
      },
    };

    themeScript(params);

    expect(mockDocumentElement.setAttribute).toHaveBeenCalledWith('data-theme', 'light');
    expect(mockDocumentElement.setAttribute).toHaveBeenCalledWith('data-radius', 'medium');
    expect(mockDocumentElement.setAttribute).toHaveBeenCalledWith('data-scaling', '100%');
  });

  it('should apply stored theme from localStorage', () => {
    mockLocalStorage['frame-ui-theme'] = 'dark';
    mockLocalStorage['frame-ui-radius'] = 'large';
    mockLocalStorage['frame-ui-scaling'] = '110%';

    const params: ThemeScriptParams = {
      enableSystemTheme: true,
      defaultTheme: 'light',
      defaultRadius: 'medium',
      defaultScaling: '100%',
      storageKeys: {
        theme: 'frame-ui-theme',
        radius: 'frame-ui-radius',
        scaling: 'frame-ui-scaling',
      },
    };

    themeScript(params);

    expect(mockDocumentElement.setAttribute).toHaveBeenCalledWith('data-theme', 'dark');
    expect(mockDocumentElement.setAttribute).toHaveBeenCalledWith('data-radius', 'large');
    expect(mockDocumentElement.setAttribute).toHaveBeenCalledWith('data-scaling', '110%');
  });

  it('should use system theme when enableSystemTheme is true and theme is "system"', () => {
    mockLocalStorage['frame-ui-theme'] = 'system';
    mockMatchMedia.mockReturnValue({
      matches: true,
      media: '(prefers-color-scheme: dark)',
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    });

    const params: ThemeScriptParams = {
      enableSystemTheme: true,
      defaultTheme: 'light',
      defaultRadius: 'medium',
      defaultScaling: '100%',
      storageKeys: {
        theme: 'frame-ui-theme',
        radius: 'frame-ui-radius',
        scaling: 'frame-ui-scaling',
      },
    };

    themeScript(params);

    expect(mockMatchMedia).toHaveBeenCalledWith('(prefers-color-scheme: dark)');
    expect(mockDocumentElement.setAttribute).toHaveBeenCalledWith('data-theme', 'dark');
  });

  it('should use light theme from system preference when dark mode is not preferred', () => {
    mockLocalStorage['frame-ui-theme'] = 'system';
    mockMatchMedia.mockReturnValue({
      matches: false,
      media: '(prefers-color-scheme: dark)',
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    });

    const params: ThemeScriptParams = {
      enableSystemTheme: true,
      defaultTheme: 'system',
      defaultRadius: 'medium',
      defaultScaling: '100%',
      storageKeys: {
        theme: 'frame-ui-theme',
        radius: 'frame-ui-radius',
        scaling: 'frame-ui-scaling',
      },
    };

    themeScript(params);

    expect(mockDocumentElement.setAttribute).toHaveBeenCalledWith('data-theme', 'light');
  });

  it('should ignore system theme when enableSystemTheme is false', () => {
    mockLocalStorage['frame-ui-theme'] = 'system';
    mockMatchMedia.mockReturnValue({
      matches: true,
      media: '(prefers-color-scheme: dark)',
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    });

    const params: ThemeScriptParams = {
      enableSystemTheme: false,
      defaultTheme: 'light',
      defaultRadius: 'medium',
      defaultScaling: '100%',
      storageKeys: {
        theme: 'frame-ui-theme',
        radius: 'frame-ui-radius',
        scaling: 'frame-ui-scaling',
      },
    };

    themeScript(params);

    expect(mockDocumentElement.setAttribute).toHaveBeenCalledWith('data-theme', 'system');
  });

  it('should fallback to default values when localStorage contains invalid values', () => {
    mockLocalStorage['frame-ui-theme'] = 'invalid-theme';
    mockLocalStorage['frame-ui-radius'] = 'invalid-radius';
    mockLocalStorage['frame-ui-scaling'] = 'invalid-scaling';

    const params: ThemeScriptParams = {
      enableSystemTheme: true,
      defaultTheme: 'dark',
      defaultRadius: 'small',
      defaultScaling: '95%',
      storageKeys: {
        theme: 'frame-ui-theme',
        radius: 'frame-ui-radius',
        scaling: 'frame-ui-scaling',
      },
    };

    themeScript(params);

    expect(mockDocumentElement.setAttribute).toHaveBeenCalledWith('data-theme', 'dark');
    expect(mockDocumentElement.setAttribute).toHaveBeenCalledWith('data-radius', 'small');
    expect(mockDocumentElement.setAttribute).toHaveBeenCalledWith('data-scaling', '95%');
  });

  it('should handle localStorage errors gracefully', () => {
    vi.spyOn(global.localStorage, 'getItem').mockImplementation(() => {
      throw new Error('localStorage error');
    });

    const params: ThemeScriptParams = {
      enableSystemTheme: true,
      defaultTheme: 'light',
      defaultRadius: 'medium',
      defaultScaling: '100%',
      storageKeys: {
        theme: 'frame-ui-theme',
        radius: 'frame-ui-radius',
        scaling: 'frame-ui-scaling',
      },
    };

    expect(() => themeScript(params)).not.toThrow();
    expect(mockDocumentElement.setAttribute).toHaveBeenCalledWith('data-theme', 'light');
    expect(mockDocumentElement.setAttribute).toHaveBeenCalledWith('data-radius', 'medium');
    expect(mockDocumentElement.setAttribute).toHaveBeenCalledWith('data-scaling', '100%');
  });

  it('should use custom storage keys', () => {
    mockLocalStorage['custom-theme-key'] = 'dark';
    mockLocalStorage['custom-radius-key'] = 'full';
    mockLocalStorage['custom-scaling-key'] = '105%';

    const params: ThemeScriptParams = {
      enableSystemTheme: true,
      defaultTheme: 'light',
      defaultRadius: 'medium',
      defaultScaling: '100%',
      storageKeys: {
        theme: 'custom-theme-key',
        radius: 'custom-radius-key',
        scaling: 'custom-scaling-key',
      },
    };

    themeScript(params);

    expect(global.localStorage.getItem).toHaveBeenCalledWith('custom-theme-key');
    expect(global.localStorage.getItem).toHaveBeenCalledWith('custom-radius-key');
    expect(global.localStorage.getItem).toHaveBeenCalledWith('custom-scaling-key');
    expect(mockDocumentElement.setAttribute).toHaveBeenCalledWith('data-theme', 'dark');
    expect(mockDocumentElement.setAttribute).toHaveBeenCalledWith('data-radius', 'full');
    expect(mockDocumentElement.setAttribute).toHaveBeenCalledWith('data-scaling', '105%');
  });

  it('should apply all valid radius values', () => {
    const radiusValues: Array<'none' | 'small' | 'medium' | 'large' | 'full'> = [
      'none',
      'small',
      'medium',
      'large',
      'full',
    ];

    radiusValues.forEach((radius) => {
      mockLocalStorage['frame-ui-radius'] = radius;

      const params: ThemeScriptParams = {
        enableSystemTheme: true,
        defaultTheme: 'light',
        defaultRadius: 'medium',
        defaultScaling: '100%',
        storageKeys: {
          theme: 'frame-ui-theme',
          radius: 'frame-ui-radius',
          scaling: 'frame-ui-scaling',
        },
      };

      themeScript(params);

      expect(mockDocumentElement.setAttribute).toHaveBeenCalledWith('data-radius', radius);
    });
  });

  it('should apply all valid scaling values', () => {
    const scalingValues: Array<'90%' | '95%' | '100%' | '105%' | '110%'> = ['90%', '95%', '100%', '105%', '110%'];

    scalingValues.forEach((scaling) => {
      mockLocalStorage['frame-ui-scaling'] = scaling;

      const params: ThemeScriptParams = {
        enableSystemTheme: true,
        defaultTheme: 'light',
        defaultRadius: 'medium',
        defaultScaling: '100%',
        storageKeys: {
          theme: 'frame-ui-theme',
          radius: 'frame-ui-radius',
          scaling: 'frame-ui-scaling',
        },
      };

      themeScript(params);

      expect(mockDocumentElement.setAttribute).toHaveBeenCalledWith('data-scaling', scaling);
    });
  });
});
