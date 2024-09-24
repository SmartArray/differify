const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/differify.ts',
  output: {
    path: path.resolve(__dirname, 'dist', 'umd'),
    filename: 'differify.umd.js',
    libraryTarget: 'umd',
    library: 'Differify',
    umdNamedDefine: true,
    globalObject: 'this'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  externals: {
  }
};

