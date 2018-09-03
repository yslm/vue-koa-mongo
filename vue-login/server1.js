/*
* 这里面就是server的逻辑部分了，需要用到koa ,koa-baseparser
*
* */

const Koa=require('koa'),
      router=require('koa-router')(),
      bodyParser=require('koa-bodyparser');


      const app=new Koa();
      //配置bodyparser中间件
      app.use(bodyParser());

      //下面就都是路由了

//引入数据库操作方法
const UserController = require('./server/controller/user.js');

  router.post('/api/login',UserController.Login);
  router.post('/api/register',UserController.Reg);

//加载路由中间件
app.use(router.routes()).use(router.allowedMethods());

app.listen(8889, () => {
  console.log('The server is running at http://localhost:' + 8889);
});
