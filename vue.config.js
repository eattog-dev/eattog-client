module.exports = {
    publicPath: "./",
  
    pwa: {
      name: 'Eattog',

      themeColor: "#ffe500",
      msTileColor: "#ffe500",
      appleMobileWebAppCache: "yes",
      appleMobileWebAppStatusBarStyle: 'black',
      manifestOptions: {
        background_color: "#ffe500"
      },
      workboxPluginMode: 'InjectManifest',
      workboxOptions: {
        swSrc: 'dev/sw.js',
      }
    }
};