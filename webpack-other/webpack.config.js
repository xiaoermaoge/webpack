var htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        index: './src/script/index.js'
    },
    output: {
        path: __dirname + '/dist',
        filename: 'js/[name]-[hash].js',
        // publicPath: 'src/images'
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
                ]
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
            title: '这是webpack生成的index.html 文件'
        })
    ]
}