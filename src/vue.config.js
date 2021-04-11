//cl3将配置文件隐藏了再node_module里面了，如果需要修改，可以新建一个js文件，2者会自动合并
module.exports = {
//配置别名
  configureWebpack: {
    resolve: {
      alias: {
        //@代表src
        'assets': '@/assets',
        'components': '@/components',
        'views': '@/views',
        'common': '@/common',
        'network': '@/network'
      }
    }
  }
}