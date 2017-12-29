var htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        main: './src/script/main.js',
        index: './src/script/index.js',
        b: './src/script/b.js',
        c: './src/script/c.js',
    },
    output: {
        path: __dirname + '/dist',
        filename: 'js/[name]-[hash].js',
        // publicPath: '',
    },
    plugins: [
        new htmlWebpackPlugin({
            template: 'index.html',
            filename: 'main.html',
            inject: 'body',
            title: 'hello main',
            excludeChunks: ['b']
        }),
        new htmlWebpackPlugin({
            template: 'index.html',
            filename: 'b.html',
            inject: 'body',
            title: 'hello main',
            excludeChunks: ['b','c']
        }),
    ]
}