import Webpack from 'webpack'
import loadUtils from 'loader-utils'

export const getOptions = (context: Webpack.loader.LoaderContext) => {
  return loadUtils.getOptions(context)
}
