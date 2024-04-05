import { omit } from 'lodash'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { LOCALES, ROLE } from '~/constants'

export type UserState = {
  username: string
  accessToken: string
  refreshToken: string
  isLogin: boolean
  name: string
  email: string
  address: string
  role: ROLE | null
  locale: LOCALES
}

export type UserDispatch = {
  setUserStates: (value: Partial<UserState>) => void
  reset: () => void
  setToken: (token: { accessToken: string; refreshToken: string }) => void
  setLocale: (locale: LOCALES) => void
}

export const initialUserState: UserState = {
  username: '',
  accessToken: '',
  refreshToken: '',
  isLogin: false,
  name: '',
  email: '',
  address: '',
  role: null,
  locale: LOCALES.ENGLIGH
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
      reset: () => set(omit(initialUserState, ['locale'])),
      setLocale: (locale: LOCALES) =>
        set((state) => ({
          ...state,
          locale
        }))
    }),
    {
      name: 'user', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage) // (optional) by default, 'localStorage' is used,
    }
  )
)
