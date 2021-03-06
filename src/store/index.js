import Vue from 'vue'
import Vuex from 'vuex'

// import example from './module-example'
import wisata from './wisata'
import kafe from './kafe'
import workingspace from './workingspace'
import kuliner from './kuliner'
import oleholeh from './oleholeh'
import search from './search'
import auth from './auth'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      wisata,
      kafe,
      workingspace,
      kuliner,
      oleholeh,
      search,
      auth
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING
  })

  return Store
}
