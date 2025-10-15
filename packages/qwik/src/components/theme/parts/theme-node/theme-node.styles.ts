import { cva } from '@frame-ui/utilities';

export const themeNodeStyles = cva(['text-foreground'], {
  variants: {
    hasBackground: {
      false: [''],
      true: ['bg-background'],
    },
  },
});
