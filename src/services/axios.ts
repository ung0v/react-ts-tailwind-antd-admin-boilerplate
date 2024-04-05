/* eslint-disable no-magic-numbers */

import { Modal, message, notification } from 'antd'
import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig
} from 'axios'
import { ENVIRONMENTS } from '~/configs'
import { API_ROUTES } from '~/constants'
import { useUserStore } from '~/stores'

const URL_GATEWAY = import.meta.env.VITE_APP_API_URL

declare module 'axios' {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  export interface AxiosRequestConfig {
    retry?: boolean
    fileFlag?: boolean
  }
}

const instance: AxiosInstance = axios.create({
  baseURL: URL_GATEWAY,
  timeout: 5000
})

instance.defaults.headers.common.Accept = 'application/json'
instance.defaults.headers.common['Content-Type'] =
  'application/json; charset=UTF-8'

// handle interceptor request
instance.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    if (config.fileFlag === true) {
      config.headers['Content-Type'] = 'multipart/form-data'
      delete config.fileFlag
    }
    const accessToken = useUserStore.getState().accessToken

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`
    }
    return config
  }
)

// Reissuance and re-request upon token expiration
// eslint-disable-next-line
let isTokenRefreshing = false
// eslint-disable-next-line
let refreshSubscribers: ((accessToken: string) => void)[] = []

const onTokenRefreshed = (accessToken: string) =>
  refreshSubscribers.map((callback) => callback(accessToken))
const addRefreshSubscriber = (callback: (accessToken: string) => void) =>
  refreshSubscribers.push(callback)

// handle interceptor response
instance.interceptors.response.use(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (res: AxiosResponse<any>) => {
    // handle success response
    return res
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (err: AxiosError<any>) => {
    const errorObject = {
      ...err.response?.data,
      title: 'Server Error',
      statusCode: err.response?.status || 500,
      message: err.response?.data?.message || 'Something went wrong!'
    }

    // handle access token expired
    const originalRequest = err.config as AxiosRequestConfig
    if (
      err.response?.status === 401 &&
      !originalRequest.retry &&
      useUserStore.getState().isLogin
    ) {
      // reveal a new access token by using refresh token
      if (isTokenRefreshing === false) {
        isTokenRefreshing = true

        axios
          .post(`${ENVIRONMENTS.VITE_APP_API_URL}${API_ROUTES.REFRESH_TOKEN}`, {
            refresh_token: useUserStore.getState().refreshToken
          })
          .then((res) => res.data)
          .then(({ data: { access_token, refresh_token } }) => {
            useUserStore.getState().setToken({
              accessToken: access_token,
              refreshToken: refresh_token
            })
            // Run callbacks contained in refreshSubscribers sequentially as new tokens
            onTokenRefreshed(access_token)
          })
          .catch(async () => {
            // handle refresh failed
            useUserStore.getState().reset()
          })
          .finally(() => {
            refreshSubscribers = []
            isTokenRefreshing = false
          })
      }

      // handle retry unauthorize request
      const retryOriginalRequest = new Promise((resolve) => {
        addRefreshSubscriber((accessToken: string) => {
          originalRequest.headers!.Authorization = `Bearer ${accessToken}`
          resolve(
            axios(originalRequest)
              .then((res) => {
                return res
              })
              .catch((error) => {
                // handle retry error request
                const errorObject = {
                  title: 'Server Error',
                  statusCode: error.response?.status || 500,
                  message: error.response?.data?.message || 'Server Error'
                }

                return Promise.reject(errorObject)
              })
          )
        })
      })

      originalRequest.retry = true
      return retryOriginalRequest
    }

    if (errorObject.statusCode === 403) {
      // useUserStore.getState().reset()
    }

    if (errorObject.statusCode === 500) {
      notification.error({
        duration: 10,
        message: errorObject.title,
        description: errorObject.message
      })
    }
    return Promise.reject(errorObject)
  }
)

export default instance
