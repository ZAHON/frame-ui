import type { BaseButtonContextValue } from './base-button-context.types';
import { createContextId, useContext } from '@builder.io/qwik';

/**
 * Provides the internal context for the `BaseButton` component, allowing descendant
 * components to access shared properties and readonly signals without prop drilling.
 */
export const BaseButtonContext = createContextId<BaseButtonContextValue>('frame-ui-base-button-context');

/**
 * A hook that provides direct access to the `BaseButton` component's internal context,
 * allowing descendant components to utilize the shared state.
 */
export const useBaseButtonContext = () => {
  const context = useContext(BaseButtonContext);

  return context;
};
