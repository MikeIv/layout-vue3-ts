const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "./",
  outputDir: "dist",
  assetsDir: undefined,
  productionSourceMap: undefined,
  parallel: undefined,
  runtimeCompiler: true,
  devServer: {
    port: 8080,
    hot: true
  },
})
