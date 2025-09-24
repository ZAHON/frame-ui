import type { ClassValue } from 'clsx';
import { clsx } from 'clsx';
import { twMerge } from '../tw-merge';

/**
 * A utility function to conditionally join Tailwind CSS class names.
 *
 * This helper combines the functionalities of `clsx` and `tailwind-merge`.
 * It enables dynamic class composition by allowing conditional class inputs
 * and then intelligently merges them, resolving any potential conflicts
 * by using the `twMerge` utility from the `frame-ui` library.
 *
 * This is the primary function for constructing class strings for all `frame-ui` components.
 */
export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};
