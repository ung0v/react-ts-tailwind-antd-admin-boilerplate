/* eslint-disable @typescript-eslint/no-var-requires */
import axios from 'axios'
import fs from 'fs'
// eslint-disable-next-line no-undef
const output = process.cwd() + '/' + 'public/locales'

const instance = axios.create({
  baseURL: 'https://script.googleusercontent.com',
  timeout: 60000
})

const getLocalize = async () => {
  return await instance.get('a/macros/blockodyssey.io/echo', {
    params: {
      user_content_key:
        'FRT1_JsaKrmjgWQeIr7py9urDg9FjyPPzD_5Xr2q2DE2lpLNZ1NStydoYAqvWRtPylKq1G6vmP2b4CkUechS3OeH_tN1sxjJOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMi80zadyHLKAbzkbP7LLqfvP8XgReRfE_UQo2hafnxIiIgjbQYf-FrJZx0Va4I1vo1LGZfCCLCGf8m1KyHfpXDkuGd0g-GHO3NvuyO6qdTKfPMnIfuXW8UeTMQ6KAmAGEfCWtm8_7SjZcy6pr-Oj0FQ',
      lib: 'MJ_nNbMn91xwBDK2pLdiYtxjXNC9zkroK'
    }
  })
}

const handleLocalize = async () => {
  console.log('--- START LOCALIZING FROM GOOGLE SHEET ---')
  const response = await getLocalize()
  if (response?.data) {
    const { data } = response
    
    Object.keys(data).forEach((key) => {
      const dir = `${output}/${key}`
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir)
      }
      fs.writeFile(
        `${dir}/common.json`,
        JSON.stringify(data[key], null, 2),
        (err) => {
          if (err) {
            console.error(err)
          }
        }
      )
    })
  }
  console.log(response.data)
  console.log('--- DONE ---')
}

handleLocalize()
