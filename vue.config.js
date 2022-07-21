const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  // disable source map in production
  productionSourceMap: false,
  lintOnSave: false
})
