const path = require('path');
module.exports = {
  stories: ['../src/**/*.stories.jsx', '../src/**/*.stories.mdx'],
  addons: [],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.scss$/,
      oneOf: [
        {
          issuer: {
            test: /\.stories.jsx$/,
          },
          use: ['raw-loader'],
          include: path.resolve(__dirname, '../'),
        },
        {
          use: [
            'style-loader',
            { loader: 'css-loader', options: { importLoaders: 1 } },
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => [require('autoprefixer')],
              },
            },
            'resolve-url-loader',
            'sass-loader',
          ],
          include: path.resolve(__dirname, '../'),
        },
      ],
    });
    return config;
  },
};
