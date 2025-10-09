import { useContext } from '@builder.io/qwik';
import { BaseButtonContext } from '@/_internal/components/base-button/contexts/base-button-context';

/**
 * A hook that provides direct access to the `Button` component's internal context,
 * allowing descendant components to utilize the shared state.
 */
export const useButtonContext = () => {
  const { disabled, loading } = useContext(BaseButtonContext);

  return {
    /**
     * A readonly signal that indicates whether the button is disabled.
     * Its value is `true` if the button is disabled, preventing user interaction.
     */
    disabled: disabled,

    /**
     * A readonly signal that indicates whether the button is in a pending state.
     * Its value is `true` if the button is currently loading.
     */
    loading: loading,
  };
};
