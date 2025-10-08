import type { ThemeContextValue } from './theme-context.types';
import { createContextId } from '@builder.io/qwik';

/**
 * Provides the internal context for the theme state, allowing descendant components
 * to access shared theme, radius, and scaling preferences, along with functions
 * to update them, without prop drilling.
 */
export const ThemeContext = createContextId<ThemeContextValue>('frame-ui-theme-context');
