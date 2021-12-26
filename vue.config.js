module.exports = {
  css: {
    sourceMap: false,
    loaderOptions: {
      scss: {
        prependData: `
          @import "@/scss/config/_variables.scss";
          @import "@/scss/config/_mixins.scss";
          @import "@/scss/config/_functions.scss";
          @import "@/scss/config/_media.scss";
        `
      }
    }
  },
  lintOnSave: false
}
