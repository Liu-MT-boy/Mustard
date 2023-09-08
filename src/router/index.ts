import { createRouter, createWebHistory } from 'vue-router'
import virtuarlist from '../views/virtuarlist.vue'
import Login from '../pages/login/index.vue'
import notFount from '../pages/404/index.vue'

// 设置路由
const routes = [
  {
    path: '/',
    name: 'virtuarlist',
    component: virtuarlist
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/:catchAll(.*)',
    name: '/404',
    component: notFount
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

const isAuthenticated = () => {
  return false
}

// 添加全局前置守卫
router.beforeEach((to, from, next) => {
  console.log(to);
  
  // 在导航到路由之前执行一些逻辑
  if (to.name === 'about' && !isAuthenticated()) {
    // 如果未认证且要跳转到 'about' 路由，则重定向到登录页
    next('/');
  } else {
    // 否则继续导航
    next();
  }
});

export default router
