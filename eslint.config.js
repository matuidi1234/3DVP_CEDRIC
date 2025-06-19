import js from '@eslint/js';
import globals from 'globals';

export default [
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    ignores: ['**/node_modules/**'],
    languageOptions: {
      globals: {
        ...globals.node
      }
    },
    rules: {
      'no-console': 'off'
    }
  },
  {
    files: ['src/public/js/**/*.js'],
    languageOptions: {
      globals: {
        ...globals.browser
      }
    },
    rules: {
      'no-console': 'warn'
    }
  },
  {
    files: ['test/**/*.js'],
    languageOptions: {
      globals: {
        ...globals.jest,
        ...globals.node
      }
    }
  },
  {
    rules: {
      'indent': ['error', 2],
      'linebreak-style': ['error', 'unix'],
      'quotes': ['error', 'single'],
      'semi': ['error', 'always'],
      'eqeqeq': 'error'
    }
  }
];