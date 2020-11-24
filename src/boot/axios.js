import axios from 'axios'

import { Loading } from 'quasar'

export default async ({
  // app,
  Vue
}) => {
  axios.defaults.baseURL = 'http://localhost:8000'

  axios.interceptors.request.use(await function (config) {
    // default options
    Loading.show()

    // config.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token') //store.getters[credentials].token;
    config.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
    config.headers.post['Content-Type'] = 'multipart/form-data'
    config.headers.post['Content-Type'] = 'application/json'
    // config.headers.post['Content-Type'] = 'application/pdf';

    return config
  }, await function (error) {
    return Promise.reject(error)
  })

  axios.interceptors.response.use(await function (response) {
    // default options
    Loading.hide()

    return response
  }, await function (error) {
    // default options
    Loading.hide()

    return Promise.reject(error)
  })

  Vue.prototype.$axios = axios
}
