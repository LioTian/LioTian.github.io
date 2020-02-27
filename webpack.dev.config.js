const path = require('path');
module.exports = {
    entry: [
        'react-hot-loader/patch',
        path.join(__dirname, 'src/index.js')
    ],
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: ['babel-loader?cacheDirectory=true'],
            include: path.join(__dirname, 'src')
        }]
    },
    devServer: {
        contentBase: path.join(__dirname, './dist'),  // 设置服务器访问的 URL的根目录
        port: 8888,                  // 指定一个端口号，默认是 `8080`
        historyApiFallback: true,    // 设置任意的404响应都被替代为`index.html`
        host: '0.0.0.0',              // 设置主机地址，默认是 `localhost`
        hot: true                    // 设置热加载
    },
    resolve: {
        alias: {
            pages: path.join(__dirname, 'src/pages'),
            component: path.join(__dirname, 'src/component'),
            router: path.join(__dirname, 'src/router'),
            actions: path.join(__dirname, 'src/redux/actions'),
            reducers: path.join(__dirname, 'src/redux/reducers')
        }
    }
}