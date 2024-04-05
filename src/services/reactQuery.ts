/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  QueryFunctionContext,
  UseQueryOptions,
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient
} from '@tanstack/react-query'
import { AxiosError, AxiosRequestConfig } from 'axios'
import { pathToUrl } from '~/helpers'
import { deleteData, getData, patchData, postData, putData } from './api'

type QueryKeyT = [string, object | undefined]
type PageParamT = any

type GetInfinitePagesInterface<T> = {
  nextId?: number
  previousId?: number
  data: T
  count: number
}

export const fetcher = <T>({
  queryKey,
  pageParam
}: QueryFunctionContext<QueryKeyT, PageParamT>): Promise<T> => {
  const [url, params] = queryKey
  return getData<T>(url, { ...params, pageParam }).then((res) => res)
}

// export const useLoadMore = <T>(url: string | null, params?: object) => {
//   const context = useInfiniteQuery<
//     GetInfinitePagesInterface<T>,
//     Error,
//     GetInfinitePagesInterface<T>,
//     QueryKeyT
//   >(
//     [url!, params],
//     ({ queryKey, pageParam = 1, meta }) =>
//       fetcher({ queryKey, pageParam, meta }),
//     {
//       getPreviousPageParam: (firstPage) => firstPage.previousId ?? false,
//       getNextPageParam: (lastPage) => {
//         return lastPage.nextId ?? false
//       }
//     }
//   )

//   return context
// }

export const usePrefetch = <T>(url: string | null, params?: object) => {
  const queryClient = useQueryClient()

  return () => {
    if (!url) {
      return
    }

    queryClient.prefetchQuery<T, Error, T, QueryKeyT>({
      queryKey: [url!, params],
      queryFn: ({ queryKey }) => fetcher({ queryKey } as any)
    })
  }
}

export const useFetch = <T>(
  url: string | null,
  params?: object,
  config?: Partial<UseQueryOptions<T, Error, T, QueryKeyT>>
) => {
  const context = useQuery<T, Error, T, QueryKeyT>({
    queryKey: [url!, params],
    queryFn: ({ queryKey }) => fetcher({ queryKey } as any),
    enabled: !!url,
    ...config
  })

  return context
}

const useGenericMutation = <T, S>(
  func: (data: T | S) => Promise<T>,
  url: string,
  params?: object,
  updater?: ((oldData: T, newData: S) => T) | undefined
) => {
  const queryClient = useQueryClient()

  return useMutation<T, AxiosError, T | S>({
    mutationFn: func,
    // This cause wrong data in some case update data mutation, please be carefull if you want uncomment!
    onMutate: async (data) => {
      await queryClient.cancelQueries({ queryKey: [url!, params] })

      const previousData = queryClient.getQueryData([url!, params])

      queryClient.setQueryData<T>([url!, params], (oldData) => {
        return updater ? updater(oldData!, data as S) : (data as T)
      })

      return previousData
    },
    onError: (err, _, context) => {
      queryClient.setQueryData([url!, params], context)
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: [url!, params] })
    }
  })
}

export const useDelete = <T>(
  url: string,
  params?: object,
  updater?: (oldData: T, id: string | number) => T
) => {
  return useGenericMutation<T, string | number>(
    (data) => deleteData(url, data),
    url,
    params,
    updater
  )
}

export const useDeleteById = <T, S>(
  url: string,
  params?: object,
  updater?: (oldData: T, newData: S) => T
) => {
  return useGenericMutation<T, S>(
    (data) => deleteData(pathToUrl(url, data || {}), data),
    url,
    params,
    updater
  )
}

export const usePost = <T, S>(
  url: string,
  params?: object,
  updater?: (oldData: T, newData: S) => T,
  config?: AxiosRequestConfig
) => {
  return useGenericMutation<T, S>(
    (data) =>
      postData<T, S>(url, data as S, config?.fileFlag, { ...(config || {}) }),
    url,
    params,
    updater
  )
}

export const usePostById = <T, S>(
  url: string,
  params?: object,
  updater?: (oldData: T, newData: S) => T,
  config?: AxiosRequestConfig
) => {
  return useGenericMutation<T, S>(
    (data) =>
      postData<T, S>(pathToUrl(url, data || {}), data as S, config?.fileFlag, {
        ...(config || {})
      }),
    url,
    params,
    updater
  )
}

export const usePut = <T, S>(
  url: string,
  params?: object,
  updater?: (oldData: T, newData: S) => T
) => {
  return useGenericMutation<T, S>(
    (data) => putData<T, S>(url, data as S),
    url,
    params,
    updater
  )
}

export const usePutById = <T, S>(
  url: string,
  params?: object,
  updater?: (oldData: T, newData: S) => T
) => {
  return useGenericMutation<T, S>(
    (data) => putData<T, S>(pathToUrl(url, data || {}), data as S),
    url,
    params,
    updater
  )
}

export const usePatch = <T, S>(
  url: string,
  params?: object,
  updater?: (oldData: T, newData: S) => T
) => {
  return useGenericMutation<T, S>(
    (data) => patchData<T, S>(url, data as S),
    url,
    params,
    updater
  )
}

// references:
// https://www.smashingmagazine.com/2022/01/building-real-app-react-query/
// https://github.com/horprogs/react-query/blob/master/src/utils/reactQuery.ts
