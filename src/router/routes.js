
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'about', component: () => import('pages/About.vue') },
      { path: 'search', component: () => import('pages/Search.vue') },

      { path: 'wisata', component: () => import('pages/Wisata.vue') },
      { path: 'kafe', component: () => import('pages/Kafe.vue') },
      { path: 'kuliner', component: () => import('pages/Kuliner.vue') },
      { path: 'oleholeh', component: () => import('pages/OlehOleh.vue') },
      { path: 'workingspace', component: () => import('pages/WorkingSpace.vue') },

      { path: 'wisata/:slug', component: () => import('pages/detail/DetailWisata.vue') },
      { path: 'kafe/:slug', component: () => import('pages/detail/DetailKafe.vue') },
      { path: 'kuliner/:slug', component: () => import('pages/detail/DetailKuliner.vue') },
      { path: 'oleholeh/:slug', component: () => import('pages/detail/DetailOlehOleh.vue') },
      { path: 'workingspace/:slug', component: () => import('pages/detail/DetailWorkingSpace.vue') }
    ]
  },

  {
    path: '/admin',
    component: () => import('layouts/AdminLayout.vue'),
    children: [
      { path: '', component: () => import('pages/admin/Wisata.vue') },
      { path: 'wisata', component: () => import('pages/admin/Wisata.vue') },
      { path: 'kafe', component: () => import('pages/admin/Kafe.vue') },
      { path: 'kuliner', component: () => import('pages/admin/Kuliner.vue') },
      { path: 'oleholeh', component: () => import('pages/admin/OlehOleh.vue') },
      { path: 'workingspace', component: () => import('pages/admin/WorkingSpace.vue') }
    ]
  },

  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
