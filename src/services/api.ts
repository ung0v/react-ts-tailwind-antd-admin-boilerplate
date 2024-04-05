import { AxiosRequestConfig } from 'axios'
import instance from './axios'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getData = async <ReturnType, QueryParamType = any>(
  url: string,
  params?: QueryParamType
): Promise<ReturnType> =>
  instance.get<ReturnType>(`${url}`, { params }).then((res) => res.data)

export const postData = async <ReturnType, BodyType>(
  url: string,
  body: BodyType,
  fileFlag = false,
  config: AxiosRequestConfig = {}
): Promise<ReturnType> =>
  instance.post(`${url}`, body, { fileFlag, ...config }).then((res) => res.data)

export const patchData = async <ReturnType, BodyType>(
  url: string,
  body: BodyType,
  fileFlag = false
): Promise<ReturnType> =>
  instance.patch(`${url}`, body, { fileFlag }).then((res) => res.data)

export const putData = async <ReturnType, BodyType>(
  url: string,
  body: BodyType,
  fileFlag = false
): Promise<ReturnType> =>
  instance.put(`${url}`, body, { fileFlag }).then((res) => res.data)

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const deleteData = async <ReturnType, BodyType = any>(
  url: string,
  body?: BodyType
): Promise<ReturnType> =>
  instance.delete(`${url}`, { data: body }).then((res) => res.data)
