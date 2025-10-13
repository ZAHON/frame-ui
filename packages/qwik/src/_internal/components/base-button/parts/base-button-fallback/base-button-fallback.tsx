import type { BaseButtonFallbackProps } from './base-button-fallback.types';
import { component$, Slot } from '@builder.io/qwik';
import { cn } from '@frame-ui/utilities';
import { Render } from '@/_internal/components/render';
import { baseButtonFallbackStyles } from './base-button-fallback.styles';
import { useBaseButtonContext } from '../../contexts';

/**
 * The content displayed when the base button is in the loading state.
 *
 * By default, this component is **only rendered** when the `loading` prop on `BaseButton.Root`
 * is set to `true`.
 *
 * Use the `forceMount` prop to **always** render the fallback content
 * even when the base button is not loading.
 *
 * Renders a `<span>` element.
 */
export const BaseButtonFallback = component$<BaseButtonFallbackProps>((props) => {
  const { forceMount, class: className, ...others } = props;

  const { shape, size, disabled, loading } = useBaseButtonContext();

  return (
    (forceMount || loading.value) && (
      <Render
        as="span"
        aria-hidden={forceMount && !loading.value ? 'true' : undefined}
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
