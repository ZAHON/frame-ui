import { extendTailwindMerge } from 'tailwind-merge';

/**
 * A core utility function for the `frame-ui` component library.
 *
 * This function is a custom instance of `tailwind-merge` specifically configured to support
 * the design system of `frame-ui`. It intelligently merges multiple Tailwind CSS and
 * `frame-ui` class names into a single string, resolving conflicts by ensuring the last
 * class in the sequence takes precedence.
 *
 * It is essential for building robust and dynamic `frame-ui` components where classes
 * are conditionally applied or passed as props, preventing class duplication and
 * unexpected style overrides.
 */
export const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'font-size': [{ text: ['1', '2', '3', '4', '5', '6', '7', '8', '9'] }],
      leading: [{ 'leading-level': ['1', '2', '3', '4', '5', '6', '7', '8', '9'] }],
      tracking: [{ tracking: ['1', '2', '3', '4', '5', '6', '7', '8', '9'] }],
      rounded: [{ rounded: ['1', '2', '3', '4', '5', '6'] }],
      shadow: [{ shadow: ['1', '2', '3', '4', '5', '6'] }],
      ease: [
        {
          ease: [
            'smooth',
            'in-quad',
            'in-cubic',
            'in-quart',
            'in-quint',
            'in-expo',
            'in-circ',
            'out-quad',
            'out-cubic',
            'out-quart',
            'out-quint',
            'out-expo',
            'out-circ',
            'in-out-quad',
            'in-out-cubic',
            'in-out-quart',
            'in-out-quint',
            'in-out-expo',
            'in-out-circ',
          ],
        },
      ],
    },
  },
});
