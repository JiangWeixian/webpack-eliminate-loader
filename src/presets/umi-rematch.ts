import minimatch from 'minimatch'

import { loadTpl } from '@/utils/loadTpl'
import { Preset } from '@/typings'
import { match } from '@/utils/match'

let tpl = ''
const defaultIncludes = ['**/src/*?(.tsx|.jsx|.ts|.js)']

const isRematchModel = (resourcePath: string) => {
  return minimatch(resourcePath, '**/models/**') || minimatch(resourcePath, '**/model/**')
}

export const UmiRematch: Preset = {
  name: 'umi-rematch',
  onInit() {
    if (tpl) {
      return
    }
    tpl = loadTpl('rematch')
  },
  onMatch: (resourcePath, options) => {
    if (!isRematchModel(resourcePath)) {
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
