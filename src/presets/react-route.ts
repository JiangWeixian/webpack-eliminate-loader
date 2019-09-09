import { loadTpl } from '../utils/loadTpl'
import { Preset } from '../typings'
import { match, isPages } from '../utils/match'

let tpl = ''

const defaultIncludes = [
  '**/src/*?(.tsx|.ts|.js|.jsx)',
  '**/src/!(pages)/**', // include file like `src/hooks/** | src/components/**`
]

export const ReactRoute: Preset = {
  name: 'react-route',
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
