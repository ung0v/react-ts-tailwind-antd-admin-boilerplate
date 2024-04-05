import { NotificationContext } from '~/contexts'
import { useContext } from 'react'

export const useNotify = () => {
  const ctx = useContext(NotificationContext)
  if (!ctx) {
    throw new Error(
      '`useNotification` should be used within a `NotificationProvider`'
    )
  }
  return ctx.handleNotification
}
