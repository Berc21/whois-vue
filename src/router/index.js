import Vue from 'vue'
import Router from 'vue-router'
import SearchDomain from '@/components/SearchDomain'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SearchDomain',
      component: SearchDomain
    }
  ]
})
