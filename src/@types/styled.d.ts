import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    white: string

    'gray-100': string
    'gray-300': string
    'gray-400': string
    'gray-500': string
    'gray-600': string
    'gray-700': string
    subBackgroud: string
    background: string

    concluded: string
    icon: string
    disabled: string

    button: string
    interrupted: string

    progress: string
  }
}
