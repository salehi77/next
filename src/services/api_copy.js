const axios = require('axios')
const instance = axios.create()

let ta = 'ryJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjAyNTIzMjYzLCJqdGkiOiI4YWI2Mjk0MTg5NDc0OGVkOTI0ODUyN2FkN2FhYjcyYiIsInVzZXJfaWQiOjF9.oFKO9jQ6kq4RQeI6-o7cs361WuqpEjSfxLpDTYa6Wqo'
let tf = 'ryJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTYwMjY0ODczOCwianRpIjoiMzQ5YjljYWM3ODlmNGE5N2I2ZmQ2ODFjY2Q5YWU3YTEiLCJ1c2VyX2lkIjoxfQ.llyxdhPQwEWBdFNg_lE0t9c_sptnhTm1m41n_erlmkI'

instance.interceptors.request.use(
  (config) => {

    config.headers['Authorization'] = `Bearer ${ta}`

    return config
  },

  (error) => {
  }
)


instance.interceptors.response.use(
  (response) => {
    return response
  },

  (error) => {



    if (error.response.status === 401 && error.response.data.code === 'token_not_valid') {


      return axios.post('http://localhost:8000/auth/jwt/refresh', { refresh: tf })
        .then((response) => {

          ta = response.data.access

          return instance(error.response.config)

        })
        .catch((error) => {
          return Promise.reject(error)
        })


    }

    return Promise.reject(error)

  })






const getUsers = () => instance.get('http://localhost:8000/auth/users/me', {})
  .then(function (response) {
    console.log('success')
    return response
  })
  .catch(function (error) {
    console.log('fail')
  })

getUsers()
