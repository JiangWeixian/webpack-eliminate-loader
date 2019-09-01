import Webpack from 'webpack'
import fs from 'fs'
import path from 'path'

import { validate } from './utils/validate'

const template = fs.readFileSync(path.resolve(__dirname, '../templates/react-route.tpl')).toString()

// only process routes files
function loader(this: Webpack.loader.LoaderContext, source: string) {
  if (this.resourcePath.includes('Home/index.tsx')) {
    console.log('webpack-eliminate-loader', this.resourcePath)
    return template
  }
  validate([[true, 'test']])
  return source
}

export default loader
