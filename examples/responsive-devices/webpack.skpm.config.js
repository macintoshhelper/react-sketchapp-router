/* eslint-disable no-param-reassign */
/* eslint-disable func-names */

const path = require('path');

/**
 * Function that mutates original webpack config.
 * Supports asynchronous changes when promise is returned.
 *
 * @param {object} config - original webpack config.
 * @param {boolean} isPluginCommand - whether the config is for a plugin command or a resource
 */
module.exports = function (config) {
  /* you can change config here */

  config.resolve = {
    ...config.resolve,
    extensions: [...config.resolve.extensions, '.jsx'],
    alias: {
      ...config.resolve.alias,
      react: path.resolve(__dirname, './node_modules/react/'),
      'react-sketchapp-router': path.resolve(__dirname, '../../'),
      'react-sketchapp': path.resolve(__dirname, '../../../forks/me/react-sketchapp/'),
      'react-router': path.resolve(__dirname, './node_modules/react-router/'),
    },
  };
};
