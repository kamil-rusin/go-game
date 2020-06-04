import axios from 'axios'
import queryString from 'query-string'

export const host = `https://jsonplaceholder.typicode.com`

const customAxios = axios.create({
  baseURL: host,
  timeout: 5000
})

const createApiUrl = (pathArr, query) => {
  const stringified = queryString.stringify(query)
  let queryUrl = `${host}/${pathArr.join('/')}`
  if (stringified.length) queryUrl += '?' + stringified
  return queryUrl
}

const api = {
  axios,
  getTouch() {
    return customAxios({
      requestId: 'getTouch',
      method: 'get',
      url: createApiUrl(['todos', '1'])
    })
  }
}

export default api
