const path = require("path");
const { SourceMapDevToolPlugin } = require("webpack");

module.exports = {
  entry: {
    main: "./src/index.js",
    login: "./src/app/login/login.js",
    list: "./src/app/components/listing/list.js",
    create_account: "./src/app/create_account/create_account.js",
    menu_account: "./src/app/components/menu/account/menu_account.js",
    notification: "./src/app/components/menu/notification/notification.js",
    map: "./src/app/components/map/map.js",
    empty: "./src/app/components/menu/notification/empty.js",
    search: "./src/app/components/header/search.js",
    item_details: "./src/app/components/item_details/item_details.js",
    add_item: "./src/app/add_item/add_item.js",
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
