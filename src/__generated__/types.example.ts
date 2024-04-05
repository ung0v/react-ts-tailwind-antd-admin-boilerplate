/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface ApiHttpError {
  error?: string
}

export interface ApiLogin {
  password?: string
  username?: string
}

export interface ApiOrder {
  id?: number
  order?: number
}

export interface ApiAdminCreateOrderForm {
  address?: string
  bank_account?: string
  bank_name?: string
  items?: ApiAdminCreateOrderItem[]
  name?: string
  phone_number?: string
}

export interface ApiAdminCreateOrderItem {
  amount?: number
  brand_id?: number
  category_id?: number
  detail?: string
  images?: string[]
  paid_from?: boolean
  price?: number
  product_id?: string
  product_name?: string
  referral_code?: string
  sku?: string
}

export interface ApiCreateBrandForm {
  description?: string
  name?: string
}

export interface ApiCreateCategoryForm {
  description?: string
  name?: string
}

export interface ApiCreateOrderStatusForm {
  description?: string
  name?: string
}

export interface ApiCreateProductForm {
  attributes?: DomainAttribute[]
  brand_id?: number
  category_id?: number
  currency_code?: string
  description?: string
  images?: string[]
  is_published?: boolean
  name?: string
  price?: number
  short_description?: string
  sku?: string
}

export interface ApiCreateUserOrderForm {
  address?: string
  bank_account?: string
  bank_name?: string
  items?: ApiCreateUserOrderItem[]
  name?: string
  phone_number?: string
}

export interface ApiCreateUserOrderItem {
  amount?: number
  brand_id?: number
  category_id?: number
  images?: string[]
  price?: number
  product_id?: string
  product_name?: string
  sku?: string
}

export interface ApiOrderBrandForm {
  order?: ApiOrder[]
}

export interface ApiOrderCategoryForm {
  order?: ApiOrder[]
}

export interface ApiRefreshTokenForm {
  refresh_token?: string
}

export interface ApiSignUpForm {
  address?: string
  email?: string
  name?: string
  password?: string
  repassword?: string
  telephone?: string
  username?: string
}

export interface ApiUpdateBannerForm {
  banner_urls?: string[]
}

export interface ApiUpdateBrandForm {
  description?: string
  name?: string
}

export interface ApiUpdateCateForm {
  description?: string
  name?: string
}

export interface ApiUpdateOrderInfoForm {
  address?: string
  bank_account?: string
  bank_name?: string
  name?: string
  phone_number?: string
}

export interface ApiUpdateOrderItemForm {
  amount?: number
  brand_id?: number
  category_id?: number
  detail?: string
  give_cost?: number
  have_problem?: boolean
  images?: string[]
  og_cost?: number
  paid_from?: boolean
  pay_to?: boolean
  price?: number
  product_name?: string
  referral_code?: string
  return?: boolean
  return_money_collect?: boolean
  return_money_to?: boolean
  return_product?: boolean
  sku?: string
  status_id?: number
  time_delivery?: string
  total_price?: number
}

export interface ApiUpdateOrderStatusForm {
  description?: string
  name?: string
}

export interface ApiUpdatePasswordForm {
  new_password?: string
  old_password?: string
  re_new_password?: string
}

export interface ApiUpdateProductForm {
  attributes?: DomainAttribute[]
  brand_id?: number
  category_id?: number
  currency_code?: string
  description?: string
  id?: string
  images?: string[]
  is_published?: boolean
  name?: string
  price?: number
  short_description?: string
  sku?: string
}

export interface ApiUpdateUserInfoForm {
  address?: string
  bank_account?: string
  bank_name?: string
  email?: string
  name?: string
  telephone?: string
}

export interface DomainAttribute {
  name?: string
  value?: string
}

export type QueryParamsType = Record<string | number, any>
export type ResponseFormat = keyof Omit<Body, 'body' | 'bodyUsed'>

export interface FullRequestParams extends Omit<RequestInit, 'body'> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean
  /** request path */
  path: string
  /** content type of request body */
  type?: ContentType
  /** query params */
  query?: QueryParamsType
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat
  /** request body */
  body?: unknown
  /** base url */
  baseUrl?: string
  /** request cancellation token */
  cancelToken?: CancelToken
}

export type RequestParams = Omit<
  FullRequestParams,
  'body' | 'method' | 'query' | 'path'
