var path = require('path')
var webpack = require('webpack')

module.exports = {
    devtool: 'eval',
    entry: [
        './src/index.js'
    ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                loaders: ['babel'],
                exclude: '/node_modules/',
                include: path.join(__dirname, 'src')
            }
        ]
    }
}