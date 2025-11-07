import { useContext } from '@builder.io/qwik';
import { BaseButtonContext } from '@/_internal/components/base-button/contexts/base-button-context';

/**
 * A hook that provides direct access to the `IconButton` component's internal context,
 * allowing descendant components to utilize the shared state.
 */
export const useIconButtonContext = () => {
  const { disabled, loading } = useContext(BaseButtonContext);

  return {
    /**
     * A readonly signal that indicates whether the icon button is disabled.
     * Its value is `true` if the icon button is disabled, preventing user interaction.
     */
    disabled: disabled,

    /**
     * A readonly signal that indicates whether the icon button is in a pending state.
     * Its value is `true` if the icon button is currently loading.
     */
    loading: loading,
  };
};