>

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string
  baseApiParams?: Omit<RequestParams, 'baseUrl' | 'cancelToken' | 'signal'>
  securityWorker?: (
    securityData: SecurityDataType | null
  ) => Promise<RequestParams | void> | RequestParams | void
  customFetch?: typeof fetch
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown>
  extends Response {
  data: D
  error: E
}

type CancelToken = Symbol | string | number

export enum ContentType {
  Json = 'application/json',
  FormData = 'multipart/form-data',
  UrlEncoded = 'application/x-www-form-urlencoded',
  Text = 'text/plain'
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = '/api/v1'
  private securityData: SecurityDataType | null = null
  private securityWorker?: ApiConfig<SecurityDataType>['securityWorker']
  private abortControllers = new Map<CancelToken, AbortController>()
  private customFetch = (...fetchParams: Parameters<typeof fetch>) =>
    fetch(...fetchParams)

  private baseApiParams: RequestParams = {
    credentials: 'same-origin',
    headers: {},
    redirect: 'follow',
    referrerPolicy: 'no-referrer'
  }

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig)
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data
  }

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key)
    return `${encodedKey}=${encodeURIComponent(
      typeof value === 'number' ? value : `${value}`
    )}`
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key])
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key]
    return value.map((v: any) => this.encodeQueryParam(key, v)).join('&')
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {}
    const keys = Object.keys(query).filter(
      (key) => 'undefined' !== typeof query[key]
    )
    return keys
      .map((key) =>
        Array.isArray(query[key])
          ? this.addArrayQueryParam(query, key)
          : this.addQueryParam(query, key)
      )
      .join('&')
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery)
    return queryString ? `?${queryString}` : ''
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === 'object' || typeof input === 'string')
        ? JSON.stringify(input)
        : input,
    [ContentType.Text]: (input: any) =>
      input !== null && typeof input !== 'string'
        ? JSON.stringify(input)
        : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key]
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === 'object' && property !== null
            ? JSON.stringify(property)
            : `${property}`
        )
        return formData
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input)
  }

  protected mergeRequestParams(
    params1: RequestParams,
    params2?: RequestParams
  ): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {})
      }
    }
  }

  protected createAbortSignal = (
    cancelToken: CancelToken
  ): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken)
      if (abortController) {
        return abortController.signal
      }
      return void 0
    }

    const abortController = new AbortController()
    this.abortControllers.set(cancelToken, abortController)
    return abortController.signal
  }

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken)

    if (abortController) {
      abortController.abort()
      this.abortControllers.delete(cancelToken)
    }
  }

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === 'boolean' ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {}
    const requestParams = this.mergeRequestParams(params, secureParams)
    const queryString = query && this.toQueryString(query)
    const payloadFormatter = this.contentFormatters[type || ContentType.Json]
    const responseFormat = format || requestParams.format

    return this.customFetch(
      `${baseUrl || this.baseUrl || ''}${path}${
        queryString ? `?${queryString}` : ''
      }`,
      {
        ...requestParams,
        headers: {
          ...(requestParams.headers || {}),
          ...(type && type !== ContentType.FormData
            ? { 'Content-Type': type }
            : {})
        },
        signal:
          (cancelToken
            ? this.createAbortSignal(cancelToken)
            : requestParams.signal) || null,
        body:
          typeof body === 'undefined' || body === null
            ? null
            : payloadFormatter(body)
      }
    ).then(async (response) => {
      const r = response as HttpResponse<T, E>
      r.data = null as unknown as T
      r.error = null as unknown as E

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data
              } else {
                r.error = data
              }
              return r
            })
            .catch((e) => {
              r.error = e
              return r
            })

      if (cancelToken) {
        this.abortControllers.delete(cancelToken)
      }

      if (!response.ok) throw data
      return data
    })
  }
}

/**
 * @title No title
 * @baseUrl /api/v1
 * @contact
 */
export class Api<
  SecurityDataType extends unknown
