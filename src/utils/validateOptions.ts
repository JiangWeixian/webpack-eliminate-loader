import validate from 'schema-utils'

const schema = {
  type: 'object',
  properties: {
    exclude: {
      type: 'array',
      description: 'exclude these files in webpack build',
    },
    include: {
      type: 'array',
      description: 'include these files in webpack build',
    },
    presets: {
      type: 'array',
      description: 'the way of how this webpack work',
    },
  },
}

export const validateOptions = () => {}
