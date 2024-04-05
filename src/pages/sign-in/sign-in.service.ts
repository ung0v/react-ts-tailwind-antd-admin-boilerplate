import { ApiLogin } from '~/__generated__/types.example'
import { API_ROUTES } from '~/constants'
import { usePost } from '~/services'

export const useSignIn = () =>
  usePost<{ data: { access_token: string; refresh_token: string } }, ApiLogin>(
    API_ROUTES.SIGN_IN
  )
