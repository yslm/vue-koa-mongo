import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/login'
import Register from '@/components/register'

import store from '../store/index'

Vue.use(Router)

//前端路由成面的路由守卫，根据路由来去来做判断

/*const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      meta:{
        requiresAuth: true
      },

    },
    {
      path:'/login',
      name:'login',
      component:Login
    },
    {
      path:'/register',
      name:'register',
      component:Register
    },
    {
      path:'/hello',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
router.beforeEach((from,to,next)=>{
  //先获取token，因为登录成功之后会将token记录在session中
  let token = store.state.token;
  console.log(token,'是啥');
  if(to.meta.requiresAuth){
    //如果有这个属性，则需要检查token
    console.log('需要token');
    if(token){
      //如果有token，那么就
      next()
    }else {
      console.log('没有token');

      //没有token或者token过期，就需要重新登录
      next({
        path: '/login',
        query: { redirect: to.fullPath } // 将刚刚要去的路由path（却无权限）作为参数，方便登录成功后直接跳转到该路由，
        //这一句有没有用还需要验证
      });

    }
  }else {
    console.log('不需要token');
    console.log(to);
    //不需要验证token，那么就直接next
    next();

  }

})

export default router;*/



const router = new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'home',
    component: HelloWorld,
    meta: {
      requiresAuth: true
    }
  },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
    },
  ]
});

//注册全局钩子用来拦截导航
router.beforeEach((to, from, next) => {
  //获取store里面的token
  let token = store.state.token;
  console.log(token);
  //判断要去的路由有没有requiresAuth
  if (to.meta.requiresAuth) {
    console.log(to.meta,'初始进入路由');
    if (token) {
      next();
    } else {
      console.log(to,to.fullPath);

      next({
        path: '/login',
        query: { redirect: to.fullPath } // 将刚刚要去的路由path（却无权限）作为参数，方便登录成功后直接跳转到该路由
      });
    }

  } else {
    next(); //如果无需token,那么随它去吧
  }
});
export default router;

