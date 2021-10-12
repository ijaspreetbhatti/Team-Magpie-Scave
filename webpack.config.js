const path = require('path');
const { SourceMapDevToolPlugin } = require("webpack");

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "main.js",
        sourceMapFilename: "main.js.map"
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.js$/,
                enforce: "pre",
                use: ["source-map-loader"],
            },
        ]
    },
    devServer: {
        static: {
            directory: path.join(__dirname, '.'),
        },
        port: 9000,
    },
    plugins: [
        new SourceMapDevToolPlugin({
            filename: "[file].map"
        }),
    ]
};