import type { ThemeRootProps } from './theme-root.types';
import {
  component$,
  useSignal,
  useConstant,
  $,
  useOnWindow,
  useVisibleTask$,
  useContextProvider,
  Slot,
} from '@builder.io/qwik';
import { isDev, isServer } from '@builder.io/qwik/build';
import { error } from '@/_internal';
import {
  disableAnimation,
  getSystemTheme,
  saveToLocalStorage,
  validateStorageValue,
  getValidValue,
} from '../../utilities';
import { themeScript } from '../../scripts';
import { ThemeContext } from '../../contexts';

const THEMES = ['light', 'dark', 'system'] as const;
const RADIUSES = ['none', 'small', 'medium', 'large', 'full'] as const;
const SCALINGS = ['90%', '95%', '100%', '105%', '110%'] as const;

/**
 * Contains all the configuration and context necessary for the theming system to work.
 *
 * Doesn’t render its own HTML element.
 *
 * @example
 * ```tsx
 * <Theme.Root />
 * ```
 */
export const ThemeRoot = component$<ThemeRootProps>((props) => {
  const {
    enableSystemTheme = true,
    defaultTheme = enableSystemTheme ? 'system' : 'light',
    defaultRadius = 'medium',
    defaultScaling = '100%',
    disableTransitionOnThemeChange = true,
    nonce,
    scriptProps,
    strategy = 'document-idle',
    storageKeys: _storageKeys,
  } = props;

  const theme = useSignal<'light' | 'dark' | 'system' | undefined>(undefined);
  const resolvedTheme = useSignal<'light' | 'dark' | 'system' | undefined>(undefined);
  const radius = useSignal<'none' | 'small' | 'medium' | 'large' | 'full' | undefined>(undefined);
  const scaling = useSignal<'90%' | '95%' | '100%' | '105%' | '110%' | undefined>(undefined);

  const storageKeys = useConstant(() => ({
    theme: 'frame-ui-theme',
    radius: 'frame-ui-radius',
    scaling: 'frame-ui-scaling',
    ..._storageKeys,
  }));

  const applyTheme$ = $((theme: 'light' | 'dark' | 'system') => {
    let resolved = theme;
    if (!resolved) return;

    if (theme === 'system') {
      resolved = getSystemTheme();
    }

    const enableAnimation = disableTransitionOnThemeChange ? disableAnimation(nonce) : null;

    document.documentElement.setAttribute('data-theme', resolved);

    enableAnimation?.();
  });

  const setTheme$ = $((newTheme: 'light' | 'dark' | 'system') => {
    if (isDev && isServer) {
      error(
        `The 'setTheme$' QRL function from the 'useThemeContext' hook cannot be called during server-side rendering (SSR).`,
        `Ensure it's only invoked in the browser environment.`
      );
    }

    if (newTheme === theme.value) return;

    theme.value = newTheme;
    resolvedTheme.value = newTheme === 'system' ? getSystemTheme() : newTheme;

    applyTheme$(newTheme);
    saveToLocalStorage({ storageKey: storageKeys.theme, value: newTheme });
  });

  const setRadius$ = $((newRadius: 'none' | 'small' | 'medium' | 'large' | 'full') => {
    if (isDev && isServer) {
      error(
        `The 'setRadius$' QRL function from the 'useThemeContext' hook cannot be called during server-side rendering (SSR).`,
        `Ensure it's only invoked in the browser environment.`
      );
    }

    if (newRadius === radius.value) return;

    radius.value = newRadius;

    document.documentElement.setAttribute('data-radius', newRadius);
    saveToLocalStorage({ storageKey: storageKeys.radius, value: newRadius });
  });

  const setScaling$ = $((newScaling: '90%' | '95%' | '100%' | '105%' | '110%') => {
    if (isDev && isServer) {
      error(
        `The 'setScaling$' QRL function from the 'useThemeContext' hook cannot be called during server-side rendering (SSR).`,
        `Ensure it's only invoked in the browser environment.`
      );
    }

    if (newScaling === scaling.value) return;

    scaling.value = newScaling;

    document.documentElement.setAttribute('data-scaling', newScaling);
    saveToLocalStorage({ storageKey: storageKeys.scaling, value: newScaling });
  });

  const handleStorage$ = $((event: StorageEvent) => {
    const { key, newValue } = event;

    switch (key) {
      case storageKeys.theme: {
        const newTheme = validateStorageValue({
          value: newValue,
          validValues: THEMES,
          defaultValue: defaultTheme,
        });

        theme.value = newTheme;
        resolvedTheme.value = newTheme === 'system' ? getSystemTheme() : newTheme;

        applyTheme$(newTheme);

        return;
      }
      case storageKeys.radius: {
        const newRadius = validateStorageValue({
          value: newValue,
          validValues: RADIUSES,
          defaultValue: defaultRadius,
        });

        radius.value = newRadius;

        document.documentElement.setAttribute('data-radius', newRadius);

        return;
      }
      case storageKeys.scaling: {
        const newScaling = validateStorageValue({
          value: newValue,
          validValues: SCALINGS,
          defaultValue: defaultScaling,
        });

        scaling.value = newScaling;

        document.documentElement.setAttribute('data-scaling', newScaling);

        return;
      }
      default: {
        return;
      }
    }
  });

  useOnWindow('storage', handleStorage$);

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(
    ({ cleanup }) => {
      theme.value = getValidValue({
        storageKey: storageKeys.theme,
        validValues: THEMES,
        defaultValue: defaultTheme,
      });

      radius.value = getValidValue({
        storageKey: storageKeys.radius,
        validValues: RADIUSES,
        defaultValue: defaultRadius,
      });

      scaling.value = getValidValue({
        storageKey: storageKeys.scaling,
        validValues: SCALINGS,
        defaultValue: defaultScaling,
      });

      const handleMediaQuery = (colorSchemeQuery: MediaQueryList | MediaQueryListEvent) => {
        resolvedTheme.value = getSystemTheme(colorSchemeQuery);

        if (theme.value === 'system' && enableSystemTheme) {
          applyTheme$('system');
        }
      };

      const media = window.matchMedia('(prefers-color-scheme: dark)');

      handleMediaQuery(media);

      if (media.addListener) {
        media.addListener(handleMediaQuery);
      } else {
        media.addEventListener('change', handleMediaQuery);
      }

      cleanup(() => {
        if (media.removeListener) {
          media.removeListener(handleMediaQuery);
        } else {
          media.removeEventListener('change', handleMediaQuery);
        }
      });
    },
    { strategy }
  );

  useContextProvider(ThemeContext, { theme, resolvedTheme, radius, scaling, setTheme$, setRadius$, setScaling$ });

  return (
    <>
      <script
        nonce={nonce}
        dangerouslySetInnerHTML={`(${themeScript.toString()})(${JSON.stringify({
          enableSystemTheme,
          defaultTheme,
          defaultRadius,
          defaultScaling,
          storageKeys,
        })})`}
        {...scriptProps}
      />
      <Slot />
    </>
  );
});
