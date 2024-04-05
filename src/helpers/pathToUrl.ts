/* eslint-disable @typescript-eslint/no-explicit-any */
import { compile, pathToRegexp } from 'path-to-regexp'

export const pathToUrl = (url: string, params: any) => {
  const keys: any[] | undefined = []
  pathToRegexp(url, keys)
  // check keys in url has value in params object
  if (keys.every((key) => params[key.name])) {
    // Instead remove unnecessary property in params object, i create a new one and assign the needed key
    const newParams: any = {}
    keys.map((key) => {
      newParams[key.name] = params[key.name]
    })
    return compile(url)(newParams)
  }
  return ''
}
