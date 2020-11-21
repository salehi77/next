import axios from 'axios'
import Router from 'next/router'
axios.defaults.baseURL = process.env.API_URL
const instance = axios.create()



instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access_token') || 'random_string'
    config.headers['Authorization'] = `Bearer ${token}`
    return config
  },
  (error) => { }
)


instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401 && error.response.data.code === 'token_not_valid') {
      let refresh = localStorage.getItem('refresh_token') || 'random_string'
      return axios.post('/auth/jwt/refresh', { refresh })
        .then((response) => {
          localStorage.setItem('access_token', response.data.access)
          return instance(error.response.config)
        })
        .catch((error) => {
          if (error.response.status === 401 && error.response.data.code === 'token_not_valid') {
            localStorage.removeItem('access_token')
            localStorage.removeItem('refresh_token')
            Router.push({
              pathname: '/signin',
              query: { next: Router.router.asPath },
            })
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

