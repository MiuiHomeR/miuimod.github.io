require('@vue/cli-service')
module.exports = {
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
    publicPath: process.env.NODE_ENV === 'production'
        ? '/miuimod.github.io/'
        : '/',
    devServer: {
        port: 5000,
        open: true,
    }
}