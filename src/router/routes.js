
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'about', component: () => import('pages/About.vue') },

      { path: 'wisata', component: () => import('pages/Wisata.vue') },
      { path: 'kafe', component: () => import('pages/Kafe.vue') },
      { path: 'kuliner', component: () => import('pages/Kuliner.vue') },
      { path: 'oleholeh', component: () => import('pages/OlehOleh.vue') },
      { path: 'workingspace', component: () => import('pages/WorkingSpace.vue') },

      { path: 'wisata/:id', component: () => import('pages/detail/DetailWisata.vue') },
      { path: 'kafe/:id', component: () => import('pages/detail/DetailKafe.vue') },
      { path: 'kuliner/:id', component: () => import('pages/detail/DetailKuliner.vue') },
      { path: 'oleholeh/:id', component: () => import('pages/detail/DetailOlehOleh.vue') },
      { path: 'workingspace/:id', component: () => import('pages/detail/DetailWorkingSpace.vue') }
    ]
  },

  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
