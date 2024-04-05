/* eslint-disable @typescript-eslint/no-explicit-any */
export const wrapCallInPromise = (promise: Promise<any>) => {
  let status = 'pending' // status of execution
  let result: any // data to be returned
  const suspender = promise
    .then((resp) => {
      status = 'success'
      result = resp
    })
    .catch((err) => {
      status = 'error'
      result = err
    })
  return {
    readData() {
      if (status === 'pending') {
        throw suspender // suspend the component by throwing the suspender
      } else if (status === 'success') {
        return result // return the data successfully fetched
      } else if (status === 'error') {
        throw result // throw the error and suspend the component
      }
    }
  }
}
