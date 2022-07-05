import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/',
    name: 'Layout',
    component: () => import('../layout'),
    redirect: '/profile',
    children: [
      {
        path: '/profile',
        name: 'profile',
        component: () => import('../views/profile'),
        meta: {
          title: '首页',
          icon: 'personnel'
        }
      },
      {
        path: '/user',
        name: 'user',
        component: () => import('../views/user/index.vue'),
        meta: {
          title: '系统管理',
          icon: 'personnel'
        }
      },
      {
        path: '/user/manage',
        name: 'manage',
        component: () => import('../views/user/manage.vue'),
        meta: {
          title: '用户管理',
          icon: 'article-create'
        }
      },
      {
        path: '/user/role',
        name: 'role',
        component: () => import('../views/user/role.vue'),
        meta: {
          title: '角色管理',
          icon: 'role'
        }
      },
      {
        path: '/user/permission',
        name: 'permission',
        component: () => import('../views/user/permission.vue'),
        meta: {
          title: '角色管理',
          icon: 'permission'
        }
      },
      {
        path: '/article',
        name: 'article',
        component: () => import('../views/article/index.vue'),
        meta: {
          title: '系统管理',
          icon: 'article'
        }
      },
      {
        path: '/article/ranking',
        name: 'ranking',
        component: () => import('../views/article/ranking.vue'),
        meta: {
          title: '数字字典',
          icon: 'article-ranking'
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
