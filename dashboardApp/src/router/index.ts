import Vue from 'vue'
import VueRouter from 'vue-router'
import BrokerView from '../views/broker.vue'
import AgentView from '../views/agent.vue'
import TeamView from '../views/team.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/dashboard',
    component: TeamView 
  },
  {
    path: '/dashboard/team',
    component: TeamView 
  },  
  {
    path: '/dashboard/broker',
    component: BrokerView 
  },
  {
    path: '/dashboard/agent',
    component: AgentView 
  },  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router
