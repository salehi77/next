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




export default {
  signin: (values) => axios.post('/auth/jwt/create/', { ...values })
    .then(({ data }) => {
      localStorage.setItem('access_token', data.access)
      localStorage.setItem('refresh_token', data.refresh)
    })
    .catch((err) => Promise.reject(err)),

  signup: (values) => axios.post('/auth/users/', { ...values })
    .then((res) => {
      console.log(res)
    })
    .catch((err) => Promise.reject(err)),

  activation: (values) => axios.post('/auth/users/activation/', { ...values })
    .then((res) => {
      console.log(res)
    })
    .catch((err) => Promise.reject(err)),

  resend_activation: (values) => axios.post('/auth/users/resend_activation/', { ...values })
    .then((res) => {
      console.log(res)
    })
    .catch((err) => Promise.reject(err)),

  reset_password: (values) => axios.post('/auth/users/reset_password/', { ...values })
    .then((res) => {
      console.log(res)
    })
    .catch((err) => Promise.reject(err)),

  reset_password_confirm: (values) => axios.post('/auth/users/reset_password_confirm/', { ...values })
    .then((res) => {
      console.log(res)
    })
    .catch((err) => Promise.reject(err)),


  // Validate Token

  validateToken: () => {
    let token = localStorage.getItem('access_token')
    return axios.post('/auth/jwt/verify/', { token })
      .then((response) => response)
      .catch((error) => {
        if (
          (error.response.status === 401 && error.response.data.code === 'token_not_valid')
          ||
          (error.response.status === 400 && error.response.data.token)
        ) {
          let refresh = localStorage.getItem('refresh_token')
          return axios.post('/auth/jwt/refresh', { refresh })
            .then((response) => {
              localStorage.setItem('access_token', response.data.access)
              return response
            })
            .catch((error) => {
              localStorage.removeItem('access_token')
              localStorage.removeItem('refresh_token')
              return Promise.reject(error)
            })
        }
        return Promise.reject(error)
      })
  },


  // Authorized

  me: (values) => instance.get('/auth/users/me/')
    .then((res) => {
      console.log(res)
    })
    .catch((err) => Promise.reject(err)),

}


