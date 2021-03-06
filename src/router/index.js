import Vue from 'vue'
import VueRouter from 'vue-router'
import { Cookies } from 'quasar'

import routes from './routes'
import axios from 'axios'

Vue.use(VueRouter)

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default function ({ store, ssrContext }) {
  const Router = new VueRouter({
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes,

    // Leave these as they are and change in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE
  })

  Router.beforeEach(function (to, from, next) {
    const cookies = Cookies.parseSSR(ssrContext)
    if (to.matched[0].path === '/admin') {
      // if (!store.state.auth.loggedIn) {
      //   return next('/admin/login')
      // }
      if (!cookies.has('token')) {
        return next('/admin/login')
      } else {
        const csrf = store.state.auth.csrf
        if (!csrf) {
          const token = cookies.get('token')
          axios.get('http://localhost:8000/api/user/getToken', {
            headers: {
              Authorization: 'Bearer ' + token
            }
          }).then(res => {
            store.dispatch('auth/login', { token, csrf: res.data.token })
            return next()
          }).catch(err => {
            cookies.remove('token')
            return next('/admin/login')
          })  
        } else {
          next()
        }
      }
    } else if (to.matched[0].path === '/admin/login') {
      // if (store.state.auth.loggedIn) {
      //   return next('/admin')
      // }
      if (cookies.has('token')) {
        const token = cookies.get('token')
        axios.get('http://localhost:8000/api/user/getToken', {
          headers: {
            Authorization: 'Bearer ' + token
          }
        }).then(res => {
          store.dispatch('auth/login', { token, csrf: res.data.token })
          return next('/admin')
        }).catch(err => {
          cookies.remove('token')
          return next()
        })
      } else {
        next()
      }
    } else {
      next()
    }
  })

  return Router
}
