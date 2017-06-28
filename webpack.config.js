/**
 * Created by qiuyongjin on 2017/6/10.
 */
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry: './js/main.js',
    output: {
        path: __dirname,
        filename: '../static/js/app.js',
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue',
            },
            {
                test: /\.js$/,
                loader: 'babel',
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url?limit=8192',
            }
        ],
    },
    vue: {
        loaders: {
            css: ExtractTextPlugin.extract('vue-style-loader', 'css-loader', 'less-loader')
        }
    },
    plugins: [
        new ExtractTextPlugin('../static/css/style.css', {
            allChunks: true,
        }),
        new webpack.ProvidePlugin({
            jQuery: "jquery",
            $: "jquery"
        })
    ],
};