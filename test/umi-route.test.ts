import { presets } from '../lib/webpack-eliminate-loader.cjs.js'

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
    const ReactRoutePreset = presets['umi-route']
    defaultRoutes.forEach((v: string) => {
      expect(
        ReactRoutePreset.onMatch(v, {
          presets: ['umi-route'],
          include: [],
        }),
      ).toBe(false)
    })
  })
})
