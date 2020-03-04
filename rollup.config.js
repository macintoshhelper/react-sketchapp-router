import json from 'rollup-plugin-json';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
// import typescript from '@rollup/plugin-typescript';

import pkg from './package.json';

const extensions = ['.mjs', '.sketch.js', '.js', '.ts', '.jsx', '.tsx', '.json'];

export default [{
  input: './src/index.ts',
  external: ['react', 'react-sketchapp', 'react-router'],
  plugins: [
    json(),
    babel({
      babelrc: true,
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.es6', '.es', '.mjs'],
      exclude: 'node_modules/**',
    }),
    resolve({
      extensions,
    }),
    commonjs(),
  ],
  output: [
    { file: pkg.module, format: 'es' },
  ],
}];
