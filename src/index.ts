import Webpack from 'webpack'

import { getOptions } from './utils/options'
import { presetFactory, ReactRoute } from './presets'

const presets = {
  'react-route': presetFactory.create(ReactRoute),
}

// only process routes files
function loader(this: Webpack.loader.LoaderContext, source: string) {
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
