import Vue from 'vue';
import Router from 'vue-router';
import ShowCase from '@/views/ShowCase.vue';
import SignupAuth from '@/views/SignupAuth.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'showCase',
      component: ShowCase,
    },
    {
      path: '/week0',
      name: 'signupAuth',
      component: SignupAuth,
    },
  ]
})
