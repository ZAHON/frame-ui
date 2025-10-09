import { cva } from '@frame-ui/utilities';

export const baseButtonFallbackStyles = cva(['absolute', 'inset-0', 'flex', 'justify-center', 'items-center'], {
  variants: {
    shape: {
      rectangle: [''],
      square: [''],
    },
    size: {
      '1': [''],
      '2': [''],
      '3': [''],
      '4': [''],
    },
  },
  compoundVariants: [
    {
      shape: 'rectangle',
      size: '1',
      class: ['gap-x-1'],
    },
    {
      shape: 'rectangle',
      size: '2',
      class: ['gap-x-2'],
    },
    {
      shape: 'rectangle',
      size: '3',
      class: ['gap-x-3'],
    },
    {
      shape: 'rectangle',
      size: '4',
      class: ['gap-x-3'],
    },
  ],
});
