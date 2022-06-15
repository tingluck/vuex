import Vue from 'vue'
// 存放
// 引入下载路由
import VueRouter from 'vue-router'
// 使用
Vue.use(VueRouter)
import Home from '@/views/Home';
import Mine from '@/views/Mine';
import Cart from '@/views/Cart';
import Cartegory from '@/views/Cartegory';
import Login from '@/views/Login';
import Notfind from '@/views/Notfind' //404路由：地址栏不对的
import User1 from '@/views/User1'; //二级路由:要有二级坑，在哪定义的在那个页面写坑
import User2 from '@/views/User2'
// 1.创建路由规则
const routes = [{
        path: '/',
        redirect: '/home' //路由重定向：自动回一个页面，默认/就是home页
    }, {
        path: '/home/:id?',
        component: Home,
        name: 'home'
    }, {
        path: '/login',
        component: Login
    },
    // {path:'/mine',redirect:'/mine/user1'},//页面直接直接显示一级路由和二级路由：方法1
    {
        path: '/mine',
        component: Mine,
        redirect: '/mine/user1', //页面直接直接显示一级路由和二级路由：方法2
        name: 'mine',
        children: [{ //二级路由不能加 / 否则会认为是一级路由  /代表是根路径，
            path: 'user1',
            component: User1
        }, {
            path: 'user2',
            component: User2
        }]
    },
    {
        path: '/cart',
        component: Cart,
        name: 'cart',
        // beforeEnter: (to, from, next) => {//路由独享守卫：只针对这一个组件
        //     //进入到当前路由之前
        //     console.log(from);
        //     if (from.path == '/mine/user1') { //只有mine可以跳转
        //         next()
        //     } else {         //其他都不可以
        //         next(false)
        //     }
        // }
    },
    {
        path: '/cartegory',
        component: Cartegory,
        name: 'cartegory'
    },
    {
        path: '*',
        component: Notfind,
        name: 'notfind' //404配置
    }
]
// 2将路由规则传个路由对象
// 注意：在vue中有2种路由模式：hash history 默认hash模式地址栏有#  在路由的mode中设置
// hash模式，通过监听url地址中hash值的改变，来显示对应的组件
// history需要后端配置 否则出现404
const router = new VueRouter({
    mode: 'history', //设置当前路由模式为history 需要后端配置，否则直接访问地址有404
    routes,

})
// 路由重复点击报错：3.0有报错，需要，但是不影响操作。4.X没有，不需要  写在router  
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch((err) => err);
};
// 添加路由全局前置守卫：定义当前路由页面A->B，判断满足即放行，
// router.beforeEach((to, from, next) => {
//     //to下一个路由对象from上一个，next放行函数
//     // next();
//     // console.log(to,next,from);
//     // 根据条件判断，登陆放行
//     const username = localStorage.getItem('username');
//     // if (username) {
//     //     next()
//     // } else 
//     if (!username && to.path != '/login') {
//         // 未登录且页面不是登录页，回到登录页
//         next('/login')
//     } else {
//         // 未登录，就跳转登录页
//         next()
//     }
// })
// 3.将路由对象挂载根实例，这样每个组件的实例对象都能访问根实例规则
//导出路由对象
export default router