/* eslint-disable @typescript-eslint/no-explicit-any */
import { InfiniteData } from '@tanstack/react-query'
import { match } from 'path-to-regexp'
import { PAGES_TITLE, PAGE_ROUTES } from '~/constants'

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
