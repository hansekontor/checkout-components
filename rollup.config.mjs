import {config} from 'dotenv';
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import replace from '@rollup/plugin-replace';
import json from '@rollup/plugin-json';
import nodePolyfills from 'rollup-plugin-polyfill-node';

config();

const devMode = process.env.NODE_ENV !== 'production';

export default {
   input: 'lib/bcoin-browser.js',
   output: {
      file: "dist/es/index.js",
      format: 'es',
      sourcemap: true,
   },
   output: {
      file: "dist/cjs/index.js",
      format: 'cjs',
      sourcemap: true,
   },
   plugins: [
      nodeResolve({
         extensions: ['.js', '.jsx']
      }),
      babel({
         babelHelpers: 'bundled',
         presets: ['@babel/preset-react'],
         extensions: ['.js', '.jsx'],
         exclude: 'node_modules/**'
      }),
      commonjs(),
      replace({
         preventAssignment: false,
      //  'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      //  'process.env.HOSTNAME': JSON.stringify(process.env.HOSTNAME),
      //  'process.env.URL_SANDBOX': JSON.stringify(process.env.URL_SANDBOX),
      //  'process.env.URL_PRODUCTION': JSON.stringify(process.env.URL_PRODUCTION),
      }), 
      json(),
      nodePolyfills(),
   ],
}
