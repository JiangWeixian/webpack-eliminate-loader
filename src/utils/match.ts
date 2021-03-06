import minimatch from 'minimatch'
import isEmpty from 'lodash.isempty'

import { Options } from '../typings'

/**
 * check resourcepath is route page or not
 * @param resourcePath
 */
export const isPages = (resourcePath: string): boolean => {
  if (!resourcePath) {
    return false
  }
  if (minimatch(resourcePath, '**/pages/**')) {
    return resourcePath.endsWith('.tsx') || resourcePath.endsWith('.jsx')
  }
  return false
}

export const isUneedMatch = (options: Options): boolean => {
  if (
    (options.include && !isEmpty(options.include)) ||
    (options.exclude && !isEmpty(options.exclude))
  ) {
    return false
  }
  return true
}

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
  if (!resourcePath || !include || isEmpty(include)) {
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
  if (!resourcePath || !exclude || isEmpty(exclude)) {
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
