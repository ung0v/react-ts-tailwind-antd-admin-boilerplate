import {
  AdminEditCrewRequestDto,
  AdminGetCrewDetailResponseDto
} from '~/__generated__/types'
import { API_ROUTES } from '~/constants'
import { pathToUrl } from '~/helpers'
import { useGetList } from '~/hooks/useGetList'
import { useFetch, usePutById } from '~/services'

export const useGetCrews = () => useGetList(API_ROUTES.ADMIN_CREWS)

export const useChangeCrew = () =>
  usePutById<null, AdminEditCrewRequestDto & { crewId: string }>(
    API_ROUTES.ADMIN_CREWS_ID
  )

export const useGetCrewDetail = (crewId?: string) =>
  useFetch<AdminGetCrewDetailResponseDto>(
    pathToUrl(API_ROUTES.ADMIN_CREWS_ID, { crewId })
  )
