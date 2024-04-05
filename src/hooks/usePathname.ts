/* eslint-disable @typescript-eslint/no-explicit-any */
import { matchRoutes, useLocation } from 'react-router-dom'
import { ALL_PAGE_ROUTES } from '~/constants'

const routes = Object.values(ALL_PAGE_ROUTES).map((path) => ({ path }))

export const usePathname = () => {
  const location = useLocation()
  const match = matchRoutes(routes as any, location)
  if (match) {
    return match[0].route.path
  }
  throw new Error('Path not found.')
}
