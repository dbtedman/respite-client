//------------------------------------------------------------------------------
//
// Webpack Configuration, https://webpack.js.org/configuration/
//
//------------------------------------------------------------------------------

// TODO: Switch to https://webpack.js.org/configuration/configuration-languages/#typescript

// eslint-disable-next-line @typescript-eslint/no-var-requires
const HtmlWebpackPlugin = require("html-webpack-plugin");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

module.exports = {
    entry: `${__dirname}/client/client.tsx`,
    output: {
        path: path.resolve(__dirname, "dist/assets"),
    },
    devtool: "source-map",

    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
    },

    devServer: {
        contentBase: "./dist",
        historyApiFallback: true,
        port: process.env.PORT || 8080,
        host: process.env.HOST || "localhost",
    },

    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                    },
                ],
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader",
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: `${__dirname}/client/public/index.html`,
            filename: "../index.html",
        }),
    ],
};
