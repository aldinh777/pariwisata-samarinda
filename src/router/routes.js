
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
      { path: 'workingspace', component: () => import('pages/WorkingSpace.vue') }
    ]
  },

  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
