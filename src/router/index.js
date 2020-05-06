import VueRouter from 'vue-router'
import Vue from 'vue'

//懒加载
const Home = () => import('../views/home/Home')
const Catgroy = () => import('../views/categroy/Categroy')
const Cart = () => import('../views/cart/Cart')
const Profile = () => import('../views/profile/Profile')



//安装插件
Vue.use(VueRouter)
//创建路由对象
const routes = [
  {
    path: '',
    redirect:'/home'
  },
  {
    path:'/home',
    component: Home
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/categroy',
    component: Catgroy
  }



  ]
const router = new VueRouter({
  routes,
  mode:'history'
})

export default router



