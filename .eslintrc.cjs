module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript'
  ],
  overrides: [
  ],
  parserOptions: {
    project: 'tsconfig.json',
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    'object-curly-spacing': 'error',
    'react/prop-types': 'off',
    'react/jsx-curly-spacing': ['error', { when: 'always', children: true }],
    '@typescript-eslint/triple-slash-reference': ['error', { types: 'always' }]
  }
}
