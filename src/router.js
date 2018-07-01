import Vue from 'vue';
import Router from 'vue-router';
import ShowCase from '@/views/ShowCase.vue';
import SignupAuth from '@/views/SignupAuth.vue';
import TodoList from '@/views/TodoList.vue';
import DataFilter from '@/views/DataFilter.vue';
import AdminOrder from '@/views/AdminOrder.vue';
import ProductGallery from '@/views/ProductGallery.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ShowCase',
      component: ShowCase,
    },
    {
      path: '/week0',
      name: 'SignupAuth',
      component: SignupAuth,
    },
    {
      path: '/week1',
      name: 'TodoList',
      component: TodoList,
    },
    {
      path: '/week2',
      name: 'DataFilter',
      component: DataFilter,
    },
    {
      path: '/week3',
      name: 'AdminOrder',
      component: AdminOrder,
    },
    {
      path: '/week4',
      name: 'ProductGallery',
      component: ProductGallery,
    },
  ]
})
