import fs from 'fs'
import path from 'path'
import { utils } from '../lib/webpack-eliminate-loader.cjs.js'

describe('start load template', () => {
  test('load react-route tpl currently', () => {
    const reactRouteTpl = fs
      .readFileSync(path.resolve(__dirname, '../templates/react-route.tpl'))
      .toString()
    expect(utils.loadTpl('react-route')).toBe(reactRouteTpl)
  })

  test('load unsupport template will throw err', () => {
    expect(() => {
      utils.loadTpl('xx' as any)
    }).toThrow()
  })
})
