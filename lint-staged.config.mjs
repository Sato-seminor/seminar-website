import { relative } from 'node:path';

const jsFiles = '*.{?([cm])js,jsx}';
const tsFiles = '*.{?([cm])ts,tsx}';
const otherFiles = `!({${jsFiles},${tsFiles}})`;

const tscCommand = () => 'tsc --noEmit';

/** @see {@link https://nextjs.org/docs/app/building-your-application/configuring/eslint#lint-staged} */
const nextLintCommand = (files) =>
  `next lint --fix ${files.map((f) => `--file ${relative(process.cwd(), f)}`).join(' ')}`;

const prettierCommand = 'prettier --write --ignore-unknown';

/** @type {import('lint-staged').Config} */
const config = {
  [jsFiles]: [nextLintCommand, prettierCommand],
  [tsFiles]: [tscCommand, nextLintCommand, prettierCommand],
  [otherFiles]: prettierCommand,
};

export default config;
