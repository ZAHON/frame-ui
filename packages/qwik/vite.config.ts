import { defineConfig } from 'vite';
import pkg from './package.json';
import { qwikVite } from '@builder.io/qwik/optimizer';
import tsconfigPaths from 'vite-tsconfig-paths';
import tailwindcss from '@tailwindcss/vite';

const { dependencies = {}, peerDependencies = {} } = pkg as any;
const makeRegex = (dep: any) => new RegExp(`^${dep}(/.*)?$`);
const excludeAll = (obj: any) => Object.keys(obj).map(makeRegex);

export default defineConfig(() => {
  return {
    build: {
      target: 'es2020',
      lib: {
        entry: 'src/index.ts',
        formats: ['es', 'cjs'],
        fileName: (format, entryName) => `${entryName}.qwik.${format === 'es' ? 'mjs' : 'cjs'}`,
      },
      rollupOptions: {
        output: {
          exports: 'named',
          preserveModules: true,
          preserveModulesRoot: 'src',
        },
        external: [/^node:.*/, ...excludeAll(dependencies), ...excludeAll(peerDependencies)],
      },
    },
    test: {
      environment: 'jsdom',
      globals: true,
    },
    plugins: [qwikVite(), tsconfigPaths({ root: '.' }), tailwindcss()],
  };
});
