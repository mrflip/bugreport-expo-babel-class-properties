// function getFramework() {
//   if (process.env.APP_FW) { return process.env.APP_FW }
//   return (/next$/.test(process.argv[1])) ? 'next' : 'expo'
// }

// console.warn('is expo?', process.env.EXPO_ENV, Object.keys(process.env).sort(), process.argv)

function ExpoBabelConfig(api) {
  api.cache(true)
  return {
    presets: [
      ['babel-preset-expo', { lazyImports: true }],
    ],
    plugins: [
      // ["@babel/plugin-proposal-class-properties"],
      // 'react-native-reanimated/plugin',                 // MUST BE LAST!!!
    ],
  }
}

module.exports = ExpoBabelConfig
