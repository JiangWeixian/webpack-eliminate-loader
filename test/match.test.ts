import { match, hasIncluded, hasExcluded } from '../src/utils/match'

describe('start test utils.match', () => {
  test('hasInclude should return true when first arg is undefined', () => {
    expect(hasIncluded(undefined, [])).toBe(true)
  })

  test('hasInclude should return true when match', () => {
    expect(hasIncluded('src/pages', ['src/pages'])).toBe(true)
  })

  test('hasExclude should return false when first arg is undefined', () => {
    expect(hasExcluded(undefined, [])).toBe(false)
  })

  test('hasInclude should return true when match', () => {
    expect(hasExcluded('src/pages', ['src/pages'])).toBe(true)
  })

  test('hasInclude and hasExclude should support glob regex', () => {
    expect(hasIncluded('src/pages/home.jsx', ['**/pages/**'])).toBe(true)
    expect(hasExcluded('src/pages/home.jsx', ['**/pages/**'])).toBe(true)
  })

  test('match should return false when options.include and options.exclude is empty or empty array', () => {
    expect(match('src/pages/home.jsx', { presets: ['react-route'] })).toBe(false)
    expect(match('src/pages/home.jsx', { presets: ['react-route'], include: [] })).toBe(false)
    expect(match('src/pages/home.jsx', { presets: ['react-route'], exclude: [] })).toBe(false)
    expect(
      match('src/pages/home.jsx', { presets: ['react-route'], exclude: [], include: [] }),
    ).toBe(false)
  })

  test('match should return false when options is undefined', () => {
    expect(match('src/pages/home.jsx')).toBe(false)
  })

  test('match should return false when include matched', () => {
    match('src/pages/home.jsx', {
      presets: ['react-route'],
      include: ['**/pages/**'],
    })
  })

  test('match should return true when exclude matched', () => {
    match('src/pages/home.jsx', {
      presets: ['react-route'],
      exclude: ['**/pages/**'],
    })
  })
})
