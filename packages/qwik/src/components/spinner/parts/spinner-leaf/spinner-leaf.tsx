import type { SpinnerLeafProps } from './spinner-leaf.types';
import { component$, Slot } from '@builder.io/qwik';
import { cn } from '@frame-ui/utilities';
import { spinnerLeafStyles } from './spinner-leaf.styles';
import { Render } from '@/_internal';

/**
 * A single animated leaf of the spinner component.
 *
 * Renders a `<span>` element.
 */
export const SpinnerLeaf = component$<SpinnerLeafProps>((props) => {
  const { index, class: className, ...others } = props;

  return (
    <Render
      as="span"
      aria-hidden="true"
      data-frame-ui-spinner-leaf=""
      class={cn(spinnerLeafStyles({ index, className }))}
      defaultRender$={(props) => (
        <span {...props}>
          <Slot />
        </span>
      )}
      {...others}
    />
  );
});
