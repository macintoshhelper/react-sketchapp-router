/* eslint-disable quote-props, quotes, comma-dangle */

module.exports = {
  "extensions": ['.mjs', '.sketch.js', '.js', '.ts', '.jsx', '.tsx', '.json'],
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react",
    "@babel/preset-typescript"
  ],
  "plugins": [
    "@babel/plugin-proposal-class-properties"
  ]
};
