import minimatch from 'minimatch'
import { Options } from '@/typings'

const isMatched = (resourcePath?: string, pattern?: string) => {
  if (!resourcePath || !pattern) {
    return false
  }
  try {
    console.log(
      resourcePath,
      pattern,
      minimatch(resourcePath, pattern) || resourcePath.match(pattern),
    )
    return minimatch(resourcePath, pattern) || resourcePath.match(pattern)
  } catch {
    return false
  }
}

export const hasIncluded = (resourcePath?: string, include: Options['include'] = []) => {
  if (!resourcePath || !include) {
    return false
  }
  return include.some(v => {
    return isMatched(resourcePath, v)
  })
}

export const hasExcluded = (resourcePath?: string, exclude: Options['exclude'] = []) => {
  if (!resourcePath || !exclude) {
    return true
  }
  return exclude.some(v => {
    return isMatched(resourcePath, v)
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
