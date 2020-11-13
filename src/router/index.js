import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'Home',
  component: () => import('../views/Home.vue'),
  children: [{
    path: '',
    name: 'rooms',
    component: () => import('../components/dashboard/Dashboard.vue')
  },
  {
    path: 'rooms/:id',
    name: 'room',
    component: () => import('../components/room/Room.vue')
  }
  ]
},
{
  path: '/login',
  name: 'Login',
  component: () => import('../components/UserLogin.vue')
},
{
  path: '/game-over',
  name: 'Game Over',
  component: () => import('../components/GameOver.vue')
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
