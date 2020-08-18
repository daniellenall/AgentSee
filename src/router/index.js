import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Signup from '../views/Signup.vue';
import AgentList from '../views/AgentList.vue';
import EditAgent from '../views/EditAgent'
import { fb } from '../firebase';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/agents',
    name: 'AgentList',
    component: AgentList,
    meta: { requiresAuth: true },

  },
  {
    path: 'edit/:id',
    name: 'Edit',
    component: EditAgent
  }
];

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth);
  const currentUser = fb.auth().currentUser

  if (requiresAuth && !currentUser) {
    next({ path: '/login', query: { redirect: to.fullPath } });
  } else if (requiresAuth && currentUser) {
    next();
  } else {
    next();
  }
}
);

export default router
