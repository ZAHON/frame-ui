# Theme

Wraps all or part of a Qwik tree to provide theme configuration.

> [!NOTE]
> This component uses the [`useVisibleTask$()`](https://qwik.dev/docs/components/tasks/#usevisibletask) hook to read initial values from `localStorage` and set up listeners for system color scheme changes. By default, this task is executed when the browser is idle (`"document-idle"`), which is the recommended strategy for best performance. You can use the `strategy` prop on [`Theme.Root`](#themeroot) to change when this task runs, for example, to run it eagerly (`"document-ready"`) or when the component enters the viewport (`"intersection-observer"`).

## Import

```tsx
import { Theme, useThemeContext } from '@frame-ui/qwik';
```

## Anatomy

Import the component.

```tsx
import { component$ } from '@builder.io/qwik';
import { Theme } from '@frame-ui/qwik';

const Demo = component$(() => {
  return <Theme.Root />;
});
```

## Rendered elements

Each of `Theme`'s subcomponents renders a default HTML element that makes sense for its role. This overview outlines the default element rendered by each part of the component.

| Component    | Default rendered element |
| :----------- | :----------------------- |
| `Theme.Root` | `-`                      |

## API Reference

This section details the props available on the `Theme.Root` component and the methods and state exposed by the `useThemeContext` hook. Use this reference to configure the theming behavior and programmatically manage user preferences.

### Theme.Root

Contains all the configuration and context necessary for the theming system to work. Doesn’t render its own HTML element.

| Prop                             | Type                                                             | Default           | Description                                                                                                                                                                                                                                                                                                                                                                                                              |
| :------------------------------- | :--------------------------------------------------------------- | :---------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `enableSystemTheme`              | `boolean`                                                        | `true`            | Enables automatic theme switching based on the user's system color scheme preference. When enabled, the `"system"` theme option will respect the OS-level dark/light mode setting.                                                                                                                                                                                                                                       |
| `defaultTheme`                   | `"light" \| "dark" \| "system"`                                  | `"system"`        | The default theme to apply when the component is first mounted and no user preference is stored. Can be `"light"`, `"dark"`, or `"system"` (which follows the OS preference). If `enableSystemTheme` is `false`, this will default to `"light"`.                                                                                                                                                                         |
| `defaultRadius`                  | `"none" \| "small" \| "medium" \| "large" \| "full"`             | `"medium"`        | The default border radius preset to apply to UI components. Controls the roundness of corners throughout the themed interface. Options range from sharp corners (`"none"`) to fully rounded (`"full"`).                                                                                                                                                                                                                  |
| `defaultScaling`                 | `"90%" \| "95%" \| "100%" \| "105%" \| "110%"`                   | `"100%"`          | The default scaling factor for the UI. Adjusts the overall size of interface elements while maintaining proportions. Useful for accessibility or user preference adjustments.                                                                                                                                                                                                                                            |
| `disableTransitionOnThemeChange` | `boolean`                                                        | `true`            | When enabled, temporarily disables CSS transitions during theme changes to prevent visual flickering or jarring animation effects. The transitions are re-enabled immediately after the theme is applied.                                                                                                                                                                                                                |
| `nonce`                          | `string`                                                         | `-`               | A cryptographic nonce (number used once) for Content Security Policy (CSP) compliance. This nonce will be applied to the inline script tag that initializes the theme, allowing it to execute in environments with strict CSP rules.                                                                                                                                                                                     |
| `scriptProps`                    | `Record<string, unknown>`                                        | `-`               | Additional HTML attributes to apply to the inline script element that initializes the theme. Supports standard script attributes as well as custom data attributes. Useful for tracking, analytics, or additional CSP configurations.                                                                                                                                                                                    |
| `strategy`                       | `"intersection-observer" \| "document-ready" \| "document-idle"` | `"document-idle"` | The strategy used to execute the `useVisibleTask$` hook, which handles reading initial values from `localStorage` and setting up media query listeners. </br> - `"intersection-observer"`: Executes when the component becomes visible in the viewport </br> - `"document-ready"`: Executes when the DOM is fully parsed </br> - `"document-idle"`: Executes when the browser is idle (recommended for best performance) |
| `storageKeys`                    | `Partial<{ theme: string; radius: string; scaling: string }>`    | `-`               | Custom keys to use for storing theme preferences in `localStorage`. Allows customization of storage key names to avoid conflicts with other libraries or to match your application's naming conventions.                                                                                                                                                                                                                 |

### useThemeContext

A hook that provides access to the theme's internal state. It exposes readonly signals for the current `theme`, `radius`, and `scaling` preferences, along with `QRL` functions to programmatically update these values.

| Property        | Type                                                                              | Description                                                                                                                                                                                                                                                                                           |
| :-------------- | :-------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `theme`         | `ReadonlySignal<"light" \| "dark" \| "system" \| undefined>`                      | A readonly signal holding the user's currently selected theme preference. It may be `undefined` when the application first starts on the server.                                                                                                                                                      |
| `resolvedTheme` | `ReadonlySignal<"light" \| "dark" \| "system" \| undefined>`                      | A readonly signal holding the actual theme applied to the document. This value is the result of resolving the `"system"` preference (if selected) to either `"light"` or `"dark"` based on the user's OS color scheme setting. It may be `undefined` when the application first starts on the server. |
| `radius`        | `ReadonlySignal<"none" \| "small" \| "medium" \| "large" \| "full" \| undefined>` | A readonly signal holding the user's currently selected border radius preference. Its value determines the roundness of UI component corners. It may be `undefined` when the application first starts on the server.                                                                                  |
| `scaling`       | `ReadonlySignal<"90%" \| "95%" \| "100%" \| "105%" \| "110%" \| undefined>`       | A readonly signal holding the user's currently selected UI scaling factor preference. Its value adjusts the overall size of interface elements. It may be `undefined` when the application first starts on the server.                                                                                |
| `setTheme$`     | `QRL<(newTheme: "light" \| "dark" \| "system") => void>`                          | A `QRL` function used to programmatically set the theme preference. Invoking this function updates the theme and saves the preference to local storage.                                                                                                                                               |
| `setRadius$`    | `QRL<(newRadius: "none" \| "small" \| "medium" \| "large" \| "full") => void>`    | A `QRL` function used to programmatically set the border radius preference. Invoking this function updates the radius setting and saves the preference to local storage.                                                                                                                              |
| `setScaling$`   | `QRL<(newScaling: "90%" \| "95%" \| "100%" \| "105%" \| "110%") => void>`         | A `QRL` function used to programmatically set the UI scaling preference. Invoking this function updates the scaling factor and saves the preference to local storage.                                                                                                                                 |
