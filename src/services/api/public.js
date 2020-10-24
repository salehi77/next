import { axios } from './conf'


const authAPI = {
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
}



export default {
  ...authAPI,


  categoryList: () => axios.get('/shop/cat/')
    .then(({ data }) => {
      return data
    })
    .catch((err) => Promise.reject(err)),
}