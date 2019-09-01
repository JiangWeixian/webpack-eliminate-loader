import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import alias from 'rollup-plugin-alias'
import pkg from './package.json'

export default [
  // browser-friendly UMD build
  {
    input: 'src/index.ts',
    external: ['ms', 'fs', 'path'],
    output: {
      name: 'webpack-eliminate-loader',
      file: pkg.browser,
      format: 'umd',
      globals: {
        fs: 'fs',
        path: 'path',
      },
    },
    plugins: [
      resolve(), // so Rollup can find `ms`
      commonjs(), // so Rollup can convert `ms` to an ES module
      typescript({
        typescript: require('typescript'),
      }), // so Rollup can convert TypeScript to JavaScript
      alias({
        resolve: ['.ts', '.js', '.tsx', '.jsx'],
        entries: [{ find: '@/', replacement: './src/' }],
      }),
    ],
  },

  // CommonJS (for Node) and ES module (for bundlers) build.
  // (We could have three entries in the configuration array
  // instead of two, but it's quicker to generate multiple
  // builds from a single configuration where possible, using
  // an array for the `output` option, where we can specify
  // `file` and `format` for each target)
  {
    input: 'src/index.ts',
    external: ['ms', 'fs', 'path'],
    plugins: [
      commonjs(), // so Rollup can convert `ms` to an ES module
      typescript(), // so Rollup can convert TypeScript to JavaScript
    ],
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        globals: {
          fs: 'fs',
          path: 'path',
        },
      },
      {
        file: pkg.module,
        format: 'es',
        globals: {
          fs: 'fs',
          path: 'path',
        },
      },
    ],
  },
]
