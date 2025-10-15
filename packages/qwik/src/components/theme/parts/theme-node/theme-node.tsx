import type { ThemeNodeProps } from './theme-node.types';
import { component$, useComputed$, useContextProvider, Slot } from '@builder.io/qwik';
import { cn } from '@frame-ui/utilities';
import { Render } from '@/_internal';
import { themeNodeStyles } from './theme-node.styles';
import { ThemeNodeContext } from '../../contexts';

/**
 * A container that can locally override the theme, radius, and scaling
 * preferences for all nested components.
 *
 * Renders a `<div>` element.
 */
export const ThemeNode = component$<ThemeNodeProps>((props) => {
  const {
    theme: _theme,
    radius: _radius,
    scaling: _scaling,
    hasBackground = true,
    class: className,
    ...others
  } = props;

  const theme = useComputed$(() => _theme);
  const radius = useComputed$(() => _radius);
  const scaling = useComputed$(() => _scaling);

  useContextProvider(ThemeNodeContext, { theme, radius, scaling });

  return (
    <Render
      as="div"
      data-frame-ui-theme-node=""
      data-theme={theme.value}
      data-radius={radius.value}
      data-scaling={scaling.value}
      class={cn(themeNodeStyles({ hasBackground, className }))}
      state={{ theme, radius, scaling }}
      defaultRender$={(props) => (
        <div {...props}>
          <Slot />
        </div>
      )}
      {...others}
    />
  );
});
