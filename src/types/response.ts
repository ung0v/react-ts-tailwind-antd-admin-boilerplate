export interface IResponseData<T = Record<string, unknown>> {
  statusCode: number
  message: string
  data: T
}
export interface IResponseList<T = object> {
  data: T[]
  message: string
  metadata: Pagination
}

export interface Pagination {
  page: number
  limit: number
  totalRecords: number
  totalPages: number
}
