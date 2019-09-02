import minimatch from 'minimatch'
import { Options } from '@/typings'

const isMatched = (resourcePath?: string, pattern?: string) => {
  if (!resourcePath || !pattern) {
    return false
  }
  try {
    return minimatch(resourcePath, pattern, { dot: true }) || !!resourcePath.match(pattern)
  } catch {
    return false
  }
}

/**
 * match include will return source
 * @param resourcePath
 * @param include
 */
export const hasIncluded = (resourcePath?: string, include: Options['include'] = []) => {
  if (!resourcePath || !include) {
    return true
  }
  return include.some(v => {
    return isMatched(resourcePath, v)
  })
}

/**
 * match exclude will return tpl
 * @param resourcePath
 * @param exclude
 */
export const hasExcluded = (resourcePath?: string, exclude: Options['exclude'] = []) => {
  if (!resourcePath || !exclude) {
    return false
  }
  return exclude.some(v => {
    return isMatched(resourcePath, v)
  })
}

export const match = (resourcePath?: string, options?: Options) => {
  if (!options || !resourcePath) {
    return false
  }
  if (options.include) {
    return !hasIncluded(resourcePath, options.include)
  }
  if (options.exclude) {
    return hasExcluded(resourcePath, options.exclude)
  }
  return false
}
