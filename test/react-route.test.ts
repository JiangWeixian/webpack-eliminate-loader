import { presets } from '../lib'
import fs from 'fs'
import path from 'path'

describe('start test react-route preset', () => {
  test('should return react-reoute.tpl when exclude match', () => {
    const ReactRoutePreset = presets['react-route']
    const reactRouteTpl = fs
      .readFileSync(path.resolve(__dirname, '../templates/react-route.tpl'))
      .toString()
    ReactRoutePreset.onInit()
    let res = ''
    if (
      ReactRoutePreset.onMatch('src/pages/home.jsx', {
        presets: ['react-route'],
        exclude: ['src/pages/home.jsx'],
      })
    ) {
      res = ReactRoutePreset.onReturn('')
    }
    expect(res).toBe(reactRouteTpl)
  })

  test('should return react-reoute.tpl when include match', () => {
    const ReactRoutePreset = presets['react-route']
    ReactRoutePreset.onInit()
    let res = ''
    if (
      ReactRoutePreset.onMatch('src/pages/home.jsx', {
        presets: ['react-route'],
        include: ['src/pages/home.jsx'],
      })
    ) {
      res = ReactRoutePreset.onReturn('')
    }
    expect(res).toBe('')
  })
})
