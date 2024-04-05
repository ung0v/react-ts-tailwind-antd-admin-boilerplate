import 'antd/dist/reset.css'
import {
  RouterProvider as RouterProviderDOM,
  createBrowserRouter
} from 'react-router-dom'
import { AuthProvider } from '.'
import { ALL_PAGE_ROUTES } from '../constants'
import { AdminLayout, CommonLayout } from '../layouts'
import { Brand, NotFoundPage, SignIn, SignUp } from '../pages'

const router = createBrowserRouter([
  {
    element: <AuthProvider />,
    children: [
      {
        element: <CommonLayout />,
        children: [
          {
            path: ALL_PAGE_ROUTES.HOME,
            element: <SignIn />
          },
          {
            path: ALL_PAGE_ROUTES.SIGN_IN,
            element: <SignIn />
          },
          {
            path: ALL_PAGE_ROUTES.SIGN_UP,
            element: <SignUp />
          }
        ]
      },
      {
        element: <AdminLayout />,
        children: [
          {
            path: ALL_PAGE_ROUTES.ADMIN_HOME,
            element: <Brand />
          },
          {
            path: ALL_PAGE_ROUTES.ADMIN_BRAND,
            element: <Brand />
          }
        ]
      }
    ]
  },
  {
    path: '*',
    element: <NotFoundPage />
  }
])

export const RouteProvider = () => {
  return <RouterProviderDOM router={router} />
}
