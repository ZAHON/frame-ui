import type { PropsOf, ReadonlySignal, JSXOutput } from '@builder.io/qwik';

export interface ButtonFallbackProps extends PropsOf<'span'> {
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
       * A readonly signal that indicates whether the button is disabled.
       * Its value is `true` if the button is disabled, preventing user interaction.
       */
      disabled: ReadonlySignal<boolean>;

      /**
       * A readonly signal that indicates whether the button is in a pending state.
       * Its value is `true` if the button is currently loading.
       */
      loading: ReadonlySignal<boolean>;
    }
  ) => JSXOutput;
}
