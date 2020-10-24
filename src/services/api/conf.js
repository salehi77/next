import axios from 'axios'
import router from 'next/router'
axios.defaults.baseURL = process.env.API_URL
const instance = axios.create()



instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access_token')
    config.headers['Authorization'] = `Bearer ${token}`
    return config
  },
  (error) => { }
)


instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401 && error.response.data.code === 'token_not_valid') {
      let refresh = localStorage.getItem('refresh_token')
      return axios.post('/auth/jwt/refresh', { refresh: refresh })
        .then((response) => {
          localStorage.setItem('access_token', response.data.access)
          return instance(error.response.config)
        })
        .catch((error) => {
          if (
            (error.response.status === 401 && error.response.data.code === 'token_not_valid')
            ||
            (error.response.status === 400 && error.response.data.refresh)
          ) {
            localStorage.removeItem('access_token')
            localStorage.removeItem('refresh_token')
            router.push('/signin')
          }
          else {
            return Promise.reject(error)
          }
        })
    }
    return Promise.reject(error)
  })



export { axios }
export { instance }

