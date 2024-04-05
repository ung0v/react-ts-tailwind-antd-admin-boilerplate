import { create } from 'zustand'

export type SharedState = {
  title: string | string[]
}

export type SharedDispatch = {
  setSharedStates: (shared: Partial<SharedState>) => void
  reset: () => void
}

export const initialSharedState: SharedState = {
  title: ''
}

export const useSharedStore = create<SharedState & SharedDispatch>((set) => ({
  ...initialSharedState,
  setSharedStates: (value) =>
    set((state) => ({
      ...state,
      ...value
    })),
  reset: () => set(initialSharedState)
}))
