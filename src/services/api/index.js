import authorized from './authorized'
import publicAPI from './public'
import { axios } from './conf'


export default {

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

  ...authorized,

  ...publicAPI

}


