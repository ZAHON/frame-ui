import type { PropsOf, ReadonlySignal, JSXOutput } from '@builder.io/qwik';

export interface IconButtonRootProps extends PropsOf<'button'> {
  /**
   * The size of the icon button.
   * @default "2"
   */
  size?: '1' | '2' | '3' | '4';

  /**
   * The visual style of the icon button.
   * @default "solid"
   */
  variant?: 'solid' | 'soft' | 'surface' | 'outline' | 'ghost';

  /**
   * The color of the icon button.
   * @default "primary"
   */
  color?: 'default' | 'primary' | 'success' | 'warning' | 'danger';

  /**
   * If `true`, the icon button will use a higher contrast color palette.
   * @default false
   */
  highContrast?: boolean;

  /**
   * Overrides the radius inherited from the theme.
   * @default undefined
   */
  radius?: 'none' | 'small' | 'medium' | 'large' | 'full';

  /**
   * When `true`, prevents the user from interacting with the icon button.
   * @default false
   */
  disabled?: boolean;

  /**
   * If `true`, the icon button is put into a pending state.
   * This action automatically disables user interaction, hides the regular content, and renders the fallback content.
   * @default false
   */
  loading?: boolean;

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
       * A readonly signal that indicates whether the icon button is disabled.
       * Its value is `true` if the icon button is disabled, preventing user interaction.
       */
      disabled: ReadonlySignal<boolean>;

      /**
       * A readonly signal that indicates whether the icon button is in a pending state.
       * Its value is `true` if the icon button is currently loading.
       */
      loading: ReadonlySignal<boolean>;
    }
  ) => JSXOutput;
}
