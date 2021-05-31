import requestWrapper from './wrapper'
import ls from 'local-storage'

export const callApi = (request, vendor) => {
  if (!vendor) {
    const authToken = ls.get('TOKEN')
    return request(requestWrapper(authToken))
  }
  return request(requestWrapper())
}

export default callApi
