import type { ThemeNodeContextValue } from './theme-node-context.types';
import { createContextId } from '@builder.io/qwik';

/**
 * This context is used to provide the locally defined and effective theme, radius,
 * and scaling preferences to all descendant components within a `Theme.Node` boundary.
 */
export const ThemeNodeContext = createContextId<ThemeNodeContextValue>('frame-ui-theme-node-context');
