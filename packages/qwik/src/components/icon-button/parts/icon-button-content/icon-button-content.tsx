import type { IconButtonContentProps } from './icon-button-content.types';
import { component$, Slot } from '@builder.io/qwik';
import { BaseButtonContent } from '@/_internal/components/base-button/parts/base-button-content';

/**
 * Contains the content for the icon button.
 *
 * This component is **optional** when the icon button is not expected to have a loading state.
 *
 * It is **required** when the `loading` prop is used on `IconButton.Root`,
 * as its content will be automatically hidden while the icon button is loading.
 *
 * Renders a `<span>` element.
 */
export const IconButtonContent = component$<IconButtonContentProps>((props) => {
  return (
    <BaseButtonContent data-frame-ui-icon-button-content="" {...props}>
      <Slot />
    </BaseButtonContent>
  );
});
