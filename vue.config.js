const is_prod = process.env.NODE_ENV === 'production'

module.exports = {
    configureWebpack: {

    },
    chainWebpack: config => {
        config.module
            .rule("md")
            .test(/\.md$/)
            .use('vue-loader')
            .loader('vue-loader')
            .end()
            .use('vue-markdown-loader')
            .loader('vue-markdown-loader/lib/markdown-compiler')
            .options({
                raw: true
            })
            .end();
        if ( is_prod ) {
            config.optimization.splitChunks({
                chunks: 'all',
                minChunks: 1,
                cacheGroups: {
                    common: {
                        name: 'chunk-common',
                        chunks: 'initial',
                        minChunks: 2,
                        maxInitialRequests: 5,
                        minSize: 0,
                        priority: 1,
                        reuseExistingChunk: true,
                    },
                    vue: {
                        name: 'vue',
                        chunks: 'initial',
                        test: /[\\/]node_modules[\\/]vue[\\/]/,
                        priority: -10,
                        reuseExistingChunk: true,
                    },
                    'vue-router': {
                        name: 'vue-router',
                        chunks: 'initial',
                        test: /[\\/]node_modules[\\/]vue-router[\\/]/,
                        priority: -10,
                        reuseExistingChunk: true,
                    },
                    'element-ui': {
                        name: 'element-ui',
                        chunks: 'initial',
                        test: /[\\/]node_modules[\\/]element-ui[\\/]/,
                        priority: -10,
                        reuseExistingChunk: true,
                    },
                    vendors: {
                        name: 'chunk-vendors',
                        test: /[\\/]node_modules[\\/]/,
                        chunks: 'async',
                        priority: -20,
                        reuseExistingChunk: true,
                        enforce: true,
                    },
                }
            })
        }
    },
    assetsDir: 'static',
    parallel: false,
    publicPath: './',
    devServer: {
        port: 5000,
        open: true,
    },
}