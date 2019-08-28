import json from 'rollup-plugin-json';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';

import pkg from './package.json';

export default [{
  input: './src/index.js',
  external: ['react', 'react-sketchapp', 'react-router'],
  plugins: [
    json(),
    babel({
      exclude: 'node_modules/**',
    }),
    resolve({
      extensions: ['.mjs', '.sketch.js', '.js', '.jsx', '.json'],
    }),
    commonjs(),
  ],
  output: [
    { file: pkg.module, format: 'es' },
  ],
}];
