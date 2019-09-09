import { loadTpl } from '../utils/loadTpl'
import { Preset } from '../typings'

let tpl = ''

export const ReactRoute: Preset = {
  name: 'react-route',
  onInit() {
    if (tpl) {
      return
    }
    tpl = loadTpl('react-route')
  },
  onReturn(source) {
    return tpl || source
  },
}
