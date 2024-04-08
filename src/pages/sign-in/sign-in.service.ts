import {
  AdminSignInRequestBodyDto,
  AdminSignInResponseDto
} from '~/__generated__/types'
import { API_ROUTES } from '~/constants'
import { usePost } from '~/services'

export const useSignIn = () =>
  usePost<AdminSignInResponseDto, AdminSignInRequestBodyDto>(
    API_ROUTES.ADMIN_SIGN_IN
  )
