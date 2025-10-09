import type { ButtonContentProps } from './button-content.types';
import { component$, Slot } from '@builder.io/qwik';
import { BaseButtonContent } from '@/_internal/components/base-button/parts/base-button-content';

/**
 * Contains the content for the button.
 * This component is optional when the button is not expected to have a loading state.
 * It is required when the `loading` prop is used on `Button.Root`,
 * as its content will be automatically hidden while the button is loading.
 * Renders a `<span>` element.
 */
export const ButtonContent = component$<ButtonContentProps>((props) => {
  return (
    <BaseButtonContent data-frame-ui-button-content {...props}>
      <Slot />
    </BaseButtonContent>
  );
});
