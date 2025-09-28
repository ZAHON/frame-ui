import type { JSXOutput, PropsOf } from '@builder.io/qwik';

export type Tag = 'span';

export type RenderProps<T extends Tag, S extends Record<string, unknown> = {}> = {
  /**
   * A string literal type used primarily for **type inference** to correctly
   * type the HTML attributes (`PropsOf<T>`) associated with the specified tag.
   * While it suggests a desired HTML element, the actual rendered element
   * depends on the implementation of `defaultRender$` or `render$`.
   */
  as: T;

  /**
   * The state of the component.
   * It will be used as a parameter for the `render$` callback.
   * @default {}
   */
  state?: S;

  /**
   * This prop defines the default rendering logic for the component.
   * It will be used if the `render$` prop is not provided.
   */
  defaultRender$: (props: Record<string, unknown>) => JSXOutput;

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
    state: S
  ) => JSXOutput;
} & PropsOf<T>;
