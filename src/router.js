import Vue from 'vue';
import Router from 'vue-router';
import ShowCase from '@/views/ShowCase.vue';
import SignupAuth from '@/views/Week0-SignupAuth.vue';
import TodoList from '@/views/Week1-TodoList.vue';
import DataFilter from '@/views/Week2-DataFilter.vue';
import AdminOrder from '@/views/Week3-AdminOrder.vue';
import ProductGallery from '@/views/Week4-ProductGallery.vue';
import ComicViewer from '@/views/Week5-ComicViewer.vue';
import TyphoonMaria from '@/views/SideQuest-TyphoonMaria.vue';
import Validation from '@/views/Week6-Validation.vue';
import RadioDefense from '@/views/Week7-RadioDefense.vue';
import ParallaxScrolling from '@/views/Week8-ParallaxScrolling.vue';
import SkillTree from '@/views/Week9-SkillTree.vue';

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
    {
      path: '/week5',
      name: 'ComicViewer',
      component: ComicViewer,
    },
    {
      path: '/sidequest',
      name: 'TyphoonMaria',
      component: TyphoonMaria,
    },
    {
      path: '/week6',
      name: 'Validation',
      component: Validation,
    },
    {
      path: '/week7',
      name: 'RadioDefense',
      component: RadioDefense,
    },
    {
      path: '/week8',
      name: 'ParallaxScrolling',
      component: ParallaxScrolling,
    },
    {
      path: '/week9',
      name: 'SkillTree',
      component: SkillTree,
    },
  ]
})
