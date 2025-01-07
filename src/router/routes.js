const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'set-goal', component: () => import('pages/SetGoal.vue') },
      { path: 'track-progress', component: () => import('pages/TrackProgress.vue') },
      { path: 'diet-plan', component: () => import('pages/DietPlan.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
