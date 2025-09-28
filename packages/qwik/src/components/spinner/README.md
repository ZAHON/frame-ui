# Spinner

Displays an animated loading indicator.

### Import

```tsx
import { Spinner } from '@frame-ui/qwik';
```

### Anatomy

Import the component and piece the parts together.

```tsx
import { component$ } from '@builder.io/qwik';
import { Spinner } from '@frame-ui/qwik';

export const Demo = component$(() => {
  return (
    <Spinner.Root>
      {([0, 1, 2, 3, 4, 5, 6, 7] as const).map((index) => (
        <Spinner.Leaf key={index} index={index} />
      ))}
    </Spinner.Root>
  );
});
```

## Rendered elements

Each of `Spinner`'s subcomponents renders a default HTML element that makes sense for its role. This overview outlines the default element rendered by each part of the component. You can customize these elements using the `render$` prop, as shown in the [Rendering different elements](#rendering-different-elements) example.

| Component      | Default rendered element |
| :------------- | :----------------------- |
| `Spinner.Root` | `<span>`                 |
| `Spinner.Leaf` | `<span>`                 |

## API Reference

This section provides a detailed reference for all component props, types, and default values for the `Spinner.Root` and `Spinner.Leaf` subcomponents. The required props are marked with an asterisk.

### Spinner.Root

Contains all the parts of a spinner. Renders a `<span>` element.

| Prop      | Type                                                       | Default | Description                                                                                                                                                                                                                                         |
| :-------- | :--------------------------------------------------------- | :------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `size`    | `"1" \| "2" \| "3"`                                        | `"2"`   | The size of the spinner.                                                                                                                                                                                                                            |
| `render$` | `(props: Record<string, unknown>, state: {}) => JSXOutput` | `-`     | Allows you to replace the component’s HTML element with a different tag, or compose it with another component. Read our [Composition](https://github.com/ZAHON/frame-ui/tree/main/packages/qwik/docs/guides/composition.md) guide for more details. |

### Spinner.Leaf

A single animated leaf of the spinner component. Renders a `<span>` element.

| Prop      | Type                                                       | Default | Description                                                                                                                                                                                                                                         |
| :-------- | :--------------------------------------------------------- | :------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `index*`  | `0 \| 1 \| 2 \| 3 \| 4 \| 5 \| 6 \| 7`                     | `-`     | A unique, required index (0-7) for each spinner leaf. It is used to correctly position the leaf around the center and sequence its individual animation timing.                                                                                     |
| `render$` | `(props: Record<string, unknown>, state: {}) => JSXOutput` | `-`     | Allows you to replace the component’s HTML element with a different tag, or compose it with another component. Read our [Composition](https://github.com/ZAHON/frame-ui/tree/main/packages/qwik/docs/guides/composition.md) guide for more details. |

## Examples

The following examples demonstrate how to utilize the component's key properties to customize the spinner's appearance and behavior, covering size variations, styling with Tailwind CSS, and advanced composition using the `render$` prop.

### Size

Use the `size` prop to control the size of the spinner.

```tsx
import { component$ } from '@builder.io/qwik';
import { Spinner } from '@frame-ui/qwik';

export const Demo = component$(() => {
  return (
    <div class="flex items-center justify-center gap-x-3">
      <Spinner.Root size="1">
        {([0, 1, 2, 3, 4, 5, 6, 7] as const).map((index) => (
          <Spinner.Leaf key={index} index={index} />
        ))}
      </Spinner.Root>

      <Spinner.Root size="2">
        {([0, 1, 2, 3, 4, 5, 6, 7] as const).map((index) => (
          <Spinner.Leaf key={index} index={index} />
        ))}
      </Spinner.Root>

      <Spinner.Root size="3">
        {([0, 1, 2, 3, 4, 5, 6, 7] as const).map((index) => (
          <Spinner.Leaf key={index} index={index} />
        ))}
      </Spinner.Root>
    </div>
  );
});
```

### Passing Tailwind CSS classes

All parts of the `Spinner` component support passing standard Tailwind CSS utility classes via the `class` prop.

For example, by applying a `text-*` utility class to the `Spinner.Root`, you can quickly override the default color. Additionally, you can customize the spinner's speed by overriding the `--frame-ui-spinner-animation-duration` CSS variable within the `class` prop (e.g., setting the duration to `1000ms` as shown below).

```tsx
import { component$ } from '@builder.io/qwik';
import { Spinner } from '@frame-ui/qwik';

export const Demo = component$(() => {
  return (
    <div class="flex items-center justify-center">
      <Spinner.Root class="text-primary-solid-9 [--frame-ui-spinner-animation-duration:1000ms]">
        {([0, 1, 2, 3, 4, 5, 6, 7] as const).map((index) => (
          <Spinner.Leaf key={index} index={index} />
        ))}
      </Spinner.Root>
    </div>
  );
});
```

### Rendering different elements

By default, the `Spinner`'s subcomponents each render a sensible HTML element. For example, both `Spinner.Root` and `Spinner.Leaf` render a `<span>`. For a complete overview of these default elements, refer to the [Rendered elements](#rendered-elements) section.

You can customize the underlying HTML element rendered by these subcomponents, or even compose them with other components from your library or your own custom Qwik components, by using the `render$` prop. This provides immense flexibility, allowing you to:

- Replace the default HTML tag (e.g., changing the `Spinner.Root` from a `<span>` to a `<div>`).

- Integrate with other components from your library or your custom Qwik components. This allows you to wrap the core spinner logic with custom styles or behaviors while ensuring the component's core logic and accessibility features remain intact.

When using the `render$` prop, always spread the provided `props` object onto your custom element or component. This ensures that all essential attributes (like ARIA roles, IDs, and event handlers) are correctly applied, maintaining the component's intended behavior and accessibility.

```tsx
import { component$, Slot } from '@builder.io/qwik';
import { Spinner } from '@frame-ui/qwik';

export const Demo = component$(() => {
  return (
    <div class="flex items-center justify-center">
      <Spinner.Root
        render$={(props) => (
          <div {...props}>
            <Slot />
          </div>
        )}
      >
        {([0, 1, 2, 3, 4, 5, 6, 7] as const).map((index) => (
          <Spinner.Leaf key={index} index={index} />
        ))}
      </Spinner.Root>
    </div>
  );
});
```
