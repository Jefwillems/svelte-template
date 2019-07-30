module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module'
  },
  overrides: [{
    files: ['**/*.svelte'],
    processor: 'svelte3/svelte3'
  }],
  plugins: ['svelte3'],
  rules: {
  },
};
