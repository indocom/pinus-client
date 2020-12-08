const path = require('path');

// Export a function. Accept the base config as the only param.
module.exports = ({ config, mode }) => {

  /* Support for React Native Web */
  config.resolve = {
    modules: ['node_modules'],
    extensions: ['.web.js', '.js', '.json', '.web.jsx', '.jsx', 'ts', 'tsx'],
  };

  /* PostCSS Support */
  config.module.rules.push({
    test: /\.css$/,
    loaders: [
      // Loader for webpack to process CSS with PostCSS
      {
        loader: 'postcss-loader',
        options: {
          sourceMap: true,
        },
      },
    ],

    include: path.resolve(__dirname, '../'),
  });

  /* TypeScript Support */
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        // Typescript compiler
        loader: require.resolve('awesome-typescript-loader'),
      },
    ],
  });

  config.module.rules.push({
    test: /.*\.(gif|png|jpe?g|svg)$/i,
    use: [
      {
        loader: "file-loader",
        options: {
          name: "[name].[hash].[ext]",
        },
      },
    ],
  });

  config.resolve.extensions.push('.ts', '.tsx');

  // Return the altered config
  return config;
};