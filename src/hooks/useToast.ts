import { useContext } from 'react'
import { ToastContext } from '~/contexts'

export const useToast = () => {
  const ctx = useContext(ToastContext)
  if (!ctx) {
    throw new Error('`useToast` should be used within a `ToastProvider`')
  }
  return ctx.handleToast
}
