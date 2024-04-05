import { useEffect } from 'react'
import { ALL_PAGE_ROUTES, PAGE_ROUTES, ROLE } from '~/constants'
import { useUserStore } from '~/stores'
import { usePathname } from './usePathname'
import { useNavigate } from 'react-router-dom'

export const useAuth = () => {
  const { isLogin, role } = useUserStore()
  const navigate = useNavigate()
  const pathname = usePathname()

  useEffect(() => {
    if (isLogin) {
      if (pathname === ALL_PAGE_ROUTES.SIGN_IN) {
        if (role === ROLE.ADMIN) {
          navigate(ALL_PAGE_ROUTES.ADMIN_BRAND)
        }
      }
    } else {
      if (Object.values(PAGE_ROUTES.PRIVATE).includes(pathname as string)) {
        navigate(ALL_PAGE_ROUTES.SIGN_IN)
      }
    }
  }, [isLogin, pathname, role])
}
