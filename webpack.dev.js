const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const webpack = require('webpack');

module.exports = merge(common, {
    mode: 'development',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    // target is here to resolve https://github.com/webpack/webpack-dev-server/issues/2758
    // (HMR not working when there is a .browserslistrc)
    target: 'web',
    plugins: [new webpack.HotModuleReplacementPlugin()],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader', //2. Inject styles into DOM
                    'css-loader', //1. imports css and requires url/imports
                ],
            },
        ],
    },
    devServer: {
        contentBase: './dist',
        open: true,
        hot: true,
        port: 5001,
    },
});
