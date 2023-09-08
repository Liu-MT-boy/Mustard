import axios from 'axios'

// 处理  类型“AxiosResponse<any, any>”上不存在属性“errorinfo”。ts(2339) 脑壳疼！关键一步。
declare module 'axios' {
  interface AxiosResponse<T = any> {
    errorinfo: null
    // 这里追加你的参数
  }
  export function create(config?: AxiosRequestConfig): AxiosInstance
}

// 创建一个 Axios 实例，可以配置默认参数
const instance = axios.create({
  baseURL: '', // 根据后端api地址配置
  timeout: 5000, // 请求超时时间，单位毫秒
  headers: {
    'Content-Type': 'application/json' // 可根据需要设置请求头
  }
})

// 请求拦截器：在发送请求之前做一些处理，比如添加认证信息等
instance.interceptors.request.use(
  (config) => {
    console.log(config)
    // 在这里可以添加认证信息、token等
    // config.headers['Authorization'] = 'Bearer ' + token;
    // 如果是登录接口，直接通过
    if (config.url === '/api/login') {
      return config
    } else {
      // 如果不是登录接口，验证登录信息
      return config
    }
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应拦截器：在收到响应之后做一些处理，比如处理错误信息等
instance.interceptors.response.use(
  (response) => {
    // 在这里可以处理响应数据，如解析 JSON 等
    return response.data
  },
  (error) => {
    // 在这里可以处理请求错误，比如返回特定的错误信息
    return Promise.reject(error)
  }
)

export default instance
