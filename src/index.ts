import Webpack from 'webpack'

import { getOptions } from './utils/options'
import { presetFactory, ReactRoute, UmiRoute, UmiRematch } from './presets'

const presets = {
  'react-route': presetFactory.create(ReactRoute),
  'umi-route': presetFactory.create(UmiRoute),
  'umi-rematch': presetFactory.create(UmiRematch),
}

function loader(this: Webpack.loader.LoaderContext, source: string) {
  // only work in development mode
  if (process.env.NODE_ENV === 'production') {
    return source
  }
  const options = getOptions(this)
  if (!options.preset) {
    return source
  }
  const currentPreset = presets[options.preset]
  if (currentPreset) {
    currentPreset.onInit()
    if (currentPreset.onMatch(this.resourcePath, options)) {
      return currentPreset.onReturn(source)
    }
  }
  return source
}

export default loader
