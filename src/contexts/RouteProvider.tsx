import 'antd/dist/reset.css'
import {
  RouterProvider as RouterProviderDOM,
  createBrowserRouter
} from 'react-router-dom'
import { AuthProvider } from '.'
import { ALL_PAGE_ROUTES } from '../constants'
import { AdminLayout, CommonLayout } from '../layouts'
import {
  CrewDetail,
  CrewManagement,
  CrewUserDetail,
  NotFoundPage,
  SignIn,
  SignUp,
  UserDetail,
  UserManagement
} from '../pages'

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
            element: <UserManagement />
          },
          {
            path: ALL_PAGE_ROUTES.ADMIN_USER_MANAGEMENT,
            element: <UserManagement />
          },
          {
            path: ALL_PAGE_ROUTES.ADMIN_USER_DETAIL,
            element: <UserDetail />
          },
          {
            path: ALL_PAGE_ROUTES.ADMIN_CREW_MANAGEMENT,
            element: <CrewManagement />
          },
          {
            path: ALL_PAGE_ROUTES.ADMIN_CREW_DETAIL,
            element: <CrewDetail />
          },
          {
            path: ALL_PAGE_ROUTES.ADMIN_CREW_USER_DETAIL,
            element: <CrewUserDetail />
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
