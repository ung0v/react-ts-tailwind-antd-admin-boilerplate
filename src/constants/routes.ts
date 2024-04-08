// All API routes of applications
export const API_ROUTES = {
  SIGN_IN: '/login',
  REFRESH_TOKEN: '/refresh_token',
  SIGN_UP: '/sign_up',
  UPLOAD: '/upload',
  BRAND: '/brand',
  BRAND_ID: '/brand/:id',
  ADMIN_SIGN_IN: '/admins/auths/sign-in',
  ADMIN_USERS: '/admins/users',
  ADMIN_USERS_ID: '/admins/users/:userId'
} as const

// All Page routes of applications
export const PAGE_ROUTES = {
  PUBLIC: {
    HOME: '/',
    CHECKOUT: '/checkout',
    BUY_NOW: '/buy-now',
    SIGN_IN: '/sign-in',
    SIGN_UP: '/sign-up',
    FORGOT_PASSWORD: '/forgot-password'
  },
  PRIVATE: {
    ADMIN_HOME: '/admin/',
    ADMIN_USER_MANAGEMENT: '/admin/user',
    ADMIN_CREW_MANAGEMENT: '/admin/crew'
  }
}

// Get the types of values for the PUBLIC and PRIVATE properties
type PublicRoutes = typeof PAGE_ROUTES.PUBLIC
type PrivateRoutes = typeof PAGE_ROUTES.PRIVATE
// Combine PublicRoutes and PrivateRoutes into one type
type AllRoutes = PublicRoutes & PrivateRoutes
//
export type API_ROUTE_TYPE = (typeof API_ROUTES)[keyof typeof API_ROUTES]

export type PAGE_ROUTER_TYPE =
  (typeof PAGE_ROUTES)['PRIVATE'][keyof (typeof PAGE_ROUTES)['PRIVATE']]

export const ALL_PAGE_ROUTES: AllRoutes = (() => {
  return Object.values(PAGE_ROUTES).reduce((prev, next) => {
    return { ...prev, ...next }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }, {} as any)
})()
