import type { ReadonlySignal } from '@builder.io/qwik';

export interface ThemeNodeContextValue {
  /**
   * A readonly signal holding the theme preference explicitly set
   * on the current `Theme.Node` component via the `theme` prop.
   */
  theme: ReadonlySignal<'light' | 'dark' | undefined>;

  /**
   * A readonly signal holding the border radius preference explicitly set on the current
   * `Theme.Node` component via the `radius` prop.
   */
  radius: ReadonlySignal<'none' | 'small' | 'medium' | 'large' | 'full' | undefined>;

  /**
   * A readonly signal holding the UI scaling factor explicitly set on the current
   * `Theme.Node` component via the `scaling` prop.
   */
  scaling: ReadonlySignal<'90%' | '95%' | '100%' | '105%' | '110%' | undefined>;
}
