import Vue from 'vue'
import Router from 'vue-router'
import SoundPlayer from '@/components/SoundPlayer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SoundPlayer',
      component: SoundPlayer
    }
  ]
})
