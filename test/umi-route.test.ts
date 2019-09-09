import { presetFactory, UmiRoute } from '../src/presets'

const defaultRoutes: string[] = [
  'src/layouts',
  'src/home/_layout.tsx',
  'src/home/_layout.jsx',
  'src/index',
  'src/index/index',
  'src/pages/index.tsx',
  'xxx/NotFound.jsx',
  'src/pages/.umi/xx.js',
  'src/hooks/xx',
  'src/components/xx/index.jsx',
]

describe('start test umi-route preset', () => {
  test('default includes should work', () => {
    const ReactRoutePreset = presetFactory.create(UmiRoute)
    defaultRoutes.forEach((v: string) => {
      expect(
        ReactRoutePreset.onMatch(v, {
          presets: ['umi-route'],
          include: [],
        }),
      ).toBe(false)
    })
  })

  test('only process pages endwith .tsx|.jsx', () => {
    const ReactRoutePreset = presetFactory.create(UmiRoute)
    const pages = ['src/pages/page-three/pageThree.tsx']
    pages.forEach((v: string) => {
      expect(
        ReactRoutePreset.onMatch(v, {
          presets: ['umi-route'],
          include: ['src/pages/Test'],
        }),
      ).toBe(true)
    })
    const models = ['src/pages/page-three/models/pageThree.ts']
    models.forEach((v: string) => {
      expect(
        ReactRoutePreset.onMatch(v, {
          presets: ['umi-route'],
          include: ['src/pages/Test'],
        }),
      ).toBe(false)
    })
  })
})
