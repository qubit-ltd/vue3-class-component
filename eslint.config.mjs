////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import qubitConfig from '@qubit-ltd/eslint-config';
import babelParser from '@babel/eslint-parser';
import vueParser from 'vue-eslint-parser';

export default [
  ...qubitConfig,
  {
    files: ['**/*.js', '**/*.mjs'],
    languageOptions: {
      parser: babelParser,
      ecmaVersion: 2022,
      sourceType: 'module',
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          plugins: [
            ['@babel/plugin-proposal-decorators', { legacy: true }],
          ],
        },
      },
    },
  },
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      ecmaVersion: 2022,
      sourceType: 'module',
      parserOptions: {
        parser: babelParser,
        requireConfigFile: false,
        babelOptions: {
          plugins: [
            ['@babel/plugin-proposal-decorators', { legacy: true }],
          ],
        },
      },
    },
  },
  {
    files: ['test/**/*.js'],
    rules: {
      'max-classes-per-file': 'off',
    },
  },
];
