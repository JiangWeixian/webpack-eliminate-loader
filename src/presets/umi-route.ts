import { loadTpl } from '@/utils/loadTpl'
import { Preset } from '@/typings'
import { match } from '@/utils/match'

let tpl = ''
const defaultIncludes = [
  '**/layouts/**',
  '**/*/_layout?(.tsx|.jsx)',
  '**/index/**',
  '**/src/index?(.tsx|jsx)',
  '**/NotFound?(.jsx|.tsx)',
]

export const UmiRoute: Preset = {
  onInit() {
    if (tpl) {
      return
    }
    tpl = loadTpl('react-route')
  },
  onMatch: (resourcePath, options) => {
    return match(resourcePath, {
      ...options,
      include: (options.include || []).concat(defaultIncludes),
    })
  },
  onReturn(source) {
    return tpl || source
  },
}