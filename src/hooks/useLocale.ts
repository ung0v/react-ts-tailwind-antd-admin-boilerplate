import { useUserStore } from '~/stores'
import { useI18n } from './useI18n'
import { useEffect } from 'react'

export const useLocale = () => {
  const { locale } = useUserStore()
  const { i18n } = useI18n()

  useEffect(() => {
    i18n.changeLanguage(locale)
  }, [locale])
}
