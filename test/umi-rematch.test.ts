import { presets } from '../lib'

const defaultRoutes: string[] = ['src/pages/User/models/user.ts']

describe('start test umi-rematch preset', () => {
  test('should work with umi-route', () => {
    const RematchPreset = presets['umi-rematch']
    defaultRoutes.forEach((v: string) => {
      expect(
        RematchPreset.onMatch(v, {
          presets: ['umi-rematch'],
          include: ['src/pages/Home'],
        }),
      ).toBe(true)
    })
  })
})
