import minimatch from 'minimatch'
import { Options } from '@/typings'

export const hasIncluded = (resourcePath?: string, include: Options['include'] = []) => {
  if (!resourcePath || !include) {
    return false
  }
  return include.some(v => {
    console.log(resourcePath, v, minimatch(resourcePath, v))
    return minimatch(resourcePath, v)
  })
}

export const hasExcluded = (resourcePath?: string, exclude: Options['exclude'] = []) => {
  if (!resourcePath || !exclude) {
    return true
  }
  return exclude.some(v => {
    return minimatch(resourcePath, v)
  })
}

export const match = (resourcePath?: string, options?: Options) => {
  if (!options) {
    return false
  }
  if (options.include) {
    return hasIncluded(resourcePath, options.include)
  }
  if (options.exclude) {
    return !!hasExcluded(resourcePath, options.exclude)
  }
  return false
}
