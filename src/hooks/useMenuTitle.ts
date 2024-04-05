import { getTitleFromPathname } from '~/helpers'
import { usePathname } from './usePathname'
import { useEffect } from 'react'
import { useSharedStore } from '~/stores'

export const useMenuTitle = () => {
  const pathname = usePathname()
  const { setSharedStates } = useSharedStore()
  useEffect(() => {
    const title = getTitleFromPathname(pathname!)
    if (title) {
      setSharedStates({ title })
    }
  }, [pathname])
}
