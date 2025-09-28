import type { PropsOf, JSXOutput } from '@builder.io/qwik';

export interface SpinnerRootProps extends PropsOf<'span'> {
  /**
   * The size of the spinner.
   * @default "2"
   */
  size?: '1' | '2' | '3';

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
    state: {}
  ) => JSXOutput;
}
