import type { VisuallyHiddenRootProps } from './visually-hidden-root.types';
import { component$, Slot } from '@builder.io/qwik';
import { cn } from '@frame-ui/utilities';
import { Render } from '@/_internal';
import { visuallyHiddenRootStyles } from './visually-hidden-root.styles';

/**
 * Anything you put inside this component will be hidden from the screen but will be announced by screen readers.
 *
 * Renders a `<span>` element.
 *
 * @example
 * ```tsx
 * <VisuallyHidden.Root />
 * ```
 */
export const VisuallyHiddenRoot = component$<VisuallyHiddenRootProps>((props) => {
  const { class: className, ...others } = props;

  return (
    <Render
      as="span"
      data-frame-ui-visually-hidden-root=""
      class={cn(visuallyHiddenRootStyles({ className }))}
      defaultRender$={(props) => (
        <span {...props}>
          <Slot />
        </span>
      )}
      {...others}
    />
  );
});
