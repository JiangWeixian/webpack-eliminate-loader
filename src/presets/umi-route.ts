import { loadTpl } from '../utils/loadTpl'
import { Preset } from '../typings'
import { match, isPages } from '../utils/match'

let tpl = ''
const defaultIncludes = [
  '**/layouts/**',
  '**/*/_layout?(.tsx|.jsx)',
  '**/index/**',
  '**/src/pages/*?(.tsx|.jsx|.ts|.js)',
  '**/src/*?(.tsx|.jsx|.ts|.js)',
  '**/NotFound?(.jsx|.tsx)',
  '**/src/pages/.umi/**',
  '**/src/!(pages)/**', // include file like `src/hooks/** | src/components/**`
  '**/components/**',
]

export const UmiRoute: Preset = {
  name: 'umi-route',
  onInit() {
    if (tpl) {
      return
    }
    tpl = loadTpl('react-route')
  },
  onMatch: (resourcePath, options) => {
    if (!isPages(resourcePath)) {
      return false
    }
    return match(resourcePath, {
      ...options,
      include: (options.include || []).concat(defaultIncludes),
    })
  },
  onReturn(source) {
    return tpl || source
  },
}
