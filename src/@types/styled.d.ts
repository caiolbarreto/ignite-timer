import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string

    buttonFontColor: string

    fontColor: string
    baseFontColor: string
    input: string
    tableHeader: string
    itemsBackground: string
    subBackgroud: string
    switch: string
    background: string

    concluded: string
    icon: string
    disabled: string

    button: string
    interrupted: string

    progress: string
  }
}
