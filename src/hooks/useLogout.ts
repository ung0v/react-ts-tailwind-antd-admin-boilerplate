import { useUserStore } from '~/stores'

export const useLogout = () => {
  const userStore = useUserStore()

  const handleLogout = () => {
    localStorage.clear()
    userStore.reset()
  }

  return handleLogout
}
