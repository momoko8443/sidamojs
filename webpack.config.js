const path = require('path');

module.exports = {
  entry: './src/main.ts',
  devtool: 'inline-source-map',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          {
            loader: 'raw-loader',
            // options: {
            //   esModule: true,
            // }
          },
          // "css-loader"
        ]
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js','css' ],
  },
  output: {
    filename: 'sidamo.js',
    libraryTarget: "umd",
    path: path.resolve(__dirname, 'dist'),
    umdNamedDefine: true
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    hot: true
  }
};