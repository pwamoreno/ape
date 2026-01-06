// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');

module.exports = defineConfig([
  expoConfig,
  {
    ignores: ['dist/*'],
  },
   {
    // 👇 Add this override
    files: ['*.cjs', '*.js'],
    env: {
      node: true,
    },
    // rules: {
    //   // Allow CommonJS in config files
    //   'no-undef': 'off', // optional if node env fixes it
    // },
  },
]);
