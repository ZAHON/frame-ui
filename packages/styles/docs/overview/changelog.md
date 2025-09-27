# Changelog

## 0.3.0 (28.09.2025)

### 🚀 Features

- **Make spinner animation duration configurable.** Replaces the hardcoded `800ms` duration in the `spinner-leaf-fade` utility with a configurable CSS variable, allowing users to easily override the spinner's speed via the `--frame-ui-spinner-animation-duration` property.

- **Introduce surface color tokens for both themes.** Extends the core color palette in both light and dark themes with new semantic `surface` color variables. These tokens are mapped to Tailwind CSS utilities as `color-*-surface` (e.g., `bg-primary-surface`).

- **Enable system-wide font rendering optimization.** Adds `-webkit-font-smoothing: antialiased` and `-moz-osx-font-smoothing: grayscale` to the `:root` selector, ensuring smoother and sharper text rendering across all major browsers and operating systems.

- **Remove tap highlight color on mobile devices.** Adds `-webkit-tap-highlight-color: transparent` to the `:root` selector, eliminating the distracting default highlight that appears when interactive elements are tapped on touch-enabled devices for a cleaner mobile UX.

- **Disable pointer events on all SVG elements.** Adds `pointer-events: none` globally to all `<svg>` elements. This ensures click events are correctly passed through icons to their parent interactive elements (like buttons), improving overall usability.

## 0.2.0 (24.09.2025)

### 🚀 Features

- **Add `spinner-leaf-fade` animation utility.** Introduces a custom animation designed for spinner components, which provides a smooth leaf-fade effect.

## 0.1.0 (24.09.2025)

- **Initial release.**
