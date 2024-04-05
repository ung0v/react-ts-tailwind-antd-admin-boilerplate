import { isFunction } from 'lodash'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { ROLE } from '~/constants'
import { ProductSchemaType } from '~/types'

export type UserState = {
  username: string
  cart: ProductSchemaType[]
  tempCart: ProductSchemaType | null
  accessToken: string
  refreshToken: string
  isLogin: boolean
  name: string
  email: string
  address: string
  role: ROLE | null
}

export type UserDispatch = {
  setUserStates: (value: Partial<UserState>) => void
  setCart: (
    fn: ((prev: ProductSchemaType[]) => ProductSchemaType[]) | UserState['cart']
  ) => void
  setTempCart: (
    fn:
      | ((prev: ProductSchemaType | null) => ProductSchemaType | null)
      | UserState['tempCart']
  ) => void
  reset: () => void
  setToken: (token: { accessToken: string; refreshToken: string }) => void
}

export const initialUserState: UserState = {
  username: '',
  cart: [],
  tempCart: null,
  accessToken: '',
  refreshToken: '',
  isLogin: false,
  name: '',
  email: '',
  address: '',
  role: null
}

export const useUserStore = create<
  UserState & UserDispatch,
  [['zustand/persist', unknown]]
>(
  persist(
    (set) => ({
      ...initialUserState,
      setUserStates: (value) =>
        set((state) => ({
          ...state,
          ...value
        })),
      setToken: ({ accessToken, refreshToken }) =>
        set((state) => ({
          ...state,
          accessToken,
          refreshToken
        })),
      setCart: (
        fn:
          | ((prev: ProductSchemaType[]) => ProductSchemaType[])
          | UserState['cart']
      ) =>
        set((state) => ({
          ...state,
          cart: isFunction(fn) ? fn(state.cart) : fn
        })),
      setTempCart: (
        fn:
          | ((prev: ProductSchemaType | null) => ProductSchemaType | null)
          | UserState['tempCart']
      ) =>
        set((state) => ({
          ...state,
          tempCart: isFunction(fn) ? fn(state.tempCart) : fn
        })),
      reset: () => set(initialUserState)
    }),
    {
      name: 'user', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage) // (optional) by default, 'localStorage' is used,
    }
  )
)
