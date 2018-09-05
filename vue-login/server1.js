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
const checkToken =require('./server/token/checkToken');
      //下面就都是路由了

//引入数据库操作方法
const UserController = require('./server/controller/user.js');

  // router.post('/api/login',UserController.Login);
  // router.post('/api/register',UserController.Reg);
  // router.get('/api/register',checkToken,UserController.GetAllUsers);


  //koa-router路由可以配置父子路由，顺序是，先子后父，

const api=require('./koa/api');

router.use('/api',api).use(router.allowedMethods())



//加载路由中间件
app.use(router.routes()).use(router.allowedMethods());

app.listen(8889,'192.168.50.73',() => {
  console.log('The server is running at http://localhost:' + 8889);
});
