import type { SpinnerRootProps } from './spinner-root.types';
import { component$, Slot } from '@builder.io/qwik';
import { cn } from '@frame-ui/utilities';
import { Render } from '@/_internal';
import { spinnerRootStyles } from './spinner-root.styles';

/**
 * Contains all the parts of a spinner.
 * Renders a `<span>` element.
 *
 * @example
 * ```tsx
 * <Spinner.Root>
 * 	{([0, 1, 2, 3, 4, 5, 6, 7] as const).map((index) => (
 * 		<Spinner.Leaf key={index} index={index} />
 * 	))}
 * </Spinner.Root>
 * ```
 */
export const SpinnerRoot = component$<SpinnerRootProps>((props) => {
  const { size = '2', class: className, ...others } = props;

  return (
    <Render
      as="span"
      aria-hidden="true"
      data-frame-ui-spinner-root=""
      class={cn(spinnerRootStyles({ size, className }))}
      defaultRender$={(props) => (
        <span {...props}>
          <Slot />
        </span>
      )}
      {...others}
    />
  );
});
