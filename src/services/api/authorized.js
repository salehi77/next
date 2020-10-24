import { instance } from './conf'


export default {
  me: (values) => instance.get('/auth/users/me/')
    .then((res) => {
      console.log(res)
    })
    .catch((err) => Promise.reject(err)),
}
