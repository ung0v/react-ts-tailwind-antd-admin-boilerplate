/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from 'zustand'

export type ISearchParams = {
  search: string
  limit: number
  page: number
  [key: string]: any
}

export type ISearchState = ISearchParams & {
  setMultiSearch: (value: { [key: string]: any }) => void
  setSearchStates: (
    key: keyof ISearchParams | string,
    value: string | number | boolean | string[] | undefined
  ) => void
  setStates: (searchStates: ISearchState) => void
  reset: () => void
  resetExcept: (except: string[]) => void
}

export const initialState: ISearchParams = {
  search: '',
  limit: 10,
  page: 1
}

const resetCommon = (state: ISearchState, except: string[] = []) => {
  return Object.keys(state).reduce((result: any, item) => {
    if (typeof state[item] === 'function' || except.includes(item)) {
      result[item] = state[item]
    } else if (Object.keys(initialState).includes(item)) {
      result[item] = initialState[item]
    } else {
      result[item] = undefined
    }
    return result
  }, {})
}

export const useSearchStore = create<ISearchState>((set) => ({
  ...initialState,
  setMultiSearch: (value) =>
    set((state) => ({
      ...state,
      ...value
    })),
  setSearchStates: (key, value) =>
    set((state) => ({
      ...state,
      [key]: value
    })),
  setStates: (searchStates: ISearchState) => set(searchStates),
  reset: () =>
    set((state) => {
      return resetCommon(state)
    }),
  resetExcept: (except = []) =>
    set((state) => {
      return resetCommon(state, except)
    })
}))
