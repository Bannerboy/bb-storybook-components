module.exports = {
  extends: ['airbnb', 'airbnb/hooks', 'plugin:prettier/recommended'],
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['**/*.stories.jsx'] },
    ],
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',
  },
};
