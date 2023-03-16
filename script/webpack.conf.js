const webpack = require('webpack')
const path = require('path')

const pkg = require('../package.json')

const rootPath = path.resolve(__dirname, '../')

const config = {
    mode: 'production',
    entry: path.resolve(rootPath, 'src', 'index.js'),
    output: {
        filename: `${pkg.name}.min.js`,
        path: path.resolve(rootPath, 'min'),
        library: `${pkg.name}`,
        libraryTarget: "umd" //打包模式 ：详见下面
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: "babel-loader"
        }]
    }
}

module.exports = config

// var  ：分配给一个变量
// assign  ：产生一个隐形的变量
// this  ：分配给 this 一个属性
// window  ：分配给 window 一个属性
// global  ：分配给 global 一个属性
// commonjs ：分配给 exports一个属性
// commonjs2 ：分配给 modul.exports一个属性
// amd :暴露Amd模块
// umd :全环境使用
