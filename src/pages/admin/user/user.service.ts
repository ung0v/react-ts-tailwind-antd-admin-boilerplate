import { AdminEditUserRequestDto, UserInfoDto } from '~/__generated__/types'
import { API_ROUTES } from '~/constants'
import { pathToUrl } from '~/helpers'
import { useGetList } from '~/hooks/useGetList'
import { useFetch, usePutById } from '~/services'

export const useGetUsers = () => useGetList(API_ROUTES.ADMIN_USERS)

export const useGetUserDetails = (userId: string) =>
  useFetch<UserInfoDto>(pathToUrl(API_ROUTES.ADMIN_USERS_ID, { userId }))

export const useChangeUser = () =>
  usePutById<null, AdminEditUserRequestDto & { userId: string }>(
    API_ROUTES.ADMIN_USERS_ID
  )
