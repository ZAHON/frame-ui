import { cva } from '@frame-ui/utilities';

export const spinnerRootStyles = cva(
  [
    'block',
    'relative',
    'select-none',
    'opacity-(--frame-ui-spinner-opacity,0.65)',

    '[--frame-ui-spinner-animation-duration:800ms]',
  ],
  {
    variants: {
      size: {
        '1': ['size-3'],
        '2': ['size-4'],
        '3': ['size-5'],
      },
    },
  }
);
