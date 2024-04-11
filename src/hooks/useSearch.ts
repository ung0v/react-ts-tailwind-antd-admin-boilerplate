import { useEffect, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import {
  DEFAULT_SEARCH_PARAMS,
  IS_KEEP_SEARCH_PARAMS_WHEN_RELOAD
} from '~/constants'
import { handleParamsBeforeSubmit } from '~/helpers'
import { useSearchStore } from '~/stores'

export const useSearch = () => {
  const { limit, page, setSearchStates } = useSearchStore()
  const [searchParams, setSearchParams] = useSearchParams()

  const currentSearchParams = useMemo(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const newSearchParams: any = {
      limit: DEFAULT_SEARCH_PARAMS.LIMIT,
      page: DEFAULT_SEARCH_PARAMS.PAGE
    }
    if (searchParams.size) {
      for (const [key, value] of searchParams.entries()) {
        if (typeof value === 'number' || !!value) {
          newSearchParams[key] = value
        }
      }
    }
    return newSearchParams
  }, [searchParams])

  const appendParams = (params: object) => {
    setSearchParams((prev) => {
      return handleParamsBeforeSubmit({
        ...Object.fromEntries([...prev]),
        ...params
      })
    })
  }

  const removeParams = (searchKey: string) => {
    searchParams.delete(searchKey)
  }

  useEffect(() => {
    if (IS_KEEP_SEARCH_PARAMS_WHEN_RELOAD) {
      for (const [key, value] of searchParams.entries()) {
        setSearchStates(key, value)
      }
    }
  }, [])

  return { currentSearchParams, appendParams, removeParams }
}
