const sourceMapEnable = true;

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.scss/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: sourceMapEnable,
              importLoaders: 2
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: sourceMapEnable
            }
          }
        ]
      }
    ]
  }
};
