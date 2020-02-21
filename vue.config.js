module.exports = {
  // options...
  devServer: {
    disableHostCheck: true
  },
  productionSourceMap: process.env.NODE_ENV === 'production' ? false : true,
}
