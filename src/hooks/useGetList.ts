/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-magic-numbers */
import { keepPreviousData } from '@tanstack/react-query'
import _ from 'lodash'
import { useEffect, useRef } from 'react'
import { UUID_REGEX } from '~/constants'
import { filterObject } from '~/helpers'
import { useFetch } from '~/services'
import { useSearchStore } from '~/stores'
import { IResponseList } from '~/types'

export const useGetList = <ReturnType>(
  url: string,
  params?: object,
  enabled = true
) => {
  const prevParams = useRef<object | null>(null) // Previous Search Params

  const searchState = useSearchStore((state) =>
    _.pickBy(state, (search) => typeof search !== 'function')
  )

  const searchParams = filterObject(
    searchState,
    ([key, value]: [key: any, value: any]) => {
      return typeof value === 'number' || !!value
    }
  )

  const result = useFetch<IResponseList<ReturnType>>(
    url,
    { ...searchParams, ...(params || {}) },
    {
      enabled: !!(
        Object.keys(searchState).length > 0 &&
        !_.isEqual(prevParams.current, searchParams) &&
        enabled
      ),

      select: (data: any) => {
        if (Array.isArray(data?.data)) {
          const newData = data.data.map((item = {} as any) => {
            // handle if empty value => "-"
            for (const key in item) {
              // item[key] =
              //   _.isNull(item[key]) ||
              //   _.isUndefined(item[key]) ||
              //   item[key]?.length === 0 ||
              //   item[key] === ""
              //     ? "-"
              //     : item[key]

              // add key property to data to handle row selection key Ant Table
              if (
                key === 'id' ||
                (String(item[key]).match(UUID_REGEX) && !item.key)
              ) {
                item.key = String(item[key])
              }
            }
            return item
          })
          data.data = newData
        }
        return data
      },
      placeholderData: keepPreviousData
    }
  )

  useEffect(() => {
    if (result.isFetched) {
      prevParams.current = searchState
    }
  }, [result.isFetched, searchState])

  return result
}
