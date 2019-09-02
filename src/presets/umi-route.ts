import { loadTpl } from '@/utils/loadTpl'
import { Preset } from '@/typings'

let tpl = ''
const defaultIncludes = ['layouts', 'layout', '_layout', 'index']

export const ReactRoute: Preset = {
  onInit() {
    if (tpl) {
      return
    }
    tpl = loadTpl('react-route')
  },
  onMatch: (resourcePath, options) => {
    if (options.include) {
      return options.include.concat(defaultIncludes).some(v => {
        return !resourcePath.match(v)
      })
    }
    if (options.exclude) {
      return options.exclude.some(v => {
        return !!resourcePath.match(v)
      })
    }
    return false
  },
  onReturn(source) {
    return tpl || source
  },
}
