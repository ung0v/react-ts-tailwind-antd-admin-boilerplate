import { AdminEditCrewRequestDto } from '~/__generated__/types'
import { API_ROUTES } from '~/constants'
import { useGetList } from '~/hooks/useGetList'
import { usePutById } from '~/services'

export const useGetCrews = () => useGetList(API_ROUTES.ADMIN_CREWS)

export const useChangeCrew = () =>
  usePutById<null, AdminEditCrewRequestDto & { crewId: string }>(
    API_ROUTES.ADMIN_CREWS_ID
  )
