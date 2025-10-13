import type { BaseButtonContentProps } from './base-button-content.types';
import { component$, Slot } from '@builder.io/qwik';
import { cn } from '@frame-ui/utilities';
import { Render } from '@/_internal/components/render';
import { baseButtonContentStyles } from './base-button-content.styles';
import { useBaseButtonContext } from '../../contexts';

/**
 * Contains the content for the base button.
 *
 * This component is **optional** when the base button is not expected to have a loading state.
 *
 * It is **required** when the `loading` prop is used on `BaseButton.Root`,
 * as its content will be automatically hidden while the base button is loading.
 *
 * Renders a `<span>` element.
 */
export const BaseButtonContent = component$<BaseButtonContentProps>((props) => {
  const { class: className, ...others } = props;

  const { shape, size, disabled, loading } = useBaseButtonContext();

  return (
    <Render
      as="span"
      aria-hidden={loading.value ? 'true' : undefined}
      data-disabled={disabled.value ? '' : undefined}
      data-loading={loading.value ? '' : undefined}
      class={cn(baseButtonContentStyles({ shape, size: size.value, className }))}
      state={{ disabled, loading }}
      defaultRender$={(props) => (
        <span {...props}>
          <Slot />
        </span>
      )}
      {...others}
    />
  );
});
