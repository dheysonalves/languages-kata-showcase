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
    indent: ['error', 2, { SwitchCase: 1 }],
  },
};
