const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require("webpack");
const path = require("path");

module.exports = {
    entry: {
        main: "./src/index.js",
        sw: "./src/service-worker.js",
    },
    output: {
        filename: "[name].bundle.[chunkhash].min.js",
        path: path.resolve(__dirname) // eslint-disable-line
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
                use: ExtractTextPlugin.extract({
                    fallback:  "style-loader", // creates style nodes from JS strings
                    use: ["css-loader", "sass-loader"], // translates CSS into CommonJS
                }),
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
        new webpack.EnvironmentPlugin(["NODE_ENV"]),
        new CleanWebpackPlugin(["."]),
        new webpack.optimize.UglifyJsPlugin(),
        new HtmlWebpackPlugin({ template: "src/index.html" }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "common", // Specify the common bundle's name.
        }),
        new ExtractTextPlugin("styles.[chunkhash].css"),
    ],
    externals: {
        fs: "{}",
        tls: "{}",
        net: "{}",
        console: "{}",
    },
};
