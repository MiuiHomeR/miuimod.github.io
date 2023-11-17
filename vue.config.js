const path = require('path')

const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
    pages: {
        index: {
            entry: './src/main.js',
            template: 'public/index.html',
            filename: 'index.html',
            output: {
                path: path.resolve( __dirname, '/dist' ),
                filename: '[name].js',
                clean: true,
            },
            module: {
                rules: [
                    { test: /\.vue$/, use: 'vue-loader' },
                    { test: /\.s[ca]ss$/, use: ['style-loader','css-loader','scss-loader']  },
                    { test: /\.m?js$/, use: 'babel-loader' },
                    { test: /\.md$/, use: 'vue-markdown-loader' },
                    {
                        test: /\.(png|jpe?g|gif|svg|webp)$/,
                        type: 'asset/resource',
                    },
                ],
            },
            plugins: [

            ],
        },
    },
    chainWebpack: (config) => {
        config.module.rule('md')
            .test(/\.md/)
            .use('vue-loader')
            .loader('vue-loader')
            .end()
            .use('vue-markdown-loader')
            .loader('vue-markdown-loader/lib/markdown-compiler')
            .options({
                raw: true
            })
    },
    assetsDir: 'static',
    parallel: false,
    publicPath: './',
    devServer: {
        port: 5000,
        open: true,
    },
})