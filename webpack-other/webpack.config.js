var htmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
//    "webpack": "webpack --config webpack.config.js --colors --progress --display-modules"
module.exports = {
    entry: {
        index: './src/script/index.js',
        ppp: './src/script/ppp.js'
    },
    devtool: 'inline-source-map',
    output: {
        path: __dirname + '/dist',
        // filename: 'js/[name]-[hash].js',
        // filename: 'js/bundle.js',
        filename: 'js/[name].js',
        // chunkFilename: '[name].bundle.js',
        // publicPath: "/assets/"
        // publicPath: 'src/images'
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.js/,
                loader: 'babel-loader',
                exclude: '/node_modules/',
                // exclude: path.resolve(__dirnmae, '/node_modules'),
                include: '/src/',
                // include: path.resolve(__dirnmae, '/src'),
                query: {
                    presets: ['latest']
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [ 'css-loader', 'postcss-loader' ]
                })
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    //resolve-url-loader may be chained before sass-loader if necessary
                    use: ['css-loader', 'sass-loader']
                })
            },
            // {
            //     test: /\.css/,
            //     use: [
            //         'style-loader',
            //         {
            //             loader: 'css-loader',
            //             options: {
            //                 importLoaders: 1
            //             }
            //         },
            //         {
            //             loader: 'postcss-loader',
            //             options: {
            //                 ident: 'postcss',
            //                 plugins: [
            //                     require('autoprefixer')({broswer: 'last 5 versions'}), //处理CSS前缀问题，自动添加前缀
            //                 ]
            //             }
            //         }
            //     ]
            // },
            // {
            //     test: /\.scss/,
            //     use: [
            //         'style-loader',
            //         {
            //             loader: 'css-loader',
            //             options: {
            //                 importLoaders: 1
            //             }
            //         },
            //         {
            //             loader: 'postcss-loader',
            //             options: {
            //                 ident: 'postcss',
            //                 plugins: [
            //                     require('autoprefixer')({broswer: 'last 5 versions'}), //处理CSS前缀问题，自动添加前缀
            //                 ]
            //             }
            //         },
            //         {
            //             loader: 'sass-loader',
            //             options: {
            //                 importLoaders: 1
            //             }
            //         }
            //     ],
            // },
            {
                test: /\.html/,
                loader: 'html-loader',
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                loader: 'url-loader?limit=8192&name=img/[name].[ext]'
            },
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: 'index.html',
            filename: 'index.html',
            inject: 'body',
            excludeChunks: ['ppp'],
            title: '这是webpack生成的index.html 文件'
        }),
        new htmlWebpackPlugin({
            template: 'ppp.html',
            filename: 'ppp.html',
            inject: 'body',
            excludeChunks: ['index'],
            title: '这是webpack生成的ppp.html 文件'
        }),
        // new UglifyJSPlugin({
        //     // minimize: false
        // }),
        new ExtractTextPlugin('css/[name].css'),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
}