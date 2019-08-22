/**
 * Shared configuration preset.
 */
const baseRules = require('./baseRules');
const reactRules = require('./reactRules');

const rules = Object.assign({}, baseRules, reactRules);

module.exports = {
  env: {
    es6: true,
    jasmine: true,
    jest: true,
    mocha: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'prettier/react'
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: [
    'mocha',
    'sort-imports-es6',
    'import',
    'react',
    'react-hooks',
    'sort-class-members'
  ],
  root: true,
  rules,
  settings: {
    react: {
      pragma: 'React',
      version: 'detect'
    }
  }
};