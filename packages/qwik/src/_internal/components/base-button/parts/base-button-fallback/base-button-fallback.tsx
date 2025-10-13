import type { BaseButtonFallbackProps } from './base-button-fallback.types';
import { component$, Slot } from '@builder.io/qwik';
import { cn } from '@frame-ui/utilities';
import { Render } from '@/_internal/components/render';
import { baseButtonFallbackStyles } from './base-button-fallback.styles';
import { useBaseButtonContext } from '../../contexts';

/**
 * The content displayed when the base button is in the loading state.
 * This component is only rendered when the `loading` prop on `BaseButton.Root` is set to `true`.
 * Use this to place a loading indicator (like a spinner) inside the base button.
 * Renders a `<span>` element.
 */
export const BaseButtonFallback = component$<BaseButtonFallbackProps>((props) => {
  const { class: className, ...others } = props;

  const { shape, size, disabled, loading } = useBaseButtonContext();

  return (
    loading.value && (
      <Render
        as="span"
        data-disabled={disabled.value ? '' : undefined}
        data-loading={loading.value ? '' : undefined}
        class={cn(baseButtonFallbackStyles({ shape, size: size.value, className }))}
        state={{ disabled, loading }}
        defaultRender$={(props) => (
          <span {...props}>
            <Slot />
          </span>
        )}
        {...others}
      />
    )
  );
});
