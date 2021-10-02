import VueRouter from 'vue-router'
import Login from '@/pages/Login'
import Index from '@/pages/Index'

// import Home from '@/pages/Home'
// import News from '@/pages/News'
// import Message from '@/pages/Message'
// import MsgDetail from '@/pages/MsgDetail'
// import Newsdetail from '@/pages/Newsdetail'

const router = new VueRouter({
    mode:'history',
    routes:[
        {   path: '/',
            redirect: '/adminlogin' 
        },
        {
            path:'/adminlogin',
            component:Login,
            meta:{
                title:'后台管理登录界面'
            }
        },
        {
            path:'/adminindex',
            component:Index,
            meta:{
                title:'后台首页',
                isAuth:false
            }
        }
    ]
})

// 全局前置路由守卫——初始化的时候被调用、每次路由切换的时候被调用
// router.beforeEach((to,from,next)=>{
    // console.log('前置路由守卫',to,from)
    // 判断是否需要校验 校验meta中的isAuth
    // if(to.meta.isAuth){
    //     if(localStorage.getItem("num")==1){
    //         next();
    //     }
    //     else{
    //         alert("无权查看")
    //     }
    // }else{
    //     next()
    // }
// })

// 全局后置路由守卫——初始化的时候被调用、每次路由切换的时候被调用
router.afterEach((to,from)=>{
    // console.log('后置',to,from)
    document.title = to.meta.title
})
export default router
