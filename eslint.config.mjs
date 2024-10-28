import { FlatCompat } from '@eslint/eslintrc';
import jsConfig from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';
import unusedImportsConfig from 'eslint-plugin-unused-imports';

const compat = new FlatCompat();

// TODO: eslint-config-nextがFlat Configに対応したらcompatを外す
// NOTE: https://eslint.org/docs/latest/use/configure/migration-guide#using-eslintrc-configs-in-flat-config
/** @type {import('eslint').Linter.Config} */
const config = [
  jsConfig.configs.recommended,
  ...compat.extends('next/core-web-vitals'),
  ...compat.extends('next/typescript'),
  {
    rules: {
      'import/order': [
        'warn',
        {
          groups: ['builtin', 'external', 'internal', ['parent', 'sibling', 'index'], 'object'],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
          },
        },
      ],
      'import/consistent-type-specifier-style': ['warn', 'prefer-inline'],
    },
  },
  {
    plugins: {
      'unused-imports': unusedImportsConfig,
    },
    rules: {
      'unused-imports/no-unused-imports': 'warn',
    },
  },
  prettierConfig,
  {
    linterOptions: {
      reportUnusedDisableDirectives: 'error',
    },
  },
];

export default config;
