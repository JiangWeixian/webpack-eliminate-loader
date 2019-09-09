import { presets } from '../lib'

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

describe('start test umi-rematch preset', () => {
  test('should work with umi-route', () => {
    const ReactRoutePreset = presets['umi-route']
    defaultRoutes.forEach((v: string) => {
      expect(
        ReactRoutePreset.onMatch(v, {
          presets: ['umi-route', 'umi-rematch'],
          include: [],
        }),
      ).toBe(false)
    })
  })
})
