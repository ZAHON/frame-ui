import { cva } from '@frame-ui/utilities';

export const baseButtonRootStyles = cva(
  [
    'relative',
    'inline-flex',
    'justify-center',
    'items-center',
    'shrink-0',
    'select-none',
    'align-top',
    'cursor-default',
    'text-center',

    'focus-visible:outline',
    'focus-visible:outline-2',

    'disabled:cursor-not-allowed',

    'data-[loading]:cursor-progress',
    'data-[loading]:[--frame-ui-spinner-opacity:1]',
  ],
  {
    variants: {
      shape: {
        rectangle: ['font-medium'],
        square: [''],
      },
      size: {
        '1': ['rounded-[max(var(--frame-ui-radius-1),var(--frame-ui-radius-full))]'],
        '2': ['rounded-[max(var(--frame-ui-radius-2),var(--frame-ui-radius-full))]'],
        '3': ['rounded-[max(var(--frame-ui-radius-3),var(--frame-ui-radius-full))]'],
        '4': ['rounded-[max(var(--frame-ui-radius-4),var(--frame-ui-radius-full))]'],
      },
      variant: {
        solid: [
          '[&_svg]:opacity-90',
          'focus-visible:outline-offset-2',

          'pointer-coarse:enabled:active:outline-[0.5em]',
          'pointer-coarse:enabled:active:outline-offset-0',

          'pointer-coarse:enabled:active:data-[state=open]:outline-0',

          'disabled:bg-default-alpha-3',
          'disabled:text-default-alpha-8',
        ],
        soft: [
          '[&_svg]:opacity-90',

          'focus-visible:-outline-offset-1',
          'disabled:bg-default-alpha-3',
          'disabled:text-default-alpha-8',
        ],
        surface: [
          '[&_svg]:opacity-90',

          'ring-1',
          'ring-inset',
          'focus-visible:-outline-offset-1',
          'disabled:bg-default-alpha-2',
          'disabled:text-default-alpha-8',
          'disabled:ring-default-alpha-6',
        ],
        outline: [
          '[&_svg]:opacity-90',

          'ring-1',
          'ring-inset',
          'focus-visible:-outline-offset-1',
          'disabled:bg-transparent',
          'disabled:text-default-alpha-8',
          'disabled:ring-default-alpha-7',
        ],
        ghost: ['focus-visible:-outline-offset-1', 'disabled:bg-transparent', 'disabled:text-default-alpha-8'],
      },
      color: {
        default: ['focus-visible:outline-primary-alpha-8'],
        primary: ['focus-visible:outline-primary-alpha-8'],
        success: ['focus-visible:outline-success-alpha-8'],
        warning: ['focus-visible:outline-warning-alpha-8'],
        danger: ['focus-visible:outline-danger-alpha-8'],
      },
      highContrast: {
        false: [''],
        true: [''],
      },
    },
    compoundVariants: [
      {
        shape: 'rectangle',
        size: '1',
        class: ['h-6', 'px-2', 'gap-x-1', 'text-1'],
      },
      {
        shape: 'rectangle',
        size: '2',
        class: ['h-8', 'px-3', 'gap-x-2', 'text-2'],
      },
      {
        shape: 'rectangle',
        size: '3',
        class: ['h-10', 'px-4', 'gap-x-3', 'text-3'],
      },
      {
        shape: 'rectangle',
        size: '4',
        class: ['h-12', 'px-6', 'gap-x-3', 'text-4'],
      },

      {
        shape: 'square',
        size: '1',
        class: ['size-6'],
      },
      {
        shape: 'square',
        size: '2',
        class: ['size-8'],
      },
      {
        shape: 'square',
        size: '3',
        class: ['size-10'],
      },
      {
        shape: 'square',
        size: '4',
        class: ['size-12'],
      },

      {
        variant: 'solid',
        color: 'default',
        class: ['pointer-coarse:enabled:active:outline-primary-alpha-4'],
      },
      {
        variant: 'solid',
        color: 'primary',
        class: ['pointer-coarse:enabled:active:outline-primary-alpha-4'],
      },
      {
        variant: 'solid',
        color: 'success',
        class: ['pointer-coarse:enabled:active:outline-success-alpha-4'],
      },
      {
        variant: 'solid',
        color: 'warning',
        class: ['pointer-coarse:enabled:active:outline-warning-alpha-4'],
      },
      {
        variant: 'solid',
        color: 'danger',
        class: ['pointer-coarse:enabled:active:outline-danger-alpha-4'],
      },

      {
        variant: 'solid',
        highContrast: false,
        class: [
          'enabled:active:brightness-[0.92]',
          'enabled:active:saturate-[1.1]',

          'enabled:data-[state=open]:brightness-100',
          'enabled:data-[state=open]:saturate-100',

          'dark:enabled:active:brightness-[1.08]',
          'dark:enabled:active:saturate-100',

          'dark:enabled:data-[state=open]:brightness-100',
          'dark:enabled:data-[state=open]:saturate-100',
        ],
      },
      {
        variant: 'solid',
        highContrast: true,
        class: [
          'enabled:hover:brightness-[1.1]',
          'enabled:hover:saturate-[1.1]',
          'enabled:hover:contrast-[0.88]',

          'enabled:active:brightness-[1.16]',
          'enabled:active:saturate-[1.2]',
          'enabled:active:contrast-[0.82]',

          'enabled:data-[state=open]:brightness-[1.1]',
          'enabled:data-[state=open]:saturate-[1.1]',
          'enabled:data-[state=open]:contrast-[0.88]',

          'dark:enabled:hover:brightness-[1.18]',
          'dark:enabled:hover:saturate-[1.3]',
          'dark:enabled:hover:contrast-[0.88]',

          'dark:enabled:active:brightness-[0.95]',
          'dark:enabled:active:saturate-[1.2]',
          'dark:enabled:active:contrast-100',

          'dark:enabled:data-[state=open]:brightness-[1.18]',
          'dark:enabled:data-[state=open]:saturate-[1.3]',
          'dark:enabled:data-[state=open]:contrast-[0.88]',
        ],
      },

      // color default
      {
        color: 'default',
        variant: 'solid',
        highContrast: false,
        class: [
          'bg-default-solid-9',
          'text-default-contrast',
          'enabled:hover:bg-default-solid-10',
          'enabled:data-[state=open]:bg-default-solid-10',
        ],
      },
      {
        color: 'default',
        variant: 'solid',
        highContrast: true,
        class: ['bg-default-solid-12', 'text-default-solid-1'],
      },

      {
        color: 'default',
        variant: 'soft',
        class: [
          'bg-default-alpha-3',
          'enabled:hover:bg-default-alpha-4',
          'enabled:active:bg-default-alpha-5',
          'enabled:data-[state=open]:bg-default-alpha-4',
        ],
      },
      {
        color: 'default',
        variant: 'soft',
        highContrast: false,
        class: ['text-default-alpha-11'],
      },
      {
        color: 'default',
        variant: 'soft',
        highContrast: true,
        class: ['text-default-solid-12'],
      },

      {
        color: 'default',
        variant: 'surface',
        class: [
          'bg-default-surface',
          'ring-default-alpha-7',
          'enabled:hover:ring-default-alpha-8',
          'enabled:active:bg-default-alpha-3',
          'enabled:active:ring-default-alpha-8',
          'enabled:data-[state=open]:bg-default-surface',
          'enabled:data-[state=open]:ring-default-alpha-8',
        ],
      },
      {
        color: 'default',
        variant: 'surface',
        highContrast: false,
        class: ['text-default-alpha-11'],
      },
      {
        color: 'default',
        variant: 'surface',
        highContrast: true,
        class: ['text-default-alpha-12'],
      },

      {
        color: 'default',
        variant: 'outline',
        class: [
          'enabled:hover:bg-default-alpha-2',
          'enabled:active:bg-default-alpha-3',
          'enabled:data-[state=open]:bg-default-alpha-2',
        ],
      },
      {
        color: 'default',
        variant: 'outline',
        highContrast: false,
        class: ['text-default-alpha-11', 'ring-default-alpha-8'],
      },
      {
        color: 'default',
        variant: 'outline',
        highContrast: true,
        class: [
          'text-default-alpha-12',
          'enabled:ring-0',
          'enabled:shadow-[inset_0_0_0_1px_var(--frame-ui-color-default-alpha-7),inset_0_0_0_1px_var(--frame-ui-color-default-alpha-11)]',
        ],
      },

      {
        color: 'default',
        variant: 'ghost',
        class: [
          'enabled:hover:bg-default-alpha-3',
          'enabled:active:bg-default-alpha-4',
          'enabled:data-[state=open]:bg-default-alpha-3',
        ],
      },
      {
        color: 'default',
        variant: 'ghost',
        highContrast: false,
        class: ['text-default-alpha-11'],
      },
      {
        color: 'default',
        variant: 'ghost',
        highContrast: true,
        class: ['text-default-solid-12'],
      },

      // color primary
      {
        color: 'primary',
        variant: 'solid',
        highContrast: false,
        class: [
          'bg-primary-solid-9',
          'text-primary-contrast',
          'enabled:hover:bg-primary-solid-10',
          'enabled:data-[state=open]:bg-primary-solid-10',
        ],
      },
      {
        color: 'primary',
        variant: 'solid',
        highContrast: true,
        class: ['bg-primary-solid-12', 'text-default-solid-1'],
      },

      {
        color: 'primary',
        variant: 'soft',
        class: [
          'bg-primary-alpha-3',
          'enabled:hover:bg-primary-alpha-4',
          'enabled:active:bg-primary-alpha-5',
          'enabled:data-[state=open]:bg-primary-alpha-4',
        ],
      },
      {
        color: 'primary',
        variant: 'soft',
        highContrast: false,
        class: ['text-primary-alpha-11'],
      },
      {
        color: 'primary',
        variant: 'soft',
        highContrast: true,
        class: ['text-primary-solid-12'],
      },

      {
        color: 'primary',
        variant: 'surface',
        class: [
          'bg-primary-surface',
          'ring-primary-alpha-7',
          'enabled:hover:ring-primary-alpha-8',
          'enabled:active:bg-primary-alpha-3',
          'enabled:active:ring-primary-alpha-8',
          'enabled:data-[state=open]:bg-primary-surface',
          'enabled:data-[state=open]:ring-primary-alpha-8',
        ],
      },
      {
        color: 'primary',
        variant: 'surface',
        highContrast: false,
        class: ['text-primary-alpha-11'],
      },
      {
        color: 'primary',
        variant: 'surface',
        highContrast: true,
        class: ['text-primary-alpha-12'],
      },

      {
        color: 'primary',
        variant: 'outline',
        class: [
          'enabled:hover:bg-primary-alpha-2',
          'enabled:active:bg-primary-alpha-3',
          'enabled:data-[state=open]:bg-primary-alpha-2',
        ],
      },
      {
        color: 'primary',
        variant: 'outline',
        highContrast: false,
        class: ['text-primary-alpha-11', 'ring-primary-alpha-8'],
      },
      {
        color: 'primary',
        variant: 'outline',
        highContrast: true,
        class: [
          'text-primary-alpha-12',
          'enabled:ring-0',
          'enabled:shadow-[inset_0_0_0_1px_var(--frame-ui-color-primary-alpha-7),inset_0_0_0_1px_var(--frame-ui-color-default-alpha-11)]',
        ],
      },

      {
        color: 'primary',
        variant: 'ghost',
        class: [
          'enabled:hover:bg-primary-alpha-3',
          'enabled:active:bg-primary-alpha-4',
          'enabled:data-[state=open]:bg-primary-alpha-3',
        ],
      },
      {
        color: 'primary',
        variant: 'ghost',
        highContrast: false,
        class: ['text-primary-alpha-11'],
      },
      {
        color: 'primary',
        variant: 'ghost',
        highContrast: true,
        class: ['text-primary-solid-12'],
      },

      // color success
      {
        color: 'success',
        variant: 'solid',
        highContrast: false,
        class: [
          'bg-success-solid-9',
          'text-success-contrast',
          'enabled:hover:bg-success-solid-10',
          'enabled:data-[state=open]:bg-success-solid-10',
        ],
      },
      {
        color: 'success',
        variant: 'solid',
        highContrast: true,
        class: ['bg-success-solid-12', 'text-default-solid-1'],
      },

      {
        color: 'success',
        variant: 'soft',
        class: [
          'bg-success-alpha-3',
          'enabled:hover:bg-success-alpha-4',
          'enabled:active:bg-success-alpha-5',
          'enabled:data-[state=open]:bg-success-alpha-4',
        ],
      },
      {
        color: 'success',
        variant: 'soft',
        highContrast: false,
        class: ['text-success-alpha-11'],
      },
      {
        color: 'success',
        variant: 'soft',
        highContrast: true,
        class: ['text-success-solid-12'],
      },

      {
        color: 'success',
        variant: 'surface',
        class: [
          'bg-success-surface',
          'ring-success-alpha-7',
          'enabled:hover:ring-success-alpha-8',
          'enabled:active:bg-success-alpha-3',
          'enabled:active:ring-success-alpha-8',
          'enabled:data-[state=open]:bg-success-surface',
          'enabled:data-[state=open]:ring-success-alpha-8',
        ],
      },
      {
        color: 'success',
        variant: 'surface',
        highContrast: false,
        class: ['text-success-alpha-11'],
      },
      {
        color: 'success',
        variant: 'surface',
        highContrast: true,
        class: ['text-success-alpha-12'],
      },

      {
        color: 'success',
        variant: 'outline',
        class: [
          'enabled:hover:bg-success-alpha-2',
          'enabled:active:bg-success-alpha-3',
          'enabled:data-[state=open]:bg-success-alpha-2',
        ],
      },
      {
        color: 'success',
        variant: 'outline',
        highContrast: false,
        class: ['text-success-alpha-11', 'ring-success-alpha-8'],
      },
      {
        color: 'success',
        variant: 'outline',
        highContrast: true,
        class: [
          'text-success-alpha-12',
          'enabled:ring-0',
          'enabled:shadow-[inset_0_0_0_1px_var(--frame-ui-color-success-alpha-7),inset_0_0_0_1px_var(--frame-ui-color-default-alpha-11)]',
        ],
      },

      {
        color: 'success',
        variant: 'ghost',
        class: [
          'enabled:hover:bg-success-alpha-3',
          'enabled:active:bg-success-alpha-4',
          'enabled:data-[state=open]:bg-success-alpha-3',
        ],
      },
      {
        color: 'success',
        variant: 'ghost',
        highContrast: false,
        class: ['text-success-alpha-11'],
      },
      {
        color: 'success',
        variant: 'ghost',
        highContrast: true,
        class: ['text-success-solid-12'],
      },

      // color warning
      {
        color: 'warning',
        variant: 'solid',
        highContrast: false,
        class: [
          'bg-warning-solid-9',
          'text-warning-contrast',
          'enabled:hover:bg-warning-solid-10',
          'enabled:data-[state=open]:bg-warning-solid-10',
        ],
      },
      {
        color: 'warning',
        variant: 'solid',
        highContrast: true,
        class: ['bg-warning-solid-12', 'text-default-solid-1'],
      },

      {
        color: 'warning',
        variant: 'soft',
        class: [
          'bg-warning-alpha-3',
          'enabled:hover:bg-warning-alpha-4',
          'enabled:active:bg-warning-alpha-5',
          'enabled:data-[state=open]:bg-warning-alpha-4',
        ],
      },
      {
        color: 'warning',
        variant: 'soft',
        highContrast: false,
        class: ['text-warning-alpha-11'],
      },
      {
        color: 'warning',
        variant: 'soft',
        highContrast: true,
        class: ['text-warning-solid-12'],
      },

      {
        color: 'warning',
        variant: 'surface',
        class: [
          'bg-warning-surface',
          'ring-warning-alpha-7',
          'enabled:hover:ring-warning-alpha-8',
          'enabled:active:bg-warning-alpha-3',
          'enabled:active:ring-warning-alpha-8',
          'enabled:data-[state=open]:bg-warning-surface',
          'enabled:data-[state=open]:ring-warning-alpha-8',
        ],
      },
      {
        color: 'warning',
        variant: 'surface',
        highContrast: false,
        class: ['text-warning-alpha-11'],
      },
      {
        color: 'warning',
        variant: 'surface',
        highContrast: true,
        class: ['text-warning-alpha-12'],
      },

      {
        color: 'warning',
        variant: 'outline',
        class: [
          'enabled:hover:bg-warning-alpha-2',
          'enabled:active:bg-warning-alpha-3',
          'enabled:data-[state=open]:bg-warning-alpha-2',
        ],
      },
      {
        color: 'warning',
        variant: 'outline',
        highContrast: false,
        class: ['text-warning-alpha-11', 'ring-warning-alpha-8'],
      },
      {
        color: 'warning',
        variant: 'outline',
        highContrast: true,
        class: [
          'text-warning-alpha-12',
          'enabled:ring-0',
          'enabled:shadow-[inset_0_0_0_1px_var(--frame-ui-color-warning-alpha-7),inset_0_0_0_1px_var(--frame-ui-color-default-alpha-11)]',
        ],
      },

      {
        color: 'warning',
        variant: 'ghost',
        class: [
          'enabled:hover:bg-warning-alpha-3',
          'enabled:active:bg-warning-alpha-4',
          'enabled:data-[state=open]:bg-warning-alpha-3',
        ],
      },
      {
        color: 'warning',
        variant: 'ghost',
        highContrast: false,
        class: ['text-warning-alpha-11'],
      },
      {
        color: 'warning',
        variant: 'ghost',
        highContrast: true,
        class: ['text-warning-solid-12'],
      },

      // color danger
      {
        color: 'danger',
        variant: 'solid',
        highContrast: false,
        class: [
          'bg-danger-solid-9',
          'text-danger-contrast',
          'enabled:hover:bg-danger-solid-10',
          'enabled:data-[state=open]:bg-danger-solid-10',
        ],
      },
      {
        color: 'danger',
        variant: 'solid',
        highContrast: true,
        class: ['bg-danger-solid-12', 'text-default-solid-1'],
      },

      {
        color: 'danger',
        variant: 'soft',
        class: [
          'bg-danger-alpha-3',
          'enabled:hover:bg-danger-alpha-4',
          'enabled:active:bg-danger-alpha-5',
          'enabled:data-[state=open]:bg-danger-alpha-4',
        ],
      },
      {
        color: 'danger',
        variant: 'soft',
        highContrast: false,
        class: ['text-danger-alpha-11'],
      },
      {
        color: 'danger',
        variant: 'soft',
        highContrast: true,
        class: ['text-danger-solid-12'],
      },

      {
        color: 'danger',
        variant: 'surface',
        class: [
          'bg-danger-surface',
          'ring-danger-alpha-7',
          'enabled:hover:ring-danger-alpha-8',
          'enabled:active:bg-danger-alpha-3',
          'enabled:active:ring-danger-alpha-8',
          'enabled:data-[state=open]:bg-danger-surface',
          'enabled:data-[state=open]:ring-danger-alpha-8',
        ],
      },
      {
        color: 'danger',
        variant: 'surface',
        highContrast: false,
        class: ['text-danger-alpha-11'],
      },
      {
        color: 'danger',
        variant: 'surface',
        highContrast: true,
        class: ['text-danger-alpha-12'],
      },

      {
        color: 'danger',
        variant: 'outline',
        class: [
          'enabled:hover:bg-danger-alpha-2',
          'enabled:active:bg-danger-alpha-3',
          'enabled:data-[state=open]:bg-danger-alpha-2',
        ],
      },
      {
        color: 'danger',
        variant: 'outline',
        highContrast: false,
        class: ['text-danger-alpha-11', 'ring-danger-alpha-8'],
      },
      {
        color: 'danger',
        variant: 'outline',
        highContrast: true,
        class: [
          'text-danger-alpha-12',
          'enabled:ring-0',
          'enabled:shadow-[inset_0_0_0_1px_var(--frame-ui-color-danger-alpha-7),inset_0_0_0_1px_var(--frame-ui-color-default-alpha-11)]',
        ],
      },

      {
        color: 'danger',
        variant: 'ghost',
        class: [
          'enabled:hover:bg-danger-alpha-3',
          'enabled:active:bg-danger-alpha-4',
          'enabled:data-[state=open]:bg-danger-alpha-3',
        ],
      },
      {
        color: 'danger',
        variant: 'ghost',
        highContrast: false,
        class: ['text-danger-alpha-11'],
      },
      {
        color: 'danger',
        variant: 'ghost',
        highContrast: true,
        class: ['text-danger-solid-12'],
      },
    ],
  }
);
