// common

export type Validation = [boolean | undefined, string]

export type SupportPresets = 'react-route' | 'umi-route' | 'umi-rematch'

export type SupportTemplates = 'react-route' | 'rematch'

export type Presets = {
  [key in SupportPresets]: Preset
}

export type Options = {
  include?: string[]
  exclude?: string[]
  preset?: SupportPresets
}

export type Preset = {
  onInit?: (...args: any) => void
  onMatch?: (resourcePath: string, options: Options) => boolean
  onReturn?: (source: string) => string
}
