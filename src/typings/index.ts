// common

export type Validation = [boolean | undefined, string]

export type SupportPresets = 'react-route' | 'umi-route' | 'umi-rematch'

export type SupportTemplates = 'react-route' | 'rematch'

export type Presets = {
  [key: string]: Required<Preset>
}

export type Options = {
  include?: string[]
  exclude?: string[]
  presets?: (SupportPresets | Preset)[]
}

export type Preset = {
  name: string
  onInit?: (...args: any) => void
  onMatch?: (resourcePath: string, options: Options) => boolean
  onReturn?: (source: string) => string
}
