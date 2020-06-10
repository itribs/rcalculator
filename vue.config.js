let path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    publicPath: '',
    assetsDir: 'static',
    productionSourceMap: false,
    configureWebpack: {
        // entry: {
        //     'preload': './src/preload.js'
        // }
        plugins: [
            new CopyWebpackPlugin([
                { from: 'src/interpreter', to: 'interpreter' },
                { from: 'src/preload.js', to: 'preload.js' }
            ])
        ]
    }
}