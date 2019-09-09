import { loadTpl } from '../utils/loadTpl'
import { Preset } from '../typings'
import { match } from '../utils/match'

let tpl = ''

export const ReactRoute: Preset = {
  name: 'react-route',
  onInit() {
    if (tpl) {
      return
    }
    tpl = loadTpl('react-route')
  },
  onMatch: (resourcePath, options) => {
    if (!resourcePath.endsWith('.tsx') && !resourcePath.endsWith('.jsx')) {
      return false
    }
    return match(resourcePath, options)
  },
  onReturn(source) {
    return tpl || source
  },
}
