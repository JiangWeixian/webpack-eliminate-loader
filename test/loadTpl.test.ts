import fs from 'fs'
import path from 'path'
import { loadTpl } from '../src/utils/loadTpl'

describe('start load template', () => {
  test('load react-route tpl currently', () => {
    const reactRouteTpl = fs
      .readFileSync(path.resolve(__dirname, '../templates/react-route.tpl'))
      .toString()
    expect(loadTpl('react-route')).toBe(reactRouteTpl)
  })

  test('load unsupport template will throw err', () => {
    expect(() => {
      loadTpl('xx' as any)
    }).toThrow()
  })
})
