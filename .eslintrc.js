module.exports = {
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json']
  },
  plugins: ['@typescript-eslint'],
  env: {
    browser: true,
    es2021: true
  },
  rules: {
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/array-type': ['error', { default: 'array' }],
    '@typescript-eslint/consistent-indexed-object-style': ['error', 'record'],
    '@typescript-eslint/explicit-function-return-type': 'error',
    '@typescript-eslint/explicit-member-accessibility': 'error',
    '@typescript-eslint/no-duplicate-enum-values': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-for-in-array': 'error',
    '@typescript-eslint/no-unsafe-return': 'error',
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/prefer-reduce-type-parameter': 'error',
    'array-bracket-spacing': ['error', 'never'],
    'arrow-spacing': 'error',
    'block-spacing': ['error', 'always'],
    'brace-style': 'error',
    'comma-spacing': ['error', { before: false, after: true }],
    'dot-location': ['error', 'property'],
    'eol-last': 'error',
    'for-direction': 'error',
    'func-call-spacing': ['error', 'never'],
    'generator-star-spacing': ['error', { before: false, after: true }],
    'getter-return': 'error',
    'implicit-arrow-linebreak': ['error', 'beside'],
    'indent': ['error', 2],
    'key-spacing': ['error', { beforeColon: false }],
    'keyword-spacing': ['error', { before: true, after: true }],
    'line-comment-position': ['error', { position: 'above' }],
    'max-len': ['error', { code: 120 }],
    'max-lines-per-function': ['error', { max: 30 }],
    'max-statements-per-line': ['error', { max: 1 }],
    'new-parens': 'error',
    'no-alert': 'error',
    'no-array-constructor': 'error',
    'no-console': 'error',
    'no-else-return': 'error',
    'no-empty-function': 'error',
    'no-eq-null': 'error',
    'no-eval': 'error',
    'no-labels': 'error',
    'no-multi-spaces': 'error',
    'no-multiple-empty-lines': 'error',
    'no-tabs': 'error',
    'no-sequences': 'error',
    'no-trailing-spaces': 'error',
    'no-useless-rename': 'error',
    'no-useless-return': 'error',
    'no-var': 'error',
    'no-void': 'error',
    'no-whitespace-before-property': 'error',
    'nonblock-statement-body-position': ['error', 'beside'],
    'object-curly-spacing': ['error', 'always', { objectsInObjects: false }],
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'quotes': ['error', 'single', { avoidEscape: true }],
    'rest-spread-spacing': ['error', 'never'],
    'semi': ['error', 'always'],
    'semi-spacing': ['error', { before: false, after: true }],
    'semi-style': ['error', 'last'],
    'sort-keys': 'warn',
    'space-before-blocks': 'error',
    'space-before-function-paren': ['error', 'never'],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': 'error',
    'space-unary-ops': 'error',
    'switch-colon-spacing': ['error', { after: true, before: false }],
    'template-curly-spacing': 'error',
  }
}
