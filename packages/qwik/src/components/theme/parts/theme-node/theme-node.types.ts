import type { PropsOf, ReadonlySignal, JSXOutput } from '@builder.io/qwik';

export interface ThemeNodeProps extends PropsOf<'div'> {
  /**
   * Overrides the theme setting (`"light"` or `"dark"`) inherited from the nearest
   * `Theme.Root` or parent `Theme.Node` component, applying it only within this node.
   * If set to `undefined`, the theme preference is inherited.
   * @default undefined
   */
  theme?: 'light' | 'dark';

  /**
   * Overrides the border radius setting inherited from the nearest `Theme.Root`
   * or parent `Theme.Node` component, applying it only within this node's scope.
   * If set to `undefined`, the radius preference is inherited.
   * @default undefined
   */
  radius?: 'none' | 'small' | 'medium' | 'large' | 'full';

  /**
   * Overrides the UI scaling factor inherited from the nearest `Theme.Root`
   * or parent `Theme.Node` component, applying it only within this node's scope.
   * If set to `undefined`, the scaling preference is inherited.
   * @default undefined
   */
  scaling?: '90%' | '95%' | '100%' | '105%' | '110%';

  /**
   * Whether to apply the themes background color to the theme node.
   * @default true
   */
  hasBackground?: boolean;

  /**
   * Allows you to replace the component’s HTML element with a different tag, or compose it with another component.
   * Read our [Composition](https://github.com/ZAHON/frame-ui/tree/main/packages/qwik/docs/guides/composition.md) guide for more details.
   * @default undefined
   */
  render$?: (
    /**
     * These are the standard HTML attributes and properties that should be applied to your custom rendered element.
     * Spreading these props ensures that your component maintains its intended behavior, accessibility features, and proper integration with the DOM.
     */
    props: Record<string, unknown>,

    /**
     * An object that provides access to the internal state of the component.
     */
    state: {
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
  ) => JSXOutput;
}
