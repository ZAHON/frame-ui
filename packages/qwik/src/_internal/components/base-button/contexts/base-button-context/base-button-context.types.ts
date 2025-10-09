import type { ReadonlySignal } from '@builder.io/qwik';

export interface BaseButtonContextValue {
  /**
   * The current geometric shape of the base button.
   * Defines whether the base button renders as a full `"rectangle"` or a `"square"`.
   */
  shape: 'rectangle' | 'square';

  /**
   * A readonly signal holding the current size of the base button.
   * Corresponds to the visual scale, ranging from `"1"` (smallest) to `"4"` (largest).
   */
  size: ReadonlySignal<'1' | '2' | '3' | '4'>;

  /**
   * A readonly signal that indicates whether the base button is disabled.
   * Its value is `true` if the base button is disabled, preventing user interaction.
   */
  disabled: ReadonlySignal<boolean>;

  /**
   * A readonly signal that indicates whether the base button is in a pending state.
   * Its value is `true` if the base button is currently loading.
   */
  loading: ReadonlySignal<boolean>;
}
