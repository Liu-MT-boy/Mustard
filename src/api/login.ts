import request from './request'

// 封装具体的 API 请求方法
export const loginPost = (params: object) => {
  return request.post('/api/login', params)
}

export const getUser = () => {
  return request.get(`/api/users`)
}
