//统一出口
import { wjjRequest } from '@/service/request'

//创建axios实例

const request_util = new wjjRequest({
  baseURL: process.env.REACT_APP_BASE_URL,
  interceptor: {
    requestOnFulfilled(config) {
      return config
    },
    responseOnFulfilled(res) {
      return res.data
    }
  },
  timeout: 100000
})

export { request_util }
