const path = require('path');

module.exports = {
  entry: './assets/index.js',
  watch: true,
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      {
        test: /\.sass$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  }
};
