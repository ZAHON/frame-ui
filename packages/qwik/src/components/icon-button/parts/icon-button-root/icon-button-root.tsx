import type { IconButtonRootProps } from './icon-button-root.types';
import { component$, useComputed$, Slot } from '@builder.io/qwik';
import { BaseButtonRoot } from '@/_internal/components/base-button/parts/base-button-root';

/**
 * Contains all the parts of an icon button.
 *
 * The sub-components (`IconButton.Content` and `IconButton.Fallback`) are **optional**
 * unless you utilize the `loading` prop.
 *
 * If the `loading` prop is **not used**, you can
 * place the icon button's content **directly inside** the `IconButton.Root` component.
 *
 * Renders a `<button>` element.
 *
 * Structure **required** when using the `loading` prop:
 * @example
 * ```tsx
 * <IconButton.Root>
 * 	<IconButton.Content />
 * 	<IconButton.Fallback />
 * </IconButton.Root>
 * ```
 *
 * Simple structure when the `loading` prop is **not used**:
 * @example
 * ```tsx
 * <IconButton.Root />
 * ```
 */
export const IconButtonRoot = component$<IconButtonRootProps>((props) => {
  const {
    size: _size = '2',
    variant: _variant = 'solid',
    color: _color = 'primary',
    highContrast: _highContrast = false,
    radius: _radius,
    disabled: _disabled = false,
    loading: _loading = false,
  } = props;

  const size = useComputed$(() => _size);
  const variant = useComputed$(() => _variant);
  const color = useComputed$(() => _color);
  const highContrast = useComputed$(() => _highContrast);
  const radius = useComputed$(() => _radius);
  const disabled = useComputed$(() => _disabled);
  const loading = useComputed$(() => _loading);

  return (
    <BaseButtonRoot
      shape="square"
      size={size.value}
      variant={variant.value}
      color={color.value}
      highContrast={highContrast.value}
      radius={radius.value}
      disabled={disabled.value}
      loading={loading.value}
      data-frame-ui-icon-button-root=""
      {...props}
    >
      <Slot />
    </BaseButtonRoot>
  );
});
