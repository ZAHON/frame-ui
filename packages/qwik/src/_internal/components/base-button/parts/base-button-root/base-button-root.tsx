import type { BaseButtonRootProps } from './base-button-root.types';
import { component$, useComputed$, useContextProvider, Slot } from '@builder.io/qwik';
import { cn } from '@frame-ui/utilities';
import { Render } from '@/_internal';
import { baseButtonRootStyles } from './base-button-root.styles';
import { BaseButtonContext } from '../../contexts';

/**
 * Contains all the parts of a base button.
 * The sub-components (`BaseButton.Content` and `BaseButton.Fallback`) are optional
 * unless you utilize the `loading` prop. If the `loading` prop is not used, you can
 * place the base button's content directly inside the `BaseButton.Root` component.
 * Renders a `<button>` element.
 *
 * Structure required when using the `loading` prop:
 * @example
 * ```tsx
 * <BaseButton.Root>
 * 	<BaseButton.Content />
 * 	<BaseButton.Fallback />
 * </BaseButton.Root>
 * ```
 *
 * Simple structure when the `loading` prop is not used:
 * @example
 * ```tsx
 * <BaseButton.Root />
 * ```
 */
export const BaseButtonRoot = component$<BaseButtonRootProps>((props) => {
  const {
    shape,
    size: _size = '2',
    variant = 'solid',
    color = 'primary',
    highContrast = false,
    radius,
    disabled: _disabled = false,
    loading: _loading = false,
    class: className,
    ...others
  } = props;

  const size = useComputed$(() => _size);
  const disabled = useComputed$(() => _disabled);
  const loading = useComputed$(() => _loading);

  useContextProvider(BaseButtonContext, { shape, size, disabled, loading });

  return (
    <Render
      as="button"
      type="button"
      disabled={disabled.value || loading.value}
      data-radius={radius}
      data-disabled={disabled.value ? '' : undefined}
      data-loading={loading.value ? '' : undefined}
      class={cn(baseButtonRootStyles({ shape, size: size.value, variant, color, highContrast, className }))}
      state={{ disabled, loading }}
      defaultRender$={(props) => (
        <button {...props}>
          <Slot />
        </button>
      )}
      {...others}
    />
  );
});
