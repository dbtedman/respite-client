//------------------------------------------------------------------------------
//
// Webpack Configuration, https://webpack.js.org/configuration/
//
//------------------------------------------------------------------------------

// eslint-disable-next-line @typescript-eslint/no-var-requires
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: `${__dirname}/src/spa.tsx`,

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
                        loader: "ts-loader",
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
            template: `${__dirname}/src/public/index.html`,
        }),
    ],
};
