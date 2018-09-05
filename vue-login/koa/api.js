const router=require('koa-router')();



//引入数据库操作方法
const UserController = require('../server/controller/user.js');
const checkToken =require('../server/token/checkToken');

router.post('/login',UserController.Login);
router.post('/register',UserController.Reg);
router.get('/user',checkToken,UserController.GetAllUsers);//相当于这是几个回调函数


module.exports=router.routes();
