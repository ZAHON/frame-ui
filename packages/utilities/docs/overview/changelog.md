# Changelog

## 0.2.0 (24.09.2025)

### 🚀 Features

- **Add `twMerge` utility for custom Tailwind classes.** This function is a custom `tailwind-merge` instance configured to handle conflicting `frame-ui` and Tailwind CSS classes. It allows for the creation of more dynamic components without the risk of class duplication or unexpected style overrides.

- **Add `cn` utility for conditional class merging.** This helper combines the functionalities of `clsx` and `tailwind-merge`, enabling dynamic class composition for `frame-ui` components. It's the primary utility for managing component styling, allowing for conditional class application and intelligent conflict resolution.

- **Add `cva` utility for component variants.** This function, a re-export of `class-variance-authority`, provides a robust way to define reusable component variants based on props. It's a key building block for ensuring consistent and scalable component styles.

## 0.1.0 (24.09.2025)

- **Initial release.**
