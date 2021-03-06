import Webpack from 'webpack'

import { getOptions } from './utils/options'
import { presetFactory, ReactRoute, UmiRoute, UmiRematch } from './presets'
import { Preset, Options, Presets } from './typings'

const presets: Presets = {
  'react-route': presetFactory.create(ReactRoute),
  'umi-rematch': presetFactory.create(UmiRematch),
  'umi-route': presetFactory.create(UmiRoute),
}

const getPresets = (options: Options): Required<Preset>[] => {
  return options.presets
    ? options.presets.map(p => {
        const isStrPreset = typeof p === 'string'
        if (isStrPreset) {
          return presets[p as string]
        }
        // cached presets
        if (!presets[(p as Preset).name]) {
          presets[(p as Preset).name] = presetFactory.create(p as Preset)
        }
        return presets[(p as Preset).name]
      })
    : []
}

function loader(this: Webpack.loader.LoaderContext, source: string) {
  const options = getOptions(this)
  if (!options.presets) {
    return source
  }
  const allPresets = getPresets(options)
  let result = source
  for (let i = 0; i < allPresets.length; i++) {
    const currentPreset = allPresets[i]
    if (currentPreset) {
      currentPreset.onInit()
      // get first match result
      if (currentPreset.onMatch(this.resourcePath, options)) {
        result = currentPreset.onReturn(source)
        break
      }
    }
  }
  return result
}

export default loader
