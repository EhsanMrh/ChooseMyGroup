module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "~@/stylesheets/abstract/index.scss";`
      }
    }
  }
};
