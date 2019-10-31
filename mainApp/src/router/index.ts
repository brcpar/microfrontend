import Vue from 'vue';
import VueRouter from 'vue-router';
import LeadList from '../views/LeadList.vue';
import ThisPlaceView from '../views/ThisPlaceView.vue';
import ThatPlaceView from '../views/ThatPlaceView.vue';
import HereView from '../views/HereView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/main',
    name: 'main',
    component: LeadList,
  },
  {
    path: '/main/this',
    name: 'this',
    component: ThisPlaceView,
  },
  {
    path: '/main/that',
    name: 'that',
    component: ThatPlaceView,
  },
  {
    path: '/main/here',
    name: 'here',
    component: HereView,
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  // },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
