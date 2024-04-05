import { Outlet } from 'react-router-dom'
import { ScrollToTop } from '~/components'
import { useAuth } from '~/hooks/useAuth'

export const AuthProvider = () => {
  useAuth()

  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  )
}
