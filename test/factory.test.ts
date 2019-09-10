import { presetFactory } from '../src/presets/factory'
import { UmiRematch, ReactRoute } from '../src/presets'

describe('start test presets.factory', () => {
  test('the result of factory.create should have all preset method', () => {
    const preset = presetFactory.create({ name: 'preset' } as any)
    expect(!!preset.name).toBe(true)
    expect(!!preset.onInit).toBe(true)
    expect(!!preset.onMatch).toBe(true)
    expect(!!preset.onReturn).toBe(true)
  })

  test('the method of preset should overwrite origin method', () => {
    const ReactRoutePreset = presetFactory.create(ReactRoute)
    expect(
      ReactRoutePreset.onMatch('src/pages/home.jsx', {
        presets: ['react-route'],
        exclude: ['src/pages/home.jsx'],
      }),
    ).toBe(true)
    const UmiRematchPreset = presetFactory.create(UmiRematch)
    expect(UmiRematchPreset.name).toBe('umi-rematch')
    expect(
      UmiRematchPreset.onMatch('src/pages/home.jsx', {
        presets: ['umi-rematch'],
        exclude: ['src/pages/home.jsx'],
      }),
    ).toBe(false)
  })

  test('always return false when options.exclude or options.include is empty or empty-array', () => {
    const ReactRoutePreset = presetFactory.create(ReactRoute)
    expect(
      ReactRoutePreset.onMatch('src/pages/home.jsx', {
        presets: ['react-route'],
        exclude: [],
      }),
    ).toBe(false)
    expect(
      ReactRoutePreset.onMatch('src/pages/home.jsx', {
        presets: ['react-route'],
        include: [],
      }),
    ).toBe(false)
    expect(
      ReactRoutePreset.onMatch('src/pages/home.jsx', {
        presets: ['react-route'],
        include: [],
        exclude: [],
      }),
    ).toBe(false)
    expect(
      ReactRoutePreset.onMatch('src/pages/home.jsx', {
        presets: ['react-route'],
      }),
    ).toBe(false)
  })
})
