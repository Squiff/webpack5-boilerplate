const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const copyWebpackPlugin = require('copy-webpack-plugin');
const { assetFileName } = require('./webpackconfig/buildutils');

module.exports = {
    entry: {
        main: './src/main.js',
    },
    output: { assetModuleFilename: assetFileName },
    plugins: [
        // inject scripts/styles into template
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html',
        }),
        // anything in /public will be copied to output root
        new copyWebpackPlugin({
            patterns: [{ from: 'public', to: '' }],
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                // import with relative url in @font-face
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name][ext]',
                },
            },
        ],
    },
};
