import { Preset, Options } from '@/typings'
import { validate } from '@/utils/validate'

export const presetFactory = {
  create(preset: Preset): Required<Preset> {
    return {
      onInit: () => {
        preset.onInit && preset.onInit()
      },
      onMatch: (resourcePath: string, options: Options) => {
        if (options.include) {
          return options.include.some(v => {
            return !resourcePath.match(v)
          })
        }
        if (options.exclude) {
          return options.exclude.some(v => {
            console.log('match', resourcePath, !!resourcePath.match(v))
            return !!resourcePath.match(v)
          })
        }
        return false
      },
      onReturn: source => {
        if (preset.onReturn) {
          validate([[typeof preset.onReturn !== 'function', 'preset.onMatch should be function']])
          return preset.onReturn(source)
        }
        return source
      },
    }
  },
}
