export interface IResponseData<T = Record<string, unknown>> {
  statusCode: number
  message: string
  data: T
}
export interface IResponseList<T = object> {
  data: T[]
  message: string
  pagination: Pagination
}

export interface Pagination {
  cur_page: number
  limit: number
  total: number
  total_page: number
}
