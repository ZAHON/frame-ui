import { cva } from '@frame-ui/utilities';

export const spinnerLeafStyles = cva(
  [
    'absolute',
    'top-0',
    'left-[calc(50%-12.5%/2)]',
    'w-[12.5%]',
    'h-full',
    'animate-spinner-leaf-fade',

    'before:content-[""]',
    'before:block',
    'before:w-full',
    'before:h-[30%]',
    'before:rounded-1',
    'before:bg-current',
  ],
  {
    variants: {
      index: {
        0: ['rotate-0', '[animation-delay:calc(-8/8*var(--frame-ui-spinner-animation-duration,800ms))]'],
        1: ['rotate-45', '[animation-delay:calc(-7/8*var(--frame-ui-spinner-animation-duration,800ms))]'],
        2: ['rotate-90', '[animation-delay:calc(-6/8*var(--frame-ui-spinner-animation-duration,800ms))]'],
        3: ['rotate-135', '[animation-delay:calc(-5/8*var(--frame-ui-spinner-animation-duration,800ms))]'],
        4: ['rotate-180', '[animation-delay:calc(-4/8*var(--frame-ui-spinner-animation-duration,800ms))]'],
        5: ['rotate-225', '[animation-delay:calc(-3/8*var(--frame-ui-spinner-animation-duration,800ms))]'],
        6: ['rotate-270', '[animation-delay:calc(-2/8*var(--frame-ui-spinner-animation-duration,800ms))]'],
        7: ['rotate-315', '[animation-delay:calc(-1/8*var(--frame-ui-spinner-animation-duration,800ms))]'],
      },
    },
  }
);
