module.exports = {
  extends: 'airbnb',
  plugins: [
    'jsx-a11y',
    'import',
  ],
  env: {
    jest: true,
    mocha: true,
  },
  rules: {
    indent: ['warn', 2, { SwitchCase: 1 }],
    'no-plusplus': 'warn',
    'no-underscore-dangle': 'warn',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    semi: ['warn', 'always'],
    'prefer-const': 'warn',
    'no-param-reassign': 'warn',
  },
};
