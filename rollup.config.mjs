import {config} from 'dotenv';
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import replace from '@rollup/plugin-replace';
import json from '@rollup/plugin-json';
import nodePolyfills from 'rollup-plugin-polyfill-node';
import nodeExternals from 'rollup-plugin-node-externals'


config();

const devMode = process.env.NODE_ENV !== 'production';

export default {
   input: 'lib/bcoin-browser.js',
   output: [
      {
         file: "dist/es/index.js",
         format: 'esm',
         sourcemap: true,
      },
      {
         file: "dist/cjs/index.js",
         format: 'cjs',
         sourcemap: true
      },
   ],   
   plugins: [
      nodeResolve(),      
      commonjs(),
      json(),
      nodePolyfills(),
      nodeExternals(),
   ],
}
