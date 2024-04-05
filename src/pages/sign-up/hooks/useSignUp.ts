import { API_ROUTES } from '~/constants'
import { usePost } from '~/services'

export const useSignUp = () => usePost(API_ROUTES.SIGN_UP)
