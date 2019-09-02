import Webpack from 'webpack'

import { getOptions } from './utils/options'
import { presetFactory, ReactRoute, UmiRoute, UmiRematch } from './presets'
import { Preset } from '@/typings'

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
  if (!options.presets) {
    return source
  }
  let result = source
  for (let i = 0; i < options.presets.length; i++) {
    const currentPreset = presets[options.presets[i]] as Required<Preset>
    if (currentPreset) {
      currentPreset.onInit()
      if (currentPreset.onMatch(this.resourcePath, options)) {
        result = currentPreset.onReturn(source)
        console.log(result, this.resourcePath)
        break
      }
    }
  }
  return result
}

export default loader
