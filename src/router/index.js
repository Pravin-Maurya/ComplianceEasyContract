import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/components/Home'
import DataInput from '@/components/DataInput'
import ContractBuilder from '@/components/ContractBuilder'
import GoogleLogin from '@/components/GoogleLogin'
// import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Home',
    //   component: Home
    // },
    {
      path: '/',
      name: 'DataInput',
      component: DataInput
    },
    {
      path: '/contract',
      name: 'ContractBuilder',
      component: ContractBuilder
    },
    {
      path: '/login',
      name: 'GoogleLogin',
      component: GoogleLogin
    }
    // {
    //   path: '/contact',
    //   name: 'Contact',
    //   component: Contact
    // }
  ]
})
