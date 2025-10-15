import { useContext } from '@builder.io/qwik';
import { ThemeNodeContext } from '../../contexts';

/**
 * A hook to access the context provided by the nearest ancestor `Theme.Node` component.
 */
export const useThemeNodeContext = () => {
  const { theme, radius, scaling } = useContext(ThemeNodeContext);

  return {
    /**
     * A readonly signal holding the theme preference explicitly set
     * on the current `Theme.Node` component via the `theme` prop.
     */
    theme: theme,

    /**
     * A readonly signal holding the border radius preference explicitly set on the current
     * `Theme.Node` component via the `radius` prop.
     */
    radius: radius,

    /**
     * A readonly signal holding the UI scaling factor explicitly set on the current
     * `Theme.Node` component via the `scaling` prop.
     */
    scaling: scaling,
  };
};
