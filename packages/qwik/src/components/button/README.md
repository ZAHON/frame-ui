# Button

Trigger an action or event, such as submitting a form or displaying a dialog.

### Import

```tsx
import { Button, useButtonContext } from '@frame-ui/qwik';
```

### Anatomy

Import the component and piece the parts together.

> [!NOTE]
> The sub-components ([`Button.Content`](#buttoncontent) and [`Button.Fallback`](#buttonfallback)) are **optional** unless you utilize the `loading` prop. If the `loading` prop is **not used**, you can place the button's content directly inside the `Button.Root` component.

```tsx
import { component$ } from '@builder.io/qwik';
import { Button } from '@frame-ui/qwik';

const Demo = component$(() => {
  return (
    <Button.Root>
      <Button.Content />
      <Button.Fallback />
    </Button.Root>
  );
});
```

## Rendered elements

Each of `Button`'s subcomponents renders a default HTML element that makes sense for its role. This overview outlines the default element rendered by each part of the component. You can customize these elements using the `render$` prop, as shown in the [Rendering different elements](#rendering-different-elements) example.

| Component         | Default rendered element |
| :---------------- | :----------------------- |
| `Button.Root`     | `<button>`               |
| `Button.Content`  | `<span>`                 |
| `Button.Fallback` | `<span>`                 |

## API Reference

This section provides a comprehensive overview of the `Button` component's API, detailing all available props, subcomponents (like `Button.Content` and `Button.Fallback`), data attributes, and the `useButtonContext` hook. It's the essential reference for developers who want to fully configure and interact with the button's appearance and behavior, including its size, color, loading state, and styling based on its functional status.

### Button.Root

Contains all the parts of a button. Renders a `<button>` element.

| Prop           | Type                                                                                                                            | Default     | Description                                                                                                                                                                                                                                         |
| :------------- | :------------------------------------------------------------------------------------------------------------------------------ | :---------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `size`         | `"1" \| "2" \| "3" \| "4"`                                                                                                      | `"2"`       | The size of the button.                                                                                                                                                                                                                             |
| `variant`      | `"solid" \| "soft" \| "surface" \| "outline" \| "ghost"`                                                                        | `"solid"`   | The visual style of the button.                                                                                                                                                                                                                     |
| `color`        | `"default" \| "primary" \| "success" \| "warning" \| "danger"`                                                                  | `"primary"` | The color of the button.                                                                                                                                                                                                                            |
| `highContrast` | `boolean`                                                                                                                       | `false`     | If `true`, the button will use a higher contrast color palette.                                                                                                                                                                                     |
| `radius`       | `"none" \| "small" \| "medium" \| "large" \| "full"`                                                                            | `-`         | Overrides the radius inherited from the theme.                                                                                                                                                                                                      |
| `disabled`     | `boolean`                                                                                                                       | `false`     | When `true`, prevents the user from interacting with the button.                                                                                                                                                                                    |
| `loading`      | `boolean`                                                                                                                       | `false`     | If `true`, the button is put into a pending state. This action automatically disables user interaction, hides the regular content, and renders the fallback content.                                                                                |
| `render$`      | `(props: Record<string, unknown>, state: { disabled: ReadonlySignal<boolean>; loading: ReadonlySignal<boolean> }) => JSXOutput` | `-`         | Allows you to replace the component’s HTML element with a different tag, or compose it with another component. Read our [Composition](https://github.com/ZAHON/frame-ui/tree/main/packages/qwik/docs/guides/composition.md) guide for more details. |

| Data attribute  | Values | Description                                                                       |
| :-------------- | :----- | :-------------------------------------------------------------------------------- |
| `data-disabled` | `-`    | Present when the button is disabled and cannot be interacted with.                |
| `data-loading`  | `-`    | Present when the button is in a pending state and displays the loading indicator. |

### Button.Content

Contains the content for the button. This component is **optional** when the button is not expected to have a loading state. It is **required** when the `loading` prop is used on `Button.Root`, as its content will be automatically hidden while the button is loading. Renders a `<span>` element.

| Prop      | Type                                                                                                                            | Default | Description                                                                                                                                                                                                                                         |
| :-------- | :------------------------------------------------------------------------------------------------------------------------------ | :------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `render$` | `(props: Record<string, unknown>, state: { disabled: ReadonlySignal<boolean>; loading: ReadonlySignal<boolean> }) => JSXOutput` | `-`     | Allows you to replace the component’s HTML element with a different tag, or compose it with another component. Read our [Composition](https://github.com/ZAHON/frame-ui/tree/main/packages/qwik/docs/guides/composition.md) guide for more details. |

| Data attribute  | Values | Description                                                                       |
| :-------------- | :----- | :-------------------------------------------------------------------------------- |
| `data-disabled` | `-`    | Present when the button is disabled and cannot be interacted with.                |
| `data-loading`  | `-`    | Present when the button is in a pending state and displays the loading indicator. |

### Button.Fallback

The content displayed when the button is in the loading state. This component is **optional** and is primarily used to display a **loading indicator** (like a spinner) inside the button. It is **only rendered** when the `loading` prop on `Button.Root` is set to `true`. Renders a `<span>` element.

| Prop      | Type                                                                                                                            | Default | Description                                                                                                                                                                                                                                         |
| :-------- | :------------------------------------------------------------------------------------------------------------------------------ | :------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `render$` | `(props: Record<string, unknown>, state: { disabled: ReadonlySignal<boolean>; loading: ReadonlySignal<boolean> }) => JSXOutput` | `-`     | Allows you to replace the component’s HTML element with a different tag, or compose it with another component. Read our [Composition](https://github.com/ZAHON/frame-ui/tree/main/packages/qwik/docs/guides/composition.md) guide for more details. |

| Data attribute  | Values | Description                                                                       |
| :-------------- | :----- | :-------------------------------------------------------------------------------- |
| `data-disabled` | `-`    | Present when the button is disabled and cannot be interacted with.                |
| `data-loading`  | `-`    | Present when the button is in a pending state and displays the loading indicator. |

### useButtonContext

A hook that provides direct access to the `Button` component's internal context, allowing descendant components to utilize the shared state.

| Property   | Type                      | Description                                                                                                                                  |
| :--------- | :------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------- |
| `disabled` | `ReadonlySignal<boolean>` | A readonly signal that indicates whether the button is disabled. Its value is `true` if the button is disabled, preventing user interaction. |
| `loading`  | `ReadonlySignal<boolean>` | A readonly signal that indicates whether the button is in a pending state. Its value is `true` if the button is currently loading.           |

## Examples

The following examples demonstrate how to utilize the component's key properties to customize the `Button` component's appearance and behavior. This section covers practical use cases, including size variations, visual styling with `variant` and `color`, integrating icons, and managing functional states like `disabled` and `loading`.

### Size

Use the `size` prop to control the size of the button.

```tsx
import { component$ } from '@builder.io/qwik';
import { Button } from '@frame-ui/qwik';

const Demo = component$(() => {
  return (
    <div class="flex items-center gap-x-3">
      <Button.Root size="1">Edit profile</Button.Root>
      <Button.Root size="2">Edit profile</Button.Root>
      <Button.Root size="3">Edit profile</Button.Root>
      <Button.Root size="4">Edit profile</Button.Root>
    </div>
  );
});
```

### Variant

Use the `variant` prop to control the visual style of the button.

```tsx
import { component$ } from '@builder.io/qwik';
import { Button } from '@frame-ui/qwik';

const Demo = component$(() => {
  return (
    <div class="flex gap-x-3">
      <Button.Root variant="solid">Edit profile</Button.Root>
      <Button.Root variant="soft">Edit profile</Button.Root>
      <Button.Root variant="surface">Edit profile</Button.Root>
      <Button.Root variant="outline">Edit profile</Button.Root>
      <Button.Root variant="ghost">Edit profile</Button.Root>
    </div>
  );
});
```

### Color

Use the `color` prop to assign a specific color.

```tsx
import { component$ } from '@builder.io/qwik';
import { Button } from '@frame-ui/qwik';

const Demo = component$(() => {
  return (
    <div class="flex gap-x-3">
      <Button.Root color="default">Edit profile</Button.Root>
      <Button.Root color="primary">Edit profile</Button.Root>
      <Button.Root color="success">Edit profile</Button.Root>
      <Button.Root color="warning">Edit profile</Button.Root>
      <Button.Root color="danger">Edit profile</Button.Root>
    </div>
  );
});
```

### High-contrast

Use the `highContrast` prop to increase color contrast with the background.

```tsx
import { component$ } from '@builder.io/qwik';
import { Button } from '@frame-ui/qwik';

const Demo = component$(() => {
  return (
    <div class="flex flex-col gap-y-3">
      <div class="flex gap-x-3">
        <Button.Root variant="solid" color="default">
          Edit profile
        </Button.Root>

        <Button.Root variant="soft" color="default">
          Edit profile
        </Button.Root>

        <Button.Root variant="surface" color="default">
          Edit profile
        </Button.Root>

        <Button.Root variant="outline" color="default">
          Edit profile
        </Button.Root>

        <Button.Root variant="ghost" color="default">
          Edit profile
        </Button.Root>
      </div>

      <div class="flex gap-x-3">
        <Button.Root highContrast={true} variant="solid" color="default">
          Edit profile
        </Button.Root>

        <Button.Root highContrast={true} variant="soft" color="default">
          Edit profile
        </Button.Root>

        <Button.Root highContrast={true} variant="surface" color="default">
          Edit profile
        </Button.Root>

        <Button.Root highContrast={true} variant="outline" color="default">
          Edit profile
        </Button.Root>

        <Button.Root highContrast={true} variant="ghost" color="default">
          Edit profile
        </Button.Root>
      </div>
    </div>
  );
});
```

### Radius

Use the `radius` prop to assign a specific radius value.

```tsx
import { component$ } from '@builder.io/qwik';
import { Button } from '@frame-ui/qwik';

const Demo = component$(() => {
  return (
    <div class="flex gap-x-3">
      <Button.Root radius="none">Edit profile</Button.Root>
      <Button.Root radius="small">Edit profile</Button.Root>
      <Button.Root radius="medium">Edit profile</Button.Root>
      <Button.Root radius="large">Edit profile</Button.Root>
      <Button.Root radius="full">Edit profile</Button.Root>
    </div>
  );
});
```

### With icons

You can nest icons directly inside the button. An appropriate gap is provided automatically.

```tsx
import type { PropsOf } from '@builder.io/qwik';
import { component$ } from '@builder.io/qwik';
import { Button } from '@frame-ui/qwik';

const Demo = component$(() => {
  return (
    <div class="flex items-center gap-x-3">
      <Button.Root size="1">
        <BookmarkIcon class="size-3.5" />
        Bookmark
      </Button.Root>

      <Button.Root size="2">
        <BookmarkIcon class="size-4" />
        Bookmark
      </Button.Root>

      <Button.Root size="3">
        <BookmarkIcon class="size-4.5" />
        Bookmark
      </Button.Root>

      <Button.Root size="4">
        <BookmarkIcon class="size-5" />
        Bookmark
      </Button.Root>
    </div>
  );
});

const BookmarkIcon = component$<PropsOf<'svg'>>((props) => {
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
        d="M3 2.5C3 2.22386 3.22386 2 3.5 2H11.5C11.7761 2 12 2.22386 12 2.5V13.5C12 13.6818 11.9014 13.8492 11.7424 13.9373C11.5834 14.0254 11.3891 14.0203 11.235 13.924L7.5 11.5896L3.765 13.924C3.61087 14.0203 3.41659 14.0254 3.25762 13.9373C3.09864 13.8492 3 13.6818 3 13.5V2.5ZM4 3V12.5979L6.97 10.7416C7.29427 10.539 7.70573 10.539 8.03 10.7416L11 12.5979V3H4Z"
        fill="currentColor"
        fill-rule="evenodd"
        clip-rule="evenodd"
      />
    </svg>
  );
});
```

To ensure visual harmony, we recommend using the following icon sizes (using Tailwind CSS `size-*` classes) for each button size.

| Button size | Recommended icon size (px) | Tailwind CSS class |
| :---------- | :------------------------- | :----------------- |
| `"1"`       | `14px`                     | `size-3.5`         |
| `"2"`       | `16px`                     | `size-4`           |
| `"3"`       | `18px`                     | `size-4.5`         |
| `"4"`       | `20px`                     | `size-5`           |

### Disabled

Use the `disabled` prop to prevent user interaction with the button.

```tsx
import { component$ } from '@builder.io/qwik';
import { Button } from '@frame-ui/qwik';

const Demo = component$(() => {
  return (
    <div class="flex gap-x-3">
      <Button.Root disabled={true} variant="solid">
        Edit profile
      </Button.Root>

      <Button.Root disabled={true} variant="soft">
        Edit profile
      </Button.Root>

      <Button.Root disabled={true} variant="surface">
        Edit profile
      </Button.Root>

      <Button.Root disabled={true} variant="outline">
        Edit profile
      </Button.Root>

      <Button.Root disabled={true} variant="ghost">
        Edit profile
      </Button.Root>
    </div>
  );
});
```

### Loading

Use the `loading` prop to put the button into a pending state. When active, this state automatically:

- Disables user interaction.

- Hides the regular content placed inside `Button.Content`.

- Renders the fallback content placed inside `Button.Fallback` (typically a loading indicator like a spinner), while preserving the original size of the button in its normal state.

When the button is loading, the content in `Button.Content` is hidden from screen readers. Therefore, you must include an accessible loading label inside `Button.Fallback` (e.g., using [`VisuallyHidden`](https://github.com/ZAHON/frame-ui/tree/main/packages/qwik/src/components/visually-hidden) as shown below) to inform users of the pending state.

> [!IMPORTANT]
> The sub-components ([`Button.Content`](#buttoncontent) and [`Button.Fallback`](#buttonfallback)) are **required** when you utilize the `loading` prop.

```tsx
import { component$ } from '@builder.io/qwik';
import { Button, Spinner, VisuallyHidden } from '@frame-ui/qwik';

const Demo = component$(() => {
  return (
    <div class="flex gap-x-3">
      <Button.Root loading={true} variant="solid">
        <Button.Content>Save data</Button.Content>

        <Button.Fallback>
          <Spinner.Root>
            {([0, 1, 2, 3, 4, 5, 6, 7] as const).map((index) => (
              <Spinner.Leaf key={index} index={index} />
            ))}
          </Spinner.Root>

          <VisuallyHidden.Root>Saving...</VisuallyHidden.Root>
        </Button.Fallback>
      </Button.Root>

      <Button.Root loading={true} variant="soft">
        <Button.Content>Save data</Button.Content>

        <Button.Fallback>
          <Spinner.Root>
            {([0, 1, 2, 3, 4, 5, 6, 7] as const).map((index) => (
              <Spinner.Leaf key={index} index={index} />
            ))}
          </Spinner.Root>

          <VisuallyHidden.Root>Saving...</VisuallyHidden.Root>
        </Button.Fallback>
      </Button.Root>

      <Button.Root loading={true} variant="surface">
        <Button.Content>Save data</Button.Content>

        <Button.Fallback>
          <Spinner.Root>
            {([0, 1, 2, 3, 4, 5, 6, 7] as const).map((index) => (
              <Spinner.Leaf key={index} index={index} />
            ))}
          </Spinner.Root>

          <VisuallyHidden.Root>Saving...</VisuallyHidden.Root>
        </Button.Fallback>
      </Button.Root>

      <Button.Root loading={true} variant="outline">
        <Button.Content>Save data</Button.Content>

        <Button.Fallback>
          <Spinner.Root>
            {([0, 1, 2, 3, 4, 5, 6, 7] as const).map((index) => (
              <Spinner.Leaf key={index} index={index} />
            ))}
          </Spinner.Root>

          <VisuallyHidden.Root>Saving...</VisuallyHidden.Root>
        </Button.Fallback>
      </Button.Root>

      <Button.Root loading={true} variant="ghost">
        <Button.Content>Save data</Button.Content>

        <Button.Fallback>
          <Spinner.Root>
            {([0, 1, 2, 3, 4, 5, 6, 7] as const).map((index) => (
              <Spinner.Leaf key={index} index={index} />
            ))}
          </Spinner.Root>

          <VisuallyHidden.Root>Saving...</VisuallyHidden.Root>
        </Button.Fallback>
      </Button.Root>
    </div>
  );
});
```

If your button normally contains an icon alongside the text, it's often best to preserve the button's layout and content width during the loading state.

In this example, the text content from `Button.Content` ("Save data") is repeated inside `Button.Fallback` next to the spinner. This maintains the visual width and prevents layout shift while still signaling the pending state.

```tsx
import { component$ } from '@builder.io/qwik';
import { Button, Spinner } from '@frame-ui/qwik';

const Demo = component$(() => {
  return (
    <div class="flex gap-x-3">
      <Button.Root loading={true} variant="solid">
        <Button.Content>
          <DownloadIcon />
          Save data
        </Button.Content>

        <Button.Fallback>
          <Spinner.Root>
            {([0, 1, 2, 3, 4, 5, 6, 7] as const).map((index) => (
              <Spinner.Leaf key={index} index={index} />
            ))}
          </Spinner.Root>
          Save data
        </Button.Fallback>
      </Button.Root>

      <Button.Root loading={true} variant="soft">
        <Button.Content>
          <DownloadIcon />
          Save data
        </Button.Content>

        <Button.Fallback>
          <Spinner.Root>
            {([0, 1, 2, 3, 4, 5, 6, 7] as const).map((index) => (
              <Spinner.Leaf key={index} index={index} />
            ))}
          </Spinner.Root>
          Save data
        </Button.Fallback>
      </Button.Root>

      <Button.Root loading={true} variant="surface">
        <Button.Content>
          <DownloadIcon />
          Save data
        </Button.Content>

        <Button.Fallback>
          <Spinner.Root>
            {([0, 1, 2, 3, 4, 5, 6, 7] as const).map((index) => (
              <Spinner.Leaf key={index} index={index} />
            ))}
          </Spinner.Root>
          Save data
        </Button.Fallback>
      </Button.Root>

      <Button.Root loading={true} variant="outline">
        <Button.Content>
          <DownloadIcon />
          Save data
        </Button.Content>

        <Button.Fallback>
          <Spinner.Root>
            {([0, 1, 2, 3, 4, 5, 6, 7] as const).map((index) => (
              <Spinner.Leaf key={index} index={index} />
            ))}
          </Spinner.Root>
          Save data
        </Button.Fallback>
      </Button.Root>

      <Button.Root loading={true} variant="ghost">
        <Button.Content>
          <DownloadIcon />
          Save data
        </Button.Content>

        <Button.Fallback>
          <Spinner.Root>
            {([0, 1, 2, 3, 4, 5, 6, 7] as const).map((index) => (
              <Spinner.Leaf key={index} index={index} />
            ))}
          </Spinner.Root>
          Save data
        </Button.Fallback>
      </Button.Root>
    </div>
  );
});

const DownloadIcon = component$(() => {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="size-4"
    >
      <path
        d="M7.50005 1.04999C7.74858 1.04999 7.95005 1.25146 7.95005 1.49999V8.41359L10.1819 6.18179C10.3576 6.00605 10.6425 6.00605 10.8182 6.18179C10.994 6.35753 10.994 6.64245 10.8182 6.81819L7.81825 9.81819C7.64251 9.99392 7.35759 9.99392 7.18185 9.81819L4.18185 6.81819C4.00611 6.64245 4.00611 6.35753 4.18185 6.18179C4.35759 6.00605 4.64251 6.00605 4.81825 6.18179L7.05005 8.41359V1.49999C7.05005 1.25146 7.25152 1.04999 7.50005 1.04999ZM2.5 10C2.77614 10 3 10.2239 3 10.5V12C3 12.5539 3.44565 13 3.99635 13H11.0012C11.5529 13 12 12.5528 12 12V10.5C12 10.2239 12.2239 10 12.5 10C12.7761 10 13 10.2239 13 10.5V12C13 13.1041 12.1062 14 11.0012 14H3.99635C2.89019 14 2 13.103 2 12V10.5C2 10.2239 2.22386 10 2.5 10Z"
        fill="currentColor"
        fill-rule="evenodd"
        clip-rule="evenodd"
      />
    </svg>
  );
});
```

### Passing Tailwind CSS classes

All parts of the `Button` component support passing standard Tailwind CSS utility classes via the class prop.

For example, by applying utility classes to `Button.Root`, you can easily customize layout properties like width or margin:

```tsx
import { component$ } from '@builder.io/qwik';
import { Button } from '@frame-ui/qwik';

const Demo = component$(() => {
  return <Button.Root class="w-full">Edit profile</Button.Root>;
});
```

### Rendering different elements

By default, the `Button` subcomponents each render a sensible HTML element. For example, `Button.Content` and `Button.Fallback` both render a `<span>`. For a complete overview of these default elements, refer to the [Rendered elements](#rendered-elements) section.

You can customize the underlying HTML element rendered by these subcomponents, or even compose them with other components from your library or your own custom Qwik components, by using the `render$` prop. This provides immense flexibility, allowing you to:

- Replace the default HTML tag (e.g., changing `Button.Content` from a `<span>` to a `<div>`).

- Integrate with other components from your library or your custom Qwik components. This allows you to wrap the button's content or fallback with custom styles or behaviors while ensuring the component's core logic remains intact.

> [!IMPORTANT]
> When using the `render$` prop, always spread the provided `props` object onto your custom element or component. This ensures that all essential attributes (like ARIA roles, IDs, and event handlers) are correctly applied, maintaining the component's intended behavior and accessibility.

```tsx
import { component$, Slot } from '@builder.io/qwik';
import { Button } from '@frame-ui/qwik';

const Demo = component$(() => {
  return (
    <Button.Root>
      <Button.Content
        render$={(props) => (
          <div {...props}>
            <Slot />
          </div>
        )}
      >
        Edit profile
      </Button.Content>
    </Button.Root>
  );
});
```

## Accessibility

The `Button` component is built with accessibility (a11y) in mind, ensuring it is usable by everyone, including users relying on keyboard navigation and screen readers. This section details the recommended practices for keyboard support and managing announcements during the loading state to provide a clear and intuitive experience.

### Keyboard interactions

The `Button` component is designed to be fully accessible and supports standard keyboard interactions to ensure usability for all users. The details below outline the keys that activate the button when it has focus.

| Key              | Description                                           |
| :--------------- | :---------------------------------------------------- |
| <kbd>Space</kbd> | When focus is on `Button.Root`, activates the button. |
| <kbd>Enter</kbd> | When focus is on `Button.Root`, activates the button. |

### Loading state

When the `loading` prop is set to `true`, the visible content inside `Button.Content` is automatically hidden. To ensure users relying on screen readers are informed about the button's pending status, you must provide an accessible label inside `Button.Fallback`.

The example below shows the best practice for including a descriptive status (like "Saving...") within a [`VisuallyHidden`](https://github.com/ZAHON/frame-ui/tree/main/packages/qwik/src/components/visually-hidden) component. This makes the loading state clear and understandable without causing visual clutter.

```tsx
import { component$ } from '@builder.io/qwik';
import { Button, Spinner, VisuallyHidden } from '@frame-ui/qwik';

const Demo = component$(() => {
  return (
    <Button.Root loading={true} variant="solid">
      <Button.Content>Save data</Button.Content>

      <Button.Fallback>
        <Spinner.Root>
          {([0, 1, 2, 3, 4, 5, 6, 7] as const).map((index) => (
            <Spinner.Leaf key={index} index={index} />
          ))}
        </Spinner.Root>

        <VisuallyHidden.Root>Saving...</VisuallyHidden.Root>
      </Button.Fallback>
    </Button.Root>
  );
});
```
