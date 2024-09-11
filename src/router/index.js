import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/Home.vue'),
    children:[
      {
        path: '/dashboard',
        name: 'dashboard',
        component: function (){ return  import('../views/Dashboard.vue')}
      },
      {
        path: '/course',
        name: 'course',
        component: () => import('../views/Course.vue')
      },
      {
        path: '/student',
        name: 'student',
        component: () => import('../views/Student.vue')
      },
      {
        path: '/teacher',
        name: 'teacher',
        component: () => import('../views/Teacher.vue')
      },
      {
        path: '/ratings',
        name: 'ratings',
        component: () => import('../views/Rating.vue')
      },
      {
        path: '/issue',
        name: 'issue',
        component: () => import('../views/Issue.vue')
      },
      {
        path: '/attendance',
        name: 'attendance',
        component: () => import('../views/Attendance.vue')
      },
      {
        path: '/section',
        name: 'section',
        component: () => import('../views/Section.vue')
      },
      {
        path: '/degree',
        name: 'degree',
        component: () => import('../views/Degree.vue')
      },
      {
        path: '/management',
        name: 'management',
        component: () => import('../views/Management.vue')
      },
      {
        path: '/assignament',
        name: 'assignament',
        component: () => import('../views/Assignament.vue')
      },
    ]
  },
  
]

const router = new VueRouter({
  mode: "history",
  routes
})

router.beforeEach((to, from, next) => {
  const publicPages = ['/login'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');
  if (authRequired && !loggedIn) {
    next('/login');
  } else {
    next();
  }
});

export default router
