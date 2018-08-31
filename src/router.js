import Vue from 'vue';
import Router from 'vue-router';
import ShowCase from '@/views/ShowCase.vue';
// import SignupAuth from '@/views/Week0-SignupAuth.vue';
// import TodoList from '@/views/Week1-TodoList.vue';
// import DataFilter from '@/views/Week2-DataFilter.vue';
// import AdminOrder from '@/views/Week3-AdminOrder.vue';
// import ProductGallery from '@/views/Week4-ProductGallery.vue';
// import ComicViewer from '@/views/Week5-ComicViewer.vue';
// import TyphoonMaria from '@/views/SideQuest-TyphoonMaria.vue';
// import Validation from '@/views/Week6-Validation.vue';
// import RadioDefense from '@/views/Week7-RadioDefense.vue';
// import ParallaxScrolling from '@/views/Week8-ParallaxScrolling.vue';
// import SkillTree from '@/views/Week9-SkillTree.vue';

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
      component: () => import('@/views/Week0-SignupAuth.vue'),
    },
    {
      path: '/week1',
      name: 'TodoList',
      component: () => import('@/views/Week1-TodoList.vue'),
    },
    {
      path: '/week2',
      name: 'DataFilter',
      component: () => import('@/views/Week2-DataFilter.vue'),
    },
    {
      path: '/week3',
      name: 'AdminOrder',
      component: () => import('@/views/Week3-AdminOrder.vue'),
    },
    {
      path: '/week4',
      name: 'ProductGallery',
      component: () => import('@/views/Week4-ProductGallery.vue'),
    },
    {
      path: '/week5',
      name: 'ComicViewer',
      component: () => import('@/views/Week5-ComicViewer.vue'),
    },
    {
      path: '/sidequest',
      name: 'TyphoonMaria',
      component: () => import('@/views/SideQuest-TyphoonMaria.vue'),
    },
    {
      path: '/week6',
      name: 'Validation',
      component: () => import('@/views/Week6-Validation.vue'),
    },
    {
      path: '/week7',
      name: 'RadioDefense',
      component: () => import('@/views/Week7-RadioDefense.vue'),
    },
    {
      path: '/week8',
      name: 'ParallaxScrolling',
      component: () => import('@/views/Week8-ParallaxScrolling.vue'),
    },
    {
      path: '/week9',
      name: 'SkillTree',
      component: () => import('@/views/Week9-SkillTree.vue'),
    },
    {
      path: '*',
      name: 'ShowCase',
      component: ShowCase,
    },
  ]
})
