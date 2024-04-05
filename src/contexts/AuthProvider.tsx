import { Outlet } from 'react-router-dom'
import { ScrollToTop } from '~/components'
import { useAuth } from '~/hooks/useAuth'
import { useLocale } from '~/hooks/useLocale'

export const AuthProvider = () => {
  useAuth()
  useLocale()

  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  )
}
