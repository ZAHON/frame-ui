import { config } from '@frame-ui/eslint-config';

export default [
  ...config,
  {
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.json'],
      },
    },
  },
];
