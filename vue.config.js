const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
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