module.exports = {
  env: {
    'jest/globals': true,
  },
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'jest'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'error',
        'no-undef': 'error',
        'object-curly-spacing': ['error', 'always'],
        'array-bracket-spacing': ['error', 'never'],
        'react/require-default-props': ['error'],
        'react/default-props-match-prop-types': ['error'],
        'react/sort-prop-types': ['error'],
      },
      settings: {
        'import/resolver': {
          'babel-module': {},
        },
      },
    },
  ],
};
