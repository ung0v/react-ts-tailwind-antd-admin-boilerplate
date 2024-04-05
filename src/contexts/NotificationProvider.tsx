import { useCallback, useMemo, createContext } from 'react'

import { notification } from 'antd'

import { ArgsProps } from 'antd/es/notification/interface'

import { ModalProps } from 'antd'

export type NotificationType =
  | 'confirm'
  | 'info'
  | 'success'
  | 'error'
  | 'warning'

export interface INotificationOptions {
  type?: NotificationType
  title?: React.ReactNode
  message: React.ReactNode
}

export type INotification = INotificationOptions & ModalProps

export interface INotificationContext {
  handleNotification: (options: INotificationOptions | string) => void
}

export interface INotificationProvider {
  children: React.ReactNode
}

export const NotificationContext = createContext<INotificationContext | null>(
  null
)

const TIME_CLOSE_NOTIFICATION_BY_SECOND = 5

export const NotificationProvider = ({ children }: INotificationProvider) => {
  const [api, contextHolder] = notification.useNotification()

  // handle message and type notification
  const handleNotification = useCallback(
    (props: INotificationOptions | string) => {
      const options: ArgsProps = {
        message: typeof props === 'object' ? props.title : undefined,
        description: typeof props === 'object' ? props.message : props,
        duration: TIME_CLOSE_NOTIFICATION_BY_SECOND,
        placement: 'top'
      }
      api.open({
        ...options
      })
    },
    [api]
  )

  const contextValue = useMemo(
    () => ({ handleNotification }),
    [handleNotification]
  )

  return (
    <>
      <NotificationContext.Provider value={contextValue}>
        {children}
        {contextHolder}
      </NotificationContext.Provider>
    </>
  )
}
