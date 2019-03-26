const htmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    devtool: "source-map",
    entry: "./frontend/src/index.js",
    output: {
        path: path.resolve(__dirname + "/dist/"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: "./frontend/public/index.html",
            filename: "./index.html"
        })
    ]
}