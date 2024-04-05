import { useCallback, useMemo, createContext } from 'react'

import { message } from 'antd'

import { ArgsProps } from 'antd/es/message/interface'

import { ModalProps } from 'antd'

export type ToastType = 'confirm' | 'info' | 'success' | 'error' | 'warning'

export interface IToastOptions {
  type?: ToastType
  title?: React.ReactNode
  message: React.ReactNode
}

export type IToast = IToastOptions & ModalProps

export interface IToastContext {
  handleToast: (options: IToastOptions | string) => void
}

export interface IToastProvider {
  children: React.ReactNode
}

export const ToastContext = createContext<IToastContext | null>(null)

const TIME_CLOSE_Toast_BY_SECOND = 3

export const ToastProvider = ({ children }: IToastProvider) => {
  const [api, contextHolder] = message.useMessage()

  // handle message and type Toast
  const handleToast = useCallback(
    (props: IToastOptions | string) => {
      const options: ArgsProps = {
        type: typeof props === 'object' ? 'success' || props.type : 'success',
        content: typeof props === 'object' ? props.message : props,
        duration: TIME_CLOSE_Toast_BY_SECOND
      }
      api.open({
        ...options
      })
    },
    [api]
  )

  const contextValue = useMemo(() => ({ handleToast }), [handleToast])

  return (
    <>
      <ToastContext.Provider value={contextValue}>
        {children}
        {contextHolder}
      </ToastContext.Provider>
    </>
  )
}
