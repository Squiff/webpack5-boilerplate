const path = require('path');
const common = require('./webpack.common.js');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { filename } = require('./webpackconfig/buildutils');

module.exports = merge(common, {
    mode: 'production',
    output: {
        filename: `js/${filename}.js`,
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: `css/${filename}.css`,
        }),
    ],
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: { publicPath: '' },
                    },
                    'css-loader',
                    'postcss-loader',
                ],
            },
        ],
    },
    optimization: {
        minimizer: [new CssMinimizerPlugin(), '...'],
        // split out webpack runtime
        runtimeChunk: { name: 'runtime' },

        // specify modules to split out separately
        // splitChunks: {
        //     automaticNameDelimiter: '-',
        //     cacheGroups: {
        //         commons: {
        //             test: /[\\/]node_modules[\\/](react|react-dom|lodash)[\\/]/,
        //             name: 'vendor',
        //             // async = import(''), all = import and import(''), initial = entry point
        //             chunks: 'all'
        //         }
        //     }
        // }
    },
});
