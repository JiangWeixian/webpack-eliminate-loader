import { Preset, Options } from '@/typings'
import { validate } from '@/utils/validate'
import { match } from '@/utils/match'

export const presetFactory = {
  create(preset: Preset): Required<Preset> {
    return {
      name: preset.name,
      onInit: () => {
        preset.onInit && preset.onInit()
      },
      onMatch: (resourcePath: string, options: Options) => {
        if (preset.onMatch) {
          validate([[typeof preset.onMatch !== 'function', 'preset.onMatch should be function']])
          return preset.onMatch(resourcePath, options)
        }
        return match(resourcePath, options)
      },
      onReturn: source => {
        if (preset.onReturn) {
          validate([[typeof preset.onReturn !== 'function', 'preset.onReturn should be function']])
          return preset.onReturn(source)
        }
        return source
      },
    }
  },
}
