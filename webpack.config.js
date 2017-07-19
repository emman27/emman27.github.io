const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const path = require("path");

module.exports = {
    entry: {
        main: "./src/index.js",
        sw: "./src/service-worker.js",
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist") // eslint-disable-line
    },
    devtool: "inline-source-map",
    devServer: {
        historyApiFallback: true,
        disableHostCheck: true,
        contentBase: [__dirname + "/src", __dirname + "/node_modules"] // eslint-disable-line
    },
    module: {
        rules: [
            { test: /\.js$/, use: ["babel-loader"], exclude: /node_modules/ },
            { test: /\.jsx$/, use: ["babel-loader"], exclude: /node_modules/ },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            sourceMap: true,
                            importLoaders: 1,
                            localIdentName: "[name]--[local]--[hash:base64:8]",
                        },
                    },
                    "postcss-loader", // has separate config, see postcss.config.js nearby
                ],
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader", // creates style nodes from JS strings
                }, {
                    loader: "css-loader", // translates CSS into CommonJS
                }, {
                    loader: "sass-loader", // compiles Sass to CSS
                }],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    "file-loader",
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    "file-loader",
                ],
            },
        ],
    },
    resolve: {
        extensions: [".js", ".jsx"],
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
        new HtmlWebpackPlugin({ template: "src/index.html" }),
    ],
    externals: {
        "react": "React",
        "react-dom": "ReactDOM",
    },
};
