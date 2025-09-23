/**
 * @type {import("prettier").Config}
 */
export const config = {
  printWidth: 120,
  semi: true,
  trailingComma: 'es5',
  singleQuote: true,
  tabWidth: 2,
  useTabs: false,
  tailwindFunctions: ['cva'],
  plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
};