> extends HttpClient<SecurityDataType> {
  admin = {
    /**
     * @description Admin Edit order info
     *
     * @tags admin/order
     * @name OrderUpdate
     * @summary Admin Edit order info
     * @request PUT:/admin/order/{orderID}
     */
    orderUpdate: (
      orderId: number,
      payload: ApiUpdateOrderInfoForm,
      params: RequestParams = {}
    ) =>
      this.request<any, ApiHttpError>({
        path: `/admin/order/${orderId}`,
        method: 'PUT',
        body: payload,
        type: ContentType.Json,
        ...params
      }),

    /**
     * @description Admin Create Order
     *
     * @tags admin/order
     * @name OrderCreate
     * @summary Admin Create Order
     * @request POST:/admin/order/{orderID}
     */
    orderCreate: (
      orderId: string,
      payload: ApiAdminCreateOrderForm,
      params: RequestParams = {}
    ) =>
      this.request<any, ApiHttpError>({
        path: `/admin/order/${orderId}`,
        method: 'POST',
        body: payload,
        type: ContentType.Json,
        ...params
      }),

    /**
     * @description Admin Add Order Item
     *
     * @tags admin/order
     * @name OrderItemCreate
     * @summary Admin Add Order Item
     * @request POST:/admin/order/{orderID}/item
     */
    orderItemCreate: (
      orderId: string,
      payload: ApiAdminCreateOrderItem,
      params: RequestParams = {}
    ) =>
      this.request<any, ApiHttpError>({
        path: `/admin/order/${orderId}/item`,
        method: 'POST',
        body: payload,
        type: ContentType.Json,
        ...params
      }),

    /**
     * @description Admin Edit order item
     *
     * @tags admin/order
     * @name OrderItemUpdate
     * @summary Admin Edit order item
     * @request PUT:/admin/order/{orderID}/item/{itemID}
     */
    orderItemUpdate: (
      orderId: number,
      itemId: number,
      payload: ApiUpdateOrderItemForm,
      params: RequestParams = {}
    ) =>
      this.request<any, ApiHttpError>({
        path: `/admin/order/${orderId}/item/${itemId}`,
        method: 'PUT',
        body: payload,
        type: ContentType.Json,
        ...params
      }),

    /**
     * @description Admin Remove order item
     *
     * @tags admin/order
     * @name OrderItemDelete
     * @summary Admin Remove order item
     * @request DELETE:/admin/order/{orderID}/item/{itemID}
     */
    orderItemDelete: (
      orderId: number,
      itemId: number,
      params: RequestParams = {}
    ) =>
      this.request<any, ApiHttpError>({
        path: `/admin/order/${orderId}/item/${itemId}`,
        method: 'DELETE',
        type: ContentType.Json,
        ...params
      })
  }
  brand = {
    /**
     * @description List Brand
     *
     * @tags brand
     * @name BrandList
     * @summary List Brand
     * @request GET:/brand
     */
    brandList: (
      query?: {
        /** page */
        page?: number
        /** limit */
        limit?: number
        /** name for search */
        q?: string
      },
      params: RequestParams = {}
    ) =>
      this.request<any, ApiHttpError>({
        path: `/brand`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        ...params
      }),

    /**
     * @description Create Brand
     *
     * @tags brand
     * @name BrandCreate
     * @summary Create Brand
     * @request POST:/brand
     */
    brandCreate: (payload: ApiCreateBrandForm, params: RequestParams = {}) =>
      this.request<any, ApiHttpError>({
        path: `/brand`,
        method: 'POST',
        body: payload,
        type: ContentType.Json,
        ...params
      }),

    /**
     * @description Order Brand
     *
     * @tags brand
     * @name OrderUpdate
     * @summary Order Brand
     * @request PUT:/brand/order
     * @secure
     */
    orderUpdate: (Payload: ApiOrderBrandForm, params: RequestParams = {}) =>
      this.request<any, ApiHttpError>({
        path: `/brand/order`,
        method: 'PUT',
        body: Payload,
        secure: true,
        type: ContentType.Json,
        ...params
      }),

    /**
     * @description Get Brand
     *
     * @tags brand
     * @name BrandDetail
     * @summary Get Brand
     * @request GET:/brand/{brandID}
     */
    brandDetail: (brandId: number, params: RequestParams = {}) =>
      this.request<any, ApiHttpError>({
        path: `/brand/${brandId}`,
        method: 'GET',
        type: ContentType.Json,
        ...params
      }),

    /**
     * @description Update Brand
     *
     * @tags brand
     * @name BrandUpdate
     * @summary Update Brand
     * @request PUT:/brand/{brandID}
     */
    brandUpdate: (
      brandId: number,
      payload: ApiUpdateBrandForm,
      params: RequestParams = {}
    ) =>
      this.request<any, ApiHttpError>({
        path: `/brand/${brandId}`,
        method: 'PUT',
        body: payload,
        type: ContentType.Json,
        ...params
      }),

    /**
     * @description Delete Brand
     *
     * @tags brand
     * @name BrandDelete
     * @summary Delete Brand
     * @request DELETE:/brand/{brandID}
     */
    brandDelete: (brandId: number, params: RequestParams = {}) =>
      this.request<any, ApiHttpError>({
        path: `/brand/${brandId}`,
        method: 'DELETE',
        type: ContentType.Json,
        ...params
      })
  }
  category = {
    /**
     * @description List Category
     *
     * @tags category
     * @name CategoryList
     * @summary List Category
     * @request GET:/category
     */
    categoryList: (
      query?: {
        /** page */
        page?: number
        /** limit */
        limit?: number
        /** name for search */
        q?: string
      },
      params: RequestParams = {}
    ) =>
      this.request<any, ApiHttpError>({
        path: `/category`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        ...params
      }),

    /**
     * @description Create Category
     *
     * @tags category
     * @name CategoryCreate
     * @summary Create Category
     * @request POST:/category
     * @secure
     */
    categoryCreate: (
      payload: ApiCreateCategoryForm,
      params: RequestParams = {}
    ) =>
      this.request<any, ApiHttpError>({
        path: `/category`,
        method: 'POST',
        body: payload,
        secure: true,
        type: ContentType.Json,
        ...params
      }),

    /**
     * @description Order Category
     *
     * @tags category
     * @name OrderUpdate
     * @summary Order Category
     * @request PUT:/category/order
     * @secure
     */
    orderUpdate: (Payload: ApiOrderCategoryForm, params: RequestParams = {}) =>
      this.request<any, ApiHttpError>({
        path: `/category/order`,
        method: 'PUT',
        body: Payload,
        secure: true,
        type: ContentType.Json,
        ...params
      }),

    /**
     * @description Get Category
     *
     * @tags category
     * @name CategoryDetail
     * @summary Get Category
     * @request GET:/category/{categoryID}
     */
    categoryDetail: (categoryId: number, params: RequestParams = {}) =>
      this.request<any, ApiHttpError>({
        path: `/category/${categoryId}`,
        method: 'GET',
        type: ContentType.Json,
        ...params
      }),

    /**
     * @description Update Category
     *
     * @tags category
     * @name CategoryUpdate
     * @summary Update Category
     * @request PUT:/category/{categoryID}
     * @secure
     */
    categoryUpdate: (
      categoryId: number,
      payload: ApiUpdateCateForm,
      params: RequestParams = {}
    ) =>
      this.request<any, ApiHttpError>({
        path: `/category/${categoryId}`,
        method: 'PUT',
        body: payload,
        secure: true,
        type: ContentType.Json,
        ...params
      }),

    /**
     * @description Delete Category
     *
     * @tags category
     * @name CategoryDelete
     * @summary Delete Category
     * @request DELETE:/category/{categoryID}
     * @secure
     */
    categoryDelete: (categoryId: number, params: RequestParams = {}) =>
      this.request<any, ApiHttpError>({
        path: `/category/${categoryId}`,
        method: 'DELETE',
        secure: true,
        type: ContentType.Json,
        ...params
      })
  }
  login = {
    /**
     * @description Authenticate
     *
     * @tags auth
     * @name LoginCreate
     * @summary Authenticate
     * @request POST:/login
     */
    loginCreate: (login: ApiLogin, params: RequestParams = {}) =>
      this.request<any, ApiHttpError>({
        path: `/login`,
        method: 'POST',
        body: login,
        type: ContentType.Json,
        ...params
      })
  }
  order = {
    /**
     * @description List User Order
     *
     * @tags order
     * @name OrderList
     * @summary List User Order
     * @request GET:/order
     * @secure
     */
    orderList: (
      query?: {
        /** page */
        Page?: number
        /** limit */
        Limit?: number
        /** search name, phone number, address */
        Q?: string
      },
      params: RequestParams = {}
    ) =>
      this.request<any, ApiHttpError>({
        path: `/order`,
        method: 'GET',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params
      }),

    /**
     * @description Create Order
     *
     * @tags order
     * @name OrderCreate
     * @summary Create Order
     * @request POST:/order
     * @secure
     */
    orderCreate: (
      Payload: ApiCreateUserOrderForm,
      params: RequestParams = {}
    ) =>
      this.request<any, ApiHttpError>({
        path: `/order`,
        method: 'POST',
        body: Payload,
        secure: true,
        type: ContentType.Json,
        ...params
      }),

    /**
     * @description Get Order
     *
     * @tags order
     * @name OrderDetail
     * @summary Get Order
     * @request GET:/order/{orderID}
     * @secure
     */
    orderDetail: (orderId: number, params: RequestParams = {}) =>
      this.request<any, ApiHttpError>({
        path: `/order/${orderId}`,
        method: 'GET',
        secure: true,
        type: ContentType.Json,
        ...params
      })
  }
  orderStatus = {
    /**
     * @description List Order Status
     *
     * @tags order_status
     * @name OrderStatusList
     * @summary List Order Status
     * @request GET:/order_status
     */
    orderStatusList: (
      query?: {
        /** page */
        page?: number
        /** limit */
        limit?: number
        /** name for search */
        name?: string
      },
      params: RequestParams = {}
    ) =>
      this.request<any, ApiHttpError>({
        path: `/order_status`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        ...params
      }),

    /**
     * @description Create Order Status
     *
     * @tags order_status
     * @name OrderStatusCreate
     * @summary Create Order Status
     * @request POST:/order_status
     * @secure
     */
    orderStatusCreate: (
      payload: ApiCreateOrderStatusForm,
      params: RequestParams = {}
    ) =>
      this.request<any, ApiHttpError>({
        path: `/order_status`,
        method: 'POST',
        body: payload,
        secure: true,
        type: ContentType.Json,
        ...params
      }),

    /**
     * @description Get Order Status
     *
     * @tags order_status
     * @name OrderStatusDetail
     * @summary Get Order Status
     * @request GET:/order_status/{statusID}
     */
    orderStatusDetail: (statusId: number, params: RequestParams = {}) =>
      this.request<any, ApiHttpError>({
        path: `/order_status/${statusId}`,
        method: 'GET',
        type: ContentType.Json,
        ...params
      }),

    /**
     * @description Update Order Status
     *
     * @tags order_status
     * @name OrderStatusUpdate
     * @summary Update Order Status
     * @request PUT:/order_status/{statusID}
     * @secure
     */
    orderStatusUpdate: (
      statusId: number,
      payload: ApiUpdateOrderStatusForm,
      params: RequestParams = {}
    ) =>
      this.request<any, ApiHttpError>({
        path: `/order_status/${statusId}`,
        method: 'PUT',
        body: payload,
        secure: true,
        type: ContentType.Json,
        ...params
      }),

    /**
     * @description Delete Order Status
     *
     * @tags order_status
     * @name OrderStatusDelete
     * @summary Delete Order Status
     * @request DELETE:/order_status/{statusID}
     * @secure
     */
    orderStatusDelete: (statusId: number, params: RequestParams = {}) =>
      this.request<any, ApiHttpError>({
        path: `/order_status/${statusId}`,
        method: 'DELETE',
        secure: true,
        type: ContentType.Json,
        ...params
      })
  }
  product = {
    /**
     * @description List Product
     *
     * @tags product
     * @name ProductList
     * @summary List Product
     * @request GET:/product
     */
    productList: (
      query?: {
        /** page */
        page?: number
        /** limit */
        limit?: number
        /** search for sku or name */
        q?: string
        /** from date */
        from_date?: string
        /** to date */
        to_date?: string
        /** from price */
        from_price?: number
        /** to price */
        to_price?: number
        /** category ids */
        'category_ids[]'?: number[]
        /** brand ids */
        'brand_ids[]'?: number[]
        /** is_published */
        is_published?: boolean
      },
      params: RequestParams = {}
    ) =>
      this.request<any, ApiHttpError>({
        path: `/product`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        ...params
      }),

    /**
     * @description Create Product
     *
     * @tags product
     * @name ProductCreate
     * @summary Create Product
     * @request POST:/product
     */
    productCreate: (
      payload: ApiCreateProductForm,
      params: RequestParams = {}
    ) =>
      this.request<any, ApiHttpError>({
        path: `/product`,
        method: 'POST',
        body: payload,
        type: ContentType.Json,
        ...params
      }),

    /**
     * @description Get Product
     *
     * @tags product
     * @name ProductDetail
     * @summary Get Product
     * @request GET:/product/{productID}
     */
    productDetail: (productId: string, params: RequestParams = {}) =>
      this.request<any, ApiHttpError>({
        path: `/product/${productId}`,
        method: 'GET',
        type: ContentType.Json,
        ...params
      }),

    /**
     * @description Update Product
     *
     * @tags product
     * @name ProductUpdate
     * @summary Update Product
     * @request PUT:/product/{productID}
     */
    productUpdate: (
      productId: string,
      payload: ApiUpdateProductForm,
      params: RequestParams = {}
    ) =>
      this.request<any, ApiHttpError>({
        path: `/product/${productId}`,
        method: 'PUT',
        body: payload,
        type: ContentType.Json,
        ...params
      }),

    /**
     * @description Delete Product
     *
     * @tags product
     * @name ProductDelete
     * @summary Delete Product
     * @request DELETE:/product/{productID}
     */
    productDelete: (productId: string, params: RequestParams = {}) =>
      this.request<any, ApiHttpError>({
        path: `/product/${productId}`,
        method: 'DELETE',
        type: ContentType.Json,
        ...params
      })
  }
  refreshToken = {
    /**
     * @description Refresh Token
     *
     * @tags auth
     * @name RefreshTokenCreate
     * @summary Refresh Token
     * @request POST:/refresh_token
     */
    refreshTokenCreate: (
      refreshTokenForm: ApiRefreshTokenForm,
      params: RequestParams = {}
    ) =>
      this.request<any, ApiHttpError>({
        path: `/refresh_token`,
        method: 'POST',
        body: refreshTokenForm,
        type: ContentType.Json,
        ...params
      })
  }
  setting = {
    /**
     * @description Get Setting
     *
     * @tags setting
     * @name SettingList
     * @summary Get Setting
     * @request GET:/setting
     * @secure
     */
    settingList: (params: RequestParams = {}) =>
      this.request<any, ApiHttpError>({
        path: `/setting`,
        method: 'GET',
        secure: true,
        type: ContentType.Json,
        ...params
      }),

    /**
     * @description Update Banner
     *
     * @tags setting
     * @name BannerUrlUpdate
     * @summary Update Banner
     * @request PUT:/setting/banner_url
     * @secure
     */
    bannerUrlUpdate: (
      payload: ApiUpdateBannerForm,
      params: RequestParams = {}
    ) =>
      this.request<any, ApiHttpError>({
        path: `/setting/banner_url`,
        method: 'PUT',
        body: payload,
        secure: true,
        type: ContentType.Json,
        ...params
      })
  }
  signUp = {
    /**
     * @description Sign up
     *
     * @tags auth
     * @name SignUpCreate
     * @summary Sign up
     * @request POST:/sign_up
     */
    signUpCreate: (signUpForm: ApiSignUpForm, params: RequestParams = {}) =>
      this.request<any, ApiHttpError>({
        path: `/sign_up`,
        method: 'POST',
        body: signUpForm,
        type: ContentType.Json,
        ...params
      })
  }
  upload = {
    /**
     * @description Upload
     *
     * @tags upload
     * @name UploadCreate
     * @summary Upload
     * @request POST:/upload
     */
    uploadCreate: (
      data: {
        /** File */
        file: File
      },
      params: RequestParams = {}
    ) =>
      this.request<any, ApiHttpError>({
        path: `/upload`,
        method: 'POST',
        body: data,
        type: ContentType.FormData,
        ...params
      })
  }
  user = {
    /**
     * @description Update Password
     *
     * @tags account
     * @name PasswordUpdate
     * @summary Update Password
     * @request PUT:/user/password
     */
    passwordUpdate: (
      payload: ApiUpdatePasswordForm,
      params: RequestParams = {}
    ) =>
      this.request<any, ApiHttpError>({
        path: `/user/password`,
        method: 'PUT',
        body: payload,
        type: ContentType.Json,
        ...params
      }),

    /**
     * @description Get User Detail
     *
     * @tags account
     * @name UserDetail
     * @summary Get User Detail
     * @request GET:/user/{userID}
     */
    userDetail: (userId: string, params: RequestParams = {}) =>
      this.request<any, ApiHttpError>({
        path: `/user/${userId}`,
        method: 'GET',
        type: ContentType.Json,
        ...params
      }),

    /**
     * @description Update Information
     *
     * @tags account
     * @name UserUpdate
     * @summary Update Information
     * @request PUT:/user/{userID}
     */
    userUpdate: (
      userId: string,
      payload: ApiUpdateUserInfoForm,
      params: RequestParams = {}
    ) =>
      this.request<any, ApiHttpError>({
        path: `/user/${userId}`,
        method: 'PUT',
        body: payload,
        type: ContentType.Json,
        ...params
      })
  }
}
