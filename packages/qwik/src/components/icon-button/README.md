# Icon Button

Button designed specifically for usage with a single icon.

### Import

```tsx
import { IconButton, useIconButtonContext } from '@frame-ui/qwik';
```

### Anatomy

Import the component and piece the parts together.

> [!NOTE]
> The sub-components ([`IconButton.Content`](#iconbuttoncontent) and [`IconButton.Fallback`](#iconbuttonfallback)) are **optional** unless you utilize the `loading` prop. If the `loading` prop is **not used**, you can place the icon button's content directly inside the [`IconButton.Root`](#iconbuttonroot) component.

```tsx
import { component$ } from '@builder.io/qwik';
import { Button } from '@frame-ui/qwik';

const Demo = component$(() => {
  return (
    <IconButton.Root>
      <IconButton.Content />
      <IconButton.Fallback />
    </IconButton.Root>
  );
});
```

## Rendered elements

Each of `IconButton`'s subcomponents renders a default HTML element that makes sense for its role. This overview outlines the default element rendered by each part of the component. You can customize these elements using the `render$` prop, as shown in the [Rendering different elements](#rendering-different-elements) example.

| Component             | Default rendered element |
| :-------------------- | :----------------------- |
| `IconButton.Root`     | `<button>`               |
| `IconButton.Content`  | `<span>`                 |
| `IconButton.Fallback` | `<span>`                 |

## API Reference

This section provides a comprehensive overview of the `IconButton` component's API, detailing all available props, subcomponents (like `IconButton.Content` and `IconButton.Fallback`), data attributes, and the `useIconButtonContext` hook. It's the essential reference for developers who want to fully configure and interact with the icon button's appearance and behavior, including its size, color, loading state, and styling based on its functional status.

### IconButton.Root

Contains all the parts of a button. Renders a `<button>` element.

| Prop           | Type                                                                                                                            | Default     | Description                                                                                                                                                                                                                                         |
| :------------- | :------------------------------------------------------------------------------------------------------------------------------ | :---------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `size`         | `"1" \| "2" \| "3" \| "4"`                                                                                                      | `"2"`       | The size of the icon button.                                                                                                                                                                                                                        |
| `variant`      | `"solid" \| "soft" \| "surface" \| "outline" \| "ghost"`                                                                        | `"solid"`   | The visual style of the icon button.                                                                                                                                                                                                                |
| `color`        | `"default" \| "primary" \| "success" \| "warning" \| "danger"`                                                                  | `"primary"` | The color of the icon button.                                                                                                                                                                                                                       |
| `highContrast` | `boolean`                                                                                                                       | `false`     | If `true`, the icon button will use a higher contrast color palette.                                                                                                                                                                                |
| `radius`       | `"none" \| "small" \| "medium" \| "large" \| "full"`                                                                            | `-`         | Overrides the radius inherited from the theme.                                                                                                                                                                                                      |
| `disabled`     | `boolean`                                                                                                                       | `false`     | When `true`, prevents the user from interacting with the icon button.                                                                                                                                                                               |
| `loading`      | `boolean`                                                                                                                       | `false`     | If `true`, the icon button is put into a pending state. This action automatically disables user interaction, hides the regular content, and renders the fallback content.                                                                           |
| `render$`      | `(props: Record<string, unknown>, state: { disabled: ReadonlySignal<boolean>; loading: ReadonlySignal<boolean> }) => JSXOutput` | `-`         | Allows you to replace the component’s HTML element with a different tag, or compose it with another component. Read our [Composition](https://github.com/ZAHON/frame-ui/tree/main/packages/qwik/docs/guides/composition.md) guide for more details. |

| Data attribute  | Values | Description                                                                            |
| :-------------- | :----- | :------------------------------------------------------------------------------------- |
| `data-disabled` | `-`    | Present when the icon button is disabled and cannot be interacted with.                |
| `data-loading`  | `-`    | Present when the icon button is in a pending state and displays the loading indicator. |

### IconButton.Content

Contains the content for the icon button. This component is **optional** when the icon button is not expected to have a loading state. It is **required** when the `loading` prop is used on `IconButton.Root`, as its content will be automatically hidden while the icon button is loading. Renders a `<span>` element.

| Prop      | Type                                                                                                                            | Default | Description                                                                                                                                                                                                                                         |
| :-------- | :------------------------------------------------------------------------------------------------------------------------------ | :------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `render$` | `(props: Record<string, unknown>, state: { disabled: ReadonlySignal<boolean>; loading: ReadonlySignal<boolean> }) => JSXOutput` | `-`     | Allows you to replace the component’s HTML element with a different tag, or compose it with another component. Read our [Composition](https://github.com/ZAHON/frame-ui/tree/main/packages/qwik/docs/guides/composition.md) guide for more details. |

| Data attribute  | Values | Description                                                                            |
| :-------------- | :----- | :------------------------------------------------------------------------------------- |
| `data-disabled` | `-`    | Present when the icon button is disabled and cannot be interacted with.                |
| `data-loading`  | `-`    | Present when the icon button is in a pending state and displays the loading indicator. |

### IconButton.Fallback

The content displayed when the icon button is in the loading state. By default, this component is **only rendered** when the `loading` prop on `IconButton.Root` is set to `true`. Use the `forceMount` prop to **always** render the fallback content even when the icon button is not loading. Renders a `<span>` element.

| Prop         | Type                                                                                                                            | Default | Description                                                                                                                                                                                                                                         |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------ | :------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `forceMount` | `boolean`                                                                                                                       | `false` | When `true`, the component will be rendered even if the icon button is not in the loading state.                                                                                                                                                    |
| `render$`    | `(props: Record<string, unknown>, state: { disabled: ReadonlySignal<boolean>; loading: ReadonlySignal<boolean> }) => JSXOutput` | `-`     | Allows you to replace the component’s HTML element with a different tag, or compose it with another component. Read our [Composition](https://github.com/ZAHON/frame-ui/tree/main/packages/qwik/docs/guides/composition.md) guide for more details. |

| Data attribute  | Values | Description                                                                            |
| :-------------- | :----- | :------------------------------------------------------------------------------------- |
| `data-disabled` | `-`    | Present when the icon button is disabled and cannot be interacted with.                |
| `data-loading`  | `-`    | Present when the icon button is in a pending state and displays the loading indicator. |

### useIconButtonContext

A hook that provides direct access to the `IconButton` component's internal context, allowing descendant components to utilize the shared state.

| Property   | Type                      | Description                                                                                                                                            |
| :--------- | :------------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `disabled` | `ReadonlySignal<boolean>` | A readonly signal that indicates whether the icon button is disabled. Its value is `true` if the icon button is disabled, preventing user interaction. |
| `loading`  | `ReadonlySignal<boolean>` | A readonly signal that indicates whether the icon button is in a pending state. Its value is `true` if the icon button is currently loading.           |

## Examples

The following examples demonstrate how to utilize the component's key properties to customize the `IconButton` component's appearance and behavior. This section covers practical use cases, including size variations, visual styling with `variant` and `color`, integrating icons, and managing functional states like `disabled` and `loading`.

### Size

Use the `size` prop to control the size of the icon button.

```tsx
import type { PropsOf } from '@builder.io/qwik';
import { component$ } from '@builder.io/qwik';
import { IconButton } from '@frame-ui/qwik';

const Demo = component$(() => {
  return (
    <div class="flex items-center gap-x-3">
      <IconButton.Root size="1" aria-label="search">
        <MagnifyingClassIcon class="size-3.5" />
      </IconButton.Root>

      <IconButton.Root size="2" aria-label="search">
        <MagnifyingClassIcon class="size-4.5" />
      </IconButton.Root>

      <IconButton.Root size="3" aria-label="search">
        <MagnifyingClassIcon class="size-5.5" />
      </IconButton.Root>

      <IconButton.Root size="4" aria-label="search">
        <MagnifyingClassIcon class="size-6.5" />
      </IconButton.Root>
    </div>
  );
});

const MagnifyingClassIcon = component$<PropsOf<'svg'>>((props) => {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z"
        fill="currentColor"
        fill-rule="evenodd"
        clip-rule="evenodd"
      />
    </svg>
  );
});
```

To ensure visual harmony, we recommend using the following icon sizes (using Tailwind CSS `size-*` classes) for each icon button size.

| Icon Button size | Recommended icon size (px) | Tailwind CSS class |
| :--------------- | :------------------------- | :----------------- |
| `"1"`            | `14px`                     | `size-3.5`         |
| `"2"`            | `18px`                     | `size-4.5`         |
| `"3"`            | `22px`                     | `size-5.5`         |
| `"4"`            | `26px`                     | `size-6.5`         |

### Variant

Use the `variant` prop to control the visual style of the icon button.

```tsx
import type { PropsOf } from '@builder.io/qwik';
import { component$ } from '@builder.io/qwik';
import { IconButton } from '@frame-ui/qwik';

const Demo = component$(() => {
  return (
    <div class="flex gap-x-3">
      <IconButton.Root variant="solid" aria-label="search">
        <MagnifyingClassIcon class="size-4.5" />
      </IconButton.Root>

      <IconButton.Root variant="soft" aria-label="search">
        <MagnifyingClassIcon class="size-4.5" />
      </IconButton.Root>

      <IconButton.Root variant="surface" aria-label="search">
        <MagnifyingClassIcon class="size-4.5" />
      </IconButton.Root>

      <IconButton.Root variant="outline" aria-label="search">
        <MagnifyingClassIcon class="size-4.5" />
      </IconButton.Root>

      <IconButton.Root variant="ghost" aria-label="search">
        <MagnifyingClassIcon class="size-4.5" />
      </IconButton.Root>
    </div>
  );
});

const MagnifyingClassIcon = component$<PropsOf<'svg'>>((props) => {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z"
        fill="currentColor"
        fill-rule="evenodd"
        clip-rule="evenodd"
      />
    </svg>
  );
});
```

### Color

Use the `color` prop to assign a specific color.

```tsx
import type { PropsOf } from '@builder.io/qwik';
import { component$ } from '@builder.io/qwik';
import { IconButton } from '@frame-ui/qwik';

const Demo = component$(() => {
  return (
    <div class="flex gap-x-3">
      <IconButton.Root color="default" aria-label="search">
        <MagnifyingClassIcon class="size-4.5" />
      </IconButton.Root>

      <IconButton.Root color="primary" aria-label="search">
        <MagnifyingClassIcon class="size-4.5" />
      </IconButton.Root>

      <IconButton.Root color="success" aria-label="search">
        <MagnifyingClassIcon class="size-4.5" />
      </IconButton.Root>

      <IconButton.Root color="warning" aria-label="search">
        <MagnifyingClassIcon class="size-4.5" />
      </IconButton.Root>

      <IconButton.Root color="danger" aria-label="search">
        <MagnifyingClassIcon class="size-4.5" />
      </IconButton.Root>
    </div>
  );
});

const MagnifyingClassIcon = component$<PropsOf<'svg'>>((props) => {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z"
        fill="currentColor"
        fill-rule="evenodd"
        clip-rule="evenodd"
      />
    </svg>
  );
});
```

### High-contrast

Use the `highContrast` prop to increase color contrast with the background.

```tsx
import type { PropsOf } from '@builder.io/qwik';
import { component$ } from '@builder.io/qwik';
import { IconButton } from '@frame-ui/qwik';

const Demo = component$(() => {
  return (
    <div class="flex flex-col gap-y-3">
      <div class="flex gap-x-3">
        <IconButton.Root variant="solid" color="default" aria-label="search">
          <MagnifyingClassIcon class="size-4.5" />
        </IconButton.Root>

        <IconButton.Root variant="soft" color="default" aria-label="search">
          <MagnifyingClassIcon class="size-4.5" />
        </IconButton.Root>

        <IconButton.Root variant="surface" color="default" aria-label="search">
          <MagnifyingClassIcon class="size-4.5" />
        </IconButton.Root>

        <IconButton.Root variant="outline" color="default" aria-label="search">
          <MagnifyingClassIcon class="size-4.5" />
        </IconButton.Root>

        <IconButton.Root variant="ghost" color="default" aria-label="search">
          <MagnifyingClassIcon class="size-4.5" />
        </IconButton.Root>
      </div>

      <div class="flex gap-x-3">
        <IconButton.Root highContrast={true} variant="solid" color="default" aria-label="search">
          <MagnifyingClassIcon class="size-4.5" />
        </IconButton.Root>

        <IconButton.Root highContrast={true} variant="soft" color="default" aria-label="search">
          <MagnifyingClassIcon class="size-4.5" />
        </IconButton.Root>

        <IconButton.Root highContrast={true} variant="surface" color="default" aria-label="search">
          <MagnifyingClassIcon class="size-4.5" />
        </IconButton.Root>

        <IconButton.Root highContrast={true} variant="outline" color="default" aria-label="search">
          <MagnifyingClassIcon class="size-4.5" />
        </IconButton.Root>

        <IconButton.Root highContrast={true} variant="ghost" color="default" aria-label="search">
          <MagnifyingClassIcon class="size-4.5" />
        </IconButton.Root>
      </div>
    </div>
  );
});

const MagnifyingClassIcon = component$<PropsOf<'svg'>>((props) => {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z"
        fill="currentColor"
        fill-rule="evenodd"
        clip-rule="evenodd"
      />
    </svg>
  );
});
```

### Radius

Use the `radius` prop to assign a specific radius value.

```tsx
import type { PropsOf } from '@builder.io/qwik';
import { component$ } from '@builder.io/qwik';
import { IconButton } from '@frame-ui/qwik';

const Demo = component$(() => {
  return (
    <div class="flex gap-x-3">
      <IconButton.Root radius="none" aria-label="search">
        <MagnifyingClassIcon class="size-4.5" />
      </IconButton.Root>

      <IconButton.Root radius="small" aria-label="search">
        <MagnifyingClassIcon class="size-4.5" />
      </IconButton.Root>

      <IconButton.Root radius="medium" aria-label="search">
        <MagnifyingClassIcon class="size-4.5" />
      </IconButton.Root>

      <IconButton.Root radius="large" aria-label="search">
        <MagnifyingClassIcon class="size-4.5" />
      </IconButton.Root>

      <IconButton.Root radius="full" aria-label="search">
        <MagnifyingClassIcon class="size-4.5" />
      </IconButton.Root>
    </div>
  );
});

const MagnifyingClassIcon = component$<PropsOf<'svg'>>((props) => {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z"
        fill="currentColor"
        fill-rule="evenodd"
        clip-rule="evenodd"
      />
    </svg>
  );
});
```

### Disabled

Use the `disabled` prop to prevent user interaction with the icon button.

```tsx
import type { PropsOf } from '@builder.io/qwik';
import { component$ } from '@builder.io/qwik';
import { IconButton } from '@frame-ui/qwik';

const Demo = component$(() => {
  return (
    <div class="flex gap-x-3">
      <IconButton.Root disabled={true} variant="solid" aria-label="search">
        <MagnifyingClassIcon class="size-4.5" />
      </IconButton.Root>

      <IconButton.Root disabled={true} variant="soft" aria-label="search">
        <MagnifyingClassIcon class="size-4.5" />
      </IconButton.Root>

      <IconButton.Root disabled={true} variant="surface" aria-label="search">
        <MagnifyingClassIcon class="size-4.5" />
      </IconButton.Root>

      <IconButton.Root disabled={true} variant="outline" aria-label="search">
        <MagnifyingClassIcon class="size-4.5" />
      </IconButton.Root>

      <IconButton.Root disabled={true} variant="ghost" aria-label="search">
        <MagnifyingClassIcon class="size-4.5" />
      </IconButton.Root>
    </div>
  );
});

const MagnifyingClassIcon = component$<PropsOf<'svg'>>((props) => {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z"
        fill="currentColor"
        fill-rule="evenodd"
        clip-rule="evenodd"
      />
    </svg>
  );
});
```

### Loading

Use the `loading` prop to put the icon button into a pending state. When active, this state automatically:

- Disables user interaction.

- Hides the regular content placed inside `IconButton.Content`.

- Renders the fallback content placed inside `IconButton.Fallback` (typically a loading indicator like a spinner), while preserving the original size of the icon button in its normal state.

When the icon button is loading, the content in `IconButton.Content` is hidden from screen readers. Therefore, you must include an accessible loading label inside `IconButton.Fallback` (e.g., using [`VisuallyHidden`](https://github.com/ZAHON/frame-ui/tree/main/packages/qwik/src/components/visually-hidden) as shown below) to inform users of the pending state.

> [!IMPORTANT]
> The sub-components ([`IconButton.Content`](#iconbuttoncontent) and [`IconButton.Fallback`](#iconbuttonfallback)) are **required** when you utilize the `loading` prop.

```tsx
import type { PropsOf } from '@builder.io/qwik';
import { component$ } from '@builder.io/qwik';
import { IconButton, VisuallyHidden, Spinner } from '@frame-ui/qwik';

const Demo = component$(() => {
  return (
    <div class="flex gap-x-3">
      <IconButton.Root loading={true} variant="solid">
        <IconButton.Content>
          <FilePlusIcon class="size-4.5" />
          <VisuallyHidden.Root>Create file</VisuallyHidden.Root>
        </IconButton.Content>

        <IconButton.Fallback>
          <Spinner.Root>
            {([0, 1, 2, 3, 4, 5, 6, 7] as const).map((index) => (
              <Spinner.Leaf key={index} index={index} />
            ))}
          </Spinner.Root>
          <VisuallyHidden.Root>Creating...</VisuallyHidden.Root>
        </IconButton.Fallback>
      </IconButton.Root>

      <IconButton.Root loading={true} variant="soft">
        <IconButton.Content>
          <FilePlusIcon class="size-4.5" />
          <VisuallyHidden.Root>Create file</VisuallyHidden.Root>
        </IconButton.Content>

        <IconButton.Fallback>
          <Spinner.Root>
            {([0, 1, 2, 3, 4, 5, 6, 7] as const).map((index) => (
              <Spinner.Leaf key={index} index={index} />
            ))}
          </Spinner.Root>
          <VisuallyHidden.Root>Creating...</VisuallyHidden.Root>
        </IconButton.Fallback>
      </IconButton.Root>

      <IconButton.Root loading={true} variant="surface">
        <IconButton.Content>
          <FilePlusIcon class="size-4.5" />
          <VisuallyHidden.Root>Create file</VisuallyHidden.Root>
        </IconButton.Content>

        <IconButton.Fallback>
          <Spinner.Root>
            {([0, 1, 2, 3, 4, 5, 6, 7] as const).map((index) => (
              <Spinner.Leaf key={index} index={index} />
            ))}
          </Spinner.Root>
          <VisuallyHidden.Root>Creating...</VisuallyHidden.Root>
        </IconButton.Fallback>
      </IconButton.Root>

      <IconButton.Root loading={true} variant="outline">
        <IconButton.Content>
          <FilePlusIcon class="size-4.5" />
          <VisuallyHidden.Root>Create file</VisuallyHidden.Root>
        </IconButton.Content>

        <IconButton.Fallback>
          <Spinner.Root>
            {([0, 1, 2, 3, 4, 5, 6, 7] as const).map((index) => (
              <Spinner.Leaf key={index} index={index} />
            ))}
          </Spinner.Root>
          <VisuallyHidden.Root>Creating...</VisuallyHidden.Root>
        </IconButton.Fallback>
      </IconButton.Root>

      <IconButton.Root loading={true} variant="ghost">
        <IconButton.Content>
          <FilePlusIcon class="size-4.5" />
          <VisuallyHidden.Root>Create file</VisuallyHidden.Root>
        </IconButton.Content>

        <IconButton.Fallback>
          <Spinner.Root>
            {([0, 1, 2, 3, 4, 5, 6, 7] as const).map((index) => (
              <Spinner.Leaf key={index} index={index} />
            ))}
          </Spinner.Root>
          <VisuallyHidden.Root>Creating...</VisuallyHidden.Root>
        </IconButton.Fallback>
      </IconButton.Root>
    </div>
  );
});

const FilePlusIcon = component$<PropsOf<'svg'>>((props) => {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3.5 2C3.22386 2 3 2.22386 3 2.5V12.5C3 12.7761 3.22386 13 3.5 13H11.5C11.7761 13 12 12.7761 12 12.5V4.70711L9.29289 2H3.5ZM2 2.5C2 1.67157 2.67157 1 3.5 1H9.5C9.63261 1 9.75979 1.05268 9.85355 1.14645L12.7803 4.07322C12.921 4.21388 13 4.40464 13 4.60355V12.5C13 13.3284 12.3284 14 11.5 14H3.5C2.67157 14 2 13.3284 2 12.5V2.5ZM4.75 7.5C4.75 7.22386 4.97386 7 5.25 7H7V5.25C7 4.97386 7.22386 4.75 7.5 4.75C7.77614 4.75 8 4.97386 8 5.25V7H9.75C10.0261 7 10.25 7.22386 10.25 7.5C10.25 7.77614 10.0261 8 9.75 8H8V9.75C8 10.0261 7.77614 10.25 7.5 10.25C7.22386 10.25 7 10.0261 7 9.75V8H5.25C4.97386 8 4.75 7.77614 4.75 7.5Z"
        fill="currentColor"
        fill-rule="evenodd"
        clip-rule="evenodd"
      />
    </svg>
  );
});
```

### Passing Tailwind CSS classes

All parts of the `IconButton` component support passing standard Tailwind CSS utility classes via the `class` prop.

For example, by applying utility classes to `IconButton.Root`, you can easily customize visual properties like margin:

```tsx
import type { PropsOf } from '@builder.io/qwik';
import { component$ } from '@builder.io/qwik';
import { IconButton } from '@frame-ui/qwik';

const Demo = component$(() => {
  return (
    <IconButton.Root class="m-3" aria-label="search">
      <MagnifyingClassIcon class="size-4.5" />
    </IconButton.Root>
  );
});

const MagnifyingClassIcon = component$<PropsOf<'svg'>>((props) => {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z"
        fill="currentColor"
        fill-rule="evenodd"
        clip-rule="evenodd"
      />
    </svg>
  );
});
```

### Rendering different elements

By default, the `IconButton` subcomponents each render a sensible HTML element. For example, `IconButton.Content` and `IconButton.Fallback` both render a `<span>`. For a complete overview of these default elements, refer to the [Rendered elements](#rendered-elements) section.

You can customize the underlying HTML element rendered by these subcomponents, or even compose them with other components from your library or your own custom Qwik components, by using the `render$` prop. This provides immense flexibility, allowing you to:

- Replace the default HTML tag (e.g., changing `IconButton.Content` from a `<span>` to a `<div>`).

- Integrate with other components from your library or your custom Qwik components. This allows you to wrap the button's content or fallback with custom styles or behaviors while ensuring the component's core logic remains intact.

> [!IMPORTANT]
> When using the `render$` prop, always spread the provided `props` object onto your custom element or component. This ensures that all essential attributes (like ARIA roles, IDs, and event handlers) are correctly applied, maintaining the component's intended behavior and accessibility.

```tsx
import type { PropsOf } from '@builder.io/qwik';
import { component$, Slot } from '@builder.io/qwik';
import { IconButton } from '@frame-ui/qwik';

const Demo = component$(() => {
  return (
    <IconButton.Root aria-label="search">
      <IconButton.Content
        render$={(props) => (
          <div {...props}>
            <Slot />
          </div>
        )}
      >
        <MagnifyingClassIcon class="size-4.5" />
      </IconButton.Content>
    </IconButton.Root>
  );
});

const MagnifyingClassIcon = component$<PropsOf<'svg'>>((props) => {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z"
        fill="currentColor"
        fill-rule="evenodd"
        clip-rule="evenodd"
      />
    </svg>
  );
});
```

## Accessibility

The `IconButton` component is built with accessibility (a11y) in mind, ensuring it is usable by everyone, including users relying on keyboard navigation and screen readers. This section details the recommended practices for keyboard support and managing announcements during the loading state to provide a clear and intuitive experience.

### Keyboard interactions

The `IconButton` component is designed to be fully accessible and supports standard keyboard interactions to ensure usability for all users. The details below outline the keys that activate the icon button when it has focus.

| Key              | Description                                               |
| :--------------- | :-------------------------------------------------------- |
| <kbd>Space</kbd> | When focus is on `IconButton.Root`, activates the button. |
| <kbd>Enter</kbd> | When focus is on `IconButton.Root`, activates the button. |

### Accessible labels

Since `IconButton` contains only an icon (or is primarily an interactive graphic), you must provide an accessible label for screen readers to describe its purpose. You have two options:

- Use the `aria-label` prop on `IconButton.Root` to provide a concise, descriptive label (e.g., `aria-label="like post"`).

- Use the [`VisuallyHidden`](https://github.com/ZAHON/frame-ui/tree/main/packages/qwik/src/components/visually-hidden) component inside `IconButton.Root` to provide a label that is visible only to screen readers.

```tsx
import type { PropsOf } from '@builder.io/qwik';
import { component$ } from '@builder.io/qwik';
import { IconButton, VisuallyHidden } from '@frame-ui/qwik';

const Demo = component$(() => {
  return (
    <div class="flex gap-x-3">
      <IconButton.Root aria-label="like post">
        <HeartIcon class="size-4.5" />
      </IconButton.Root>

      <IconButton.Root>
        <HeartIcon class="size-4.5" />
        <VisuallyHidden.Root>like post</VisuallyHidden.Root>
      </IconButton.Root>
    </div>
  );
});

const HeartIcon = component$<PropsOf<'svg'>>((props) => {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4.89346 2.35248C3.49195 2.35248 2.35248 3.49359 2.35248 4.90532C2.35248 6.38164 3.20954 7.9168 4.37255 9.33522C5.39396 10.581 6.59464 11.6702 7.50002 12.4778C8.4054 11.6702 9.60608 10.581 10.6275 9.33522C11.7905 7.9168 12.6476 6.38164 12.6476 4.90532C12.6476 3.49359 11.5081 2.35248 10.1066 2.35248C9.27059 2.35248 8.81894 2.64323 8.5397 2.95843C8.27877 3.25295 8.14623 3.58566 8.02501 3.88993C8.00391 3.9429 7.98315 3.99501 7.96211 4.04591C7.88482 4.23294 7.7024 4.35494 7.50002 4.35494C7.29765 4.35494 7.11523 4.23295 7.03793 4.04592C7.01689 3.99501 6.99612 3.94289 6.97502 3.8899C6.8538 3.58564 6.72126 3.25294 6.46034 2.95843C6.18109 2.64323 5.72945 2.35248 4.89346 2.35248ZM1.35248 4.90532C1.35248 2.94498 2.936 1.35248 4.89346 1.35248C6.0084 1.35248 6.73504 1.76049 7.20884 2.2953C7.32062 2.42147 7.41686 2.55382 7.50002 2.68545C7.58318 2.55382 7.67941 2.42147 7.79119 2.2953C8.265 1.76049 8.99164 1.35248 10.1066 1.35248C12.064 1.35248 13.6476 2.94498 13.6476 4.90532C13.6476 6.74041 12.6013 8.50508 11.4008 9.96927C10.2636 11.3562 8.92194 12.5508 8.00601 13.3664C7.94645 13.4194 7.88869 13.4709 7.83291 13.5206C7.64324 13.6899 7.3568 13.6899 7.16713 13.5206C7.11135 13.4709 7.05359 13.4194 6.99403 13.3664C6.0781 12.5508 4.73641 11.3562 3.59926 9.96927C2.39872 8.50508 1.35248 6.74041 1.35248 4.90532Z"
        fill="currentColor"
        fill-rule="evenodd"
        clip-rule="evenodd"
      />
    </svg>
  );
});
```

### Loading state

When the `loading` prop is set to `true`, all content inside `IconButton.Content` is automatically hidden. This includes any visual elements and accessible labels (like those provided by [`VisuallyHidden`](https://github.com/ZAHON/frame-ui/tree/main/packages/qwik/src/components/visually-hidden) component).

To ensure users relying on screen readers are informed about the icon button's pending status, you must provide an accessible label inside `IconButton.Fallback`.

The example below shows the best practice for including a descriptive status (like "Creating...") within a [`VisuallyHidden`](https://github.com/ZAHON/frame-ui/tree/main/packages/qwik/src/components/visually-hidden) component. This makes the loading state clear and understandable without causing visual clutter.

```tsx
import type { PropsOf } from '@builder.io/qwik';
import { component$ } from '@builder.io/qwik';
import { IconButton, VisuallyHidden, Spinner } from '@frame-ui/qwik';

const Demo = component$(() => {
  return (
    <IconButton.Root loading={true}>
      <IconButton.Content>
        <FilePlusIcon class="size-4.5" />
        <VisuallyHidden.Root>Create file</VisuallyHidden.Root>
      </IconButton.Content>

      <IconButton.Fallback>
        <Spinner.Root>
          {([0, 1, 2, 3, 4, 5, 6, 7] as const).map((index) => (
            <Spinner.Leaf key={index} index={index} />
          ))}
        </Spinner.Root>
        <VisuallyHidden.Root>Creating...</VisuallyHidden.Root>
      </IconButton.Fallback>
    </IconButton.Root>
  );
});

const FilePlusIcon = component$<PropsOf<'svg'>>((props) => {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3.5 2C3.22386 2 3 2.22386 3 2.5V12.5C3 12.7761 3.22386 13 3.5 13H11.5C11.7761 13 12 12.7761 12 12.5V4.70711L9.29289 2H3.5ZM2 2.5C2 1.67157 2.67157 1 3.5 1H9.5C9.63261 1 9.75979 1.05268 9.85355 1.14645L12.7803 4.07322C12.921 4.21388 13 4.40464 13 4.60355V12.5C13 13.3284 12.3284 14 11.5 14H3.5C2.67157 14 2 13.3284 2 12.5V2.5ZM4.75 7.5C4.75 7.22386 4.97386 7 5.25 7H7V5.25C7 4.97386 7.22386 4.75 7.5 4.75C7.77614 4.75 8 4.97386 8 5.25V7H9.75C10.0261 7 10.25 7.22386 10.25 7.5C10.25 7.77614 10.0261 8 9.75 8H8V9.75C8 10.0261 7.77614 10.25 7.5 10.25C7.22386 10.25 7 10.0261 7 9.75V8H5.25C4.97386 8 4.75 7.77614 4.75 7.5Z"
        fill="currentColor"
        fill-rule="evenodd"
        clip-rule="evenodd"
      />
    </svg>
  );
});
```
