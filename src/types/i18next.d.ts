import { resources, defaultNS } from '../i18n'

declare module 'i18next' {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS
    resources: (typeof resources)['en']
  }
}
