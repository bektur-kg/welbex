module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': 'plugin:react/recommended',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'plugins': [
    'react',
  ],
  'rules': {
    'no-unused-vars': 'off',
    'quotes': ['error', 'single'],
    'camelcase': 'off',
    'jsx-quotes': ['error', 'prefer-double'],
    'no-use-before-define': 'off',
    'no-undef': 'off',
    'comma-dangle': ['error', 'always-multiline'],
    'no-useless-return': 'off',
    'semi': [2, 'never'],
    'indent': ['error', 2],
    'no-console': 'off',
    'no-const-assign': 'error',
    'no-duplicate-case': 2,
    'no-var': 2,
    'no-empty': 2,
    'keyword-spacing': 2,
    'no-trailing-spaces': 2,
    'react/prop-types': 'off',
    'react/display-name': 'off',
  },
}