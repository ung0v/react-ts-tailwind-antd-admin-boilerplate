import {
  ApiCreateBrandForm,
  ApiUpdateBrandForm
} from '~/__generated__/types.example'
import { API_ROUTES } from '~/constants'
import { useGetList } from '~/hooks/useGetList'
import { useDeleteById, usePost, usePutById } from '~/services'

export const useGetBrands = () => useGetList(API_ROUTES.BRAND)

export const useCreateBrand = () =>
  usePost<null, ApiCreateBrandForm>(API_ROUTES.BRAND)

export const useEditBrand = () =>
  usePutById<null, ApiUpdateBrandForm & { id: string }>(API_ROUTES.BRAND_ID)

export const useDeleteBrand = () =>
  useDeleteById<null, { id: string }>(API_ROUTES.BRAND_ID)
