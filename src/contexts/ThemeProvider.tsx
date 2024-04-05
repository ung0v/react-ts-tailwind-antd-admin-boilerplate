import { ConfigProvider, ThemeConfig } from 'antd'
import { PropsWithChildren } from 'react'

const theme: ThemeConfig = {
  components: {
    Typography: {
      titleMarginTop: 0,
      titleMarginBottom: 0
    }
  }
}

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  return <ConfigProvider theme={theme}>{children}</ConfigProvider>
}
