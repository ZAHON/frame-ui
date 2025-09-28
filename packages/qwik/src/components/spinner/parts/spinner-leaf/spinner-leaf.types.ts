import type { PropsOf, JSXOutput } from '@builder.io/qwik';

export interface SpinnerLeafProps extends PropsOf<'span'> {
  /**
   * A unique, required index (0-7) for each spinner leaf.
   * It is used to correctly position the leaf around the center and sequence its individual animation timing.
   */
  index: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;

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
