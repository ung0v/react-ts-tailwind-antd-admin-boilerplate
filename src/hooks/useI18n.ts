import { useTranslation } from 'react-i18next'

export const useI18n = () => {
  const translation = useTranslation()
  return translation
}
