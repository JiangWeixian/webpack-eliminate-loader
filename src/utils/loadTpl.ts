import path from 'path'
import fs from 'fs'

import { SupportTemplates } from '@/typings'

const TEPLATES_PATH = path.resolve(__dirname, '../../templates')
export const cached: {
  [key in SupportTemplates]?: string
} = {}

export const loadTpl = (tplName: SupportTemplates): string => {
  if (cached[tplName]) {
    return cached[tplName] || ''
  }
  try {
    const presetTpl = fs.readFileSync(path.resolve(TEPLATES_PATH, `${tplName}.tpl`)).toString()
    cached[tplName] = presetTpl
    return presetTpl
  } catch {
    throw new Error("file dont's exited")
  }
}
