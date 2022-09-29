Minimum Reproducible Example for https://github.com/expo/expo/issues/19290:

  https://github.com/mrflip/bugreport-expo-babel-class-properties

Including "@babel/plugin-proposal-class-properties" makes it no longer
accept console logs or do live refresh. Comment that plugin out and
re-run with `npm install ; npx expo start --ios --clear` and it goes
away, reversibly.

```
function ExpoBabelConfig(api) {
  api.cache(true)
  return {
    presets: [
      ['babel-preset-expo', { lazyImports: true }],
    ],
    plugins: [
      ["@babel/plugin-proposal-class-properties"],
      // 'react-native-reanimated/plugin',                 // MUST BE LAST!!!
    ],
  }
}

module.exports = ExpoBabelConfig
```

To reproduce:

1.  `git clone
https://github.com/mrflip/bugreport-expo-babel-class-properties.git`
2. Run `npm install ; npx expo start --ios --clear`
3. Change the favoriteLetter
4. You should not see it refresh or see the console log in the terminal; you might see the console in the debugger.
5. ` git checkout WorksJustFine`
6. `npm install ; npx expo start --ios --clear`
7. Changing favoriteLetter should now cause a new line in the server console, and an auto-refresh of the app.

This was one of the worst gaslighting debug experiences I've encountered, as it would kinda creep in in a weird way and then no amount of shamanic cleansing would make it work again. A couple times
I caught it where if I changed favoriteLetter from A to B it would go through the motions of refreshing but stay at A; changing it to "C" would then show B, and so on (being one save behind). Then it would stop working altogether. This meant that apparently the changes would never obviously be associated with the babel config update; no idea how this could be.

The logs will show up for a while in the debugger and then also give
up.

I don't know why the package.json stuff above was able to cure this,
because sometime later yesterday evening it stopped working again. I
had to bisection search every aspect of complexity in our entire
project to find that it was a line in our babel.config.js that we
added in February 2021.

I made a codesandbox.io container:

https://codesandbox.io/s/react-native-expo-example-9m93t?file=/package.json

It does NOT reproduce the bug; however, a colleague of mine did a
fresh clone of the repo on a Macbook and reports the same issue..

Let me know if I should be filing a bug against some other repo -- besides the delayed breakdown I can't tell if this is a problem with Apple, watchman, metro, babel, expo, the Bretton-Woods system, the Church-Turing hypothesis, expo-server, expo-cli, or what.
