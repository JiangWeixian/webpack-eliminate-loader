import { presetFactory, ReactRoute } from '../src/presets'
import fs from 'fs'
import path from 'path'

const defaultRoutes: string[] = [
  'src/App.tsx',
  'src/index.tsx',
  'src/hooks/xx.jsx',
  'src/components/xx/index.jsx',
]

describe('start test react-route preset', () => {
  test('default includes should work', () => {
    const ReactRoutePreset = presetFactory.create(ReactRoute)
    defaultRoutes.forEach((v: string) => {
      expect(
        ReactRoutePreset.onMatch(v, {
          presets: ['react-route'],
          include: [],
        }),
      ).toBe(false)
    })
  })

  test('only process pages endwith .tsx | .jsx', () => {
    const pages = ['src/pages/page-three/pageThree.tsx']
    const ReactRoutePreset = presetFactory.create(ReactRoute)
    pages.forEach((v: string) => {
      expect(
        ReactRoutePreset.onMatch(v, {
          presets: ['react-route'],
          include: ['src/pages/Test'],
        }),
      ).toBe(true)
    })
    const models = ['src/pages/page-three/models/pageThree.ts']
    models.forEach((v: string) => {
      expect(
        ReactRoutePreset.onMatch(v, {
          presets: ['react-route'],
          include: ['src/pages/Test'],
        }),
      ).toBe(false)
    })
  })

  test('should return react-reoute.tpl when exclude match', () => {
    const ReactRoutePreset = presetFactory.create(ReactRoute)
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
    const ReactRoutePreset = presetFactory.create(ReactRoute)
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
