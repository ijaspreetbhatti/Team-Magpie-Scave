const path = require("path");
const { SourceMapDevToolPlugin } = require("webpack");

module.exports = {
  entry: {
    main: "./src/index.js",
    login: "./src/app/login/login.js",
    list: "./src/app/components/listing/list.js",
    create_account: "./src/app/create_account/create_account.js",
    home: "./src/app/components/home/home.js",
    menu_listing: "./src/app/menu_listing/menu_listing.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    sourceMapFilename: "[name].js.map",
  },
  mode: "development",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        enforce: "pre",
        use: ["source-map-loader"],
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "."),
    },
    port: 9000,
  },
  plugins: [
    new SourceMapDevToolPlugin({
      filename: "[file].map",
    }),
  ],
};
