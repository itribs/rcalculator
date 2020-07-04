const path = require('path')
const FileManagerPlugin = require('filemanager-webpack-plugin');

module.exports = {
    publicPath: '',
    assetsDir: 'static',
    productionSourceMap: false,
    filenameHashing: false,
    configureWebpack: {
        entry: {
            'preload': './src/preload.js'
        },
        plugins: [
            new FileManagerPlugin({
                onEnd: {
                    move: [
                        { source: path.resolve("./dist/static/js/preload.js"), destination: path.resolve("./dist/preload.js") }
                    ]
                }
            })
        ]
    }
}