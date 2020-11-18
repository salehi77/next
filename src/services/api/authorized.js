import { instance } from './conf'


export default {
  me: (values) => instance.get('/auth/users/me/')
    .then(({ data }) => data)
    .catch((err) => Promise.reject(err)),
}
