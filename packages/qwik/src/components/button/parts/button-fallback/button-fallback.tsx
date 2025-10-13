import type { ButtonFallbackProps } from './button-fallback.types';
import { component$, useComputed$, Slot } from '@builder.io/qwik';
import { BaseButtonFallback } from '@/_internal/components/base-button/parts/base-button-fallback';

/**
 * The content displayed when the button is in the loading state.
 *
 * This component is **optional** and is primarily used to display a **loading indicator** (like a spinner) inside the button.
 *
 * It is **only rendered** when the `loading` prop on `Button.Root` is set to `true`.
 *
 * Renders a `<span>` element.
 */
export const ButtonFallback = component$<ButtonFallbackProps>((props) => {
  const { forceMount: _forceMount, ...others } = props;

  const forceMount = useComputed$(() => _forceMount);

  return (
    <BaseButtonFallback forceMount={forceMount.value} data-frame-ui-button-fallback="" {...others}>
      <Slot />
    </BaseButtonFallback>
  );
});
