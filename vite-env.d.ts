/// <reference types="vite/client" />

export interface ImportMetaEnv {
  readonly VITE_APP_API_URL: string
  // more env variables...
}

export interface ImportMeta {
  readonly env: ImportMetaEnv
}
