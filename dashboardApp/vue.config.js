module.exports = {
  "filenameHashing": false,
  "transpileDependencies": [
  ],
  chainWebpack: config => {
    config.devServer.set('inline', false)
    config.devServer.set('hot', true)
    config.externals(['vue', 'vue-router'])
  },
}