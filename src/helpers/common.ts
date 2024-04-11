/* eslint-disable @typescript-eslint/no-explicit-any */
import { InfiniteData } from '@tanstack/react-query'
import dayjs from 'dayjs'
import { match } from 'path-to-regexp'
import { DATE_FORMAT, PAGES_TITLE, PAGE_ROUTES } from '~/constants'

export const test = {}

export const getTitleFromPathname = (pathname: string) => {
  const fnMaps = Object.values(PAGE_ROUTES.PRIVATE).map((page) => ({
    key: page,
    match: match(page, { decode: decodeURIComponent })
  }))
  const page = fnMaps.find((fn) => fn.match(pathname))
  if (page) {
    return PAGES_TITLE[page.key]
  }

  return ''
}

export const filterObject = (obj: any, predicate: any) =>
  Object.fromEntries(Object.entries(obj).filter(predicate))

export const handleInfiniteQueryDataList = (data: any) => {
  return data?.pages.reduce(
    (prev: any, acc: any) => [...prev, ...acc.data],
    [] as any[]
  )
}

export const formatDate = (
  date?: Date | null | string,
  type?: keyof typeof DATE_FORMAT
) => {
  if (!date) {
    return '-'
  }
  if (type) {
    return dayjs(date).format(DATE_FORMAT[type])
  }
  return dayjs(date).format(DATE_FORMAT.DATE)
}

export const handleParamsBeforeSubmit = (params: object): any => {
  const searchParams =
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    filterObject(params, ([key, value]: [key: any, value: any]) => {
      return typeof value === 'number' || !!value
    }) || {}
  console.log(searchParams)
  return searchParams
}
