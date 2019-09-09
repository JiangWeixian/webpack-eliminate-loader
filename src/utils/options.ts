import Webpack from 'webpack'
import loadUtils from 'loader-utils'
// import validate from 'schema-utils'
import { Options } from '../typings'

// const schema = {
//   type: 'object',
//   properties: {
//     exclude: {
//       type: 'array',
//       description: 'exclude these files in webpack build',
//     },
//     include: {
//       type: 'array',
//       description: 'include these files in webpack build',
//     },
//     presets: {
//       type: 'string',
//       description: 'the way of how this webpack work',
//     },
//   },
// }

export const validateOptions = () => {}

export const getOptions = (context: Webpack.loader.LoaderContext): Options => {
  return loadUtils.getOptions(context)
}
