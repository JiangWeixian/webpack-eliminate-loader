import path from 'path'
import fs from 'fs'

import { SupportPresets } from '@/typings'

const TEPLATES_PATH = path.resolve(__dirname, '../templates/')
const cached: {
  [key in SupportPresets]?: string
} = {}

export const loadTpl = (preset: SupportPresets): string => {
  if (cached[preset]) {
    return cached[preset] || ''
  }
  const presetTpl = fs.readFileSync(path.resolve(TEPLATES_PATH, `${preset}.tpl`)).toString()
  cached[preset] = presetTpl
  return presetTpl
}
