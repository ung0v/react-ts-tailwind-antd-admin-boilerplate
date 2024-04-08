import { ConfigProvider, ThemeConfig } from 'antd'
import { PropsWithChildren } from 'react'

const theme: ThemeConfig = {
  components: {
    Typography: {
      titleMarginTop: 0,
      titleMarginBottom: 0
    },
    Input: {
      // controlHeight: 56,
      // paddingInline: 20
    },
    Form: {
      itemMarginBottom: 24,
      verticalLabelPadding: '0 0 24px 0',
      labelFontSize: 16,
      labelHeight: 22
    },
    Button: {
      // controlHeight: 56,
      // fontSize: 16
    }
  }
}

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  return <ConfigProvider theme={theme}>{children}</ConfigProvider>
}
