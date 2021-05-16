const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = merge(common, {
  mode: 'production',
  plugins: [new CleanWebpackPlugin(),
    new BundleAnalyzerPlugin({
      analyzerMode: 'server',					// 开一个本地服务查看报告
      analyzerHost: '127.0.0.1',			// host 设置
      analyzerPort: 8888,							// 端口号设置
    }),],
})
