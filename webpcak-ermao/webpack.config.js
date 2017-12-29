var htmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
module.exports = {
    entry: {
        main: './src/script/main.js',
        index: './src/script/index.js',
    },
    output: {
        path: __dirname + '/dist',
        filename: 'js/[name]-[hash].js'
    },
    module: {
        loaders: [
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
                test: /\.css/,
                // loaders: [
                //     'style-loader',
                //     'css-loader',
                // ],
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: [
                                require('autoprefixer')({broswer: 'last 5 versions'}), //处理CSS前缀问题，自动添加前缀
                            ]
                        }
                    }
                ],
            },
            {
                test: /\.scss/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: [
                                require('autoprefixer')({broswer: 'last 5 versions'}), //处理CSS前缀问题，自动添加前缀
                            ]
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            importLoaders: 1
                        }
                    }
                ],
            },
            {
                test: /\.html/,
                loader: 'html-loader',
            },
        ]
    },

    plugins: [
        new htmlWebpackPlugin({
            template: 'index.html',
            filename: 'index.html',
            title: '这是index.html文件',
            inject: 'body'
        })
    ]
}