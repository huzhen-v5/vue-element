import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// ===================== Pages Components ======================
import Frame from '../components/Frame.vue'
import Hello from '../pages/Hello.vue'
import Login from '../pages/Login.vue'

// ==================== Router registration ====================
export default new Router({
  mode: 'hash',
  routes: [
    {
        path: '/login',
        component: Login
    },
    { 
        path: '/', 
        component: Frame,
        children: [
            {
                path: '/hello',
                component: Hello
            }
        ],
        redirect: '/hello'
    }
  ]
})