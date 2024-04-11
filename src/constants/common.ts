import { ALL_PAGE_ROUTES } from '.'

export const IS_KEEP_SEARCH_PARAMS_WHEN_RELOAD = true
export const DEFAULT_SEARCH_PARAMS = {
  PAGE: 0,
  LIMIT: 10
}

export const common = null

export const PAGES_TITLE = {
  [ALL_PAGE_ROUTES.ADMIN_USER_MANAGEMENT]: ['User Management'],
  [ALL_PAGE_ROUTES.ADMIN_USER_DETAIL]: ['User Management'],
  [ALL_PAGE_ROUTES.ADMIN_CREW_MANAGEMENT]: ['Crew Management']
}

export const DATE_FORMAT = {
  DATE: 'YYYY.MM.DD',
  MONTH: 'YYYY.MM.DD',
  HOUR: 'YYYY.MM.DD HH:mm',
  TIME: 'YYYY.MM.DD HH:mm:ss'
}
