/*
* 这里面放操作数据库的类容，这里使用mongoose来操作数据库
* */

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/vue-login1');

let db = mongoose.connection;
// 防止Mongoose: mpromise 错误
mongoose.Promise = global.Promise;

db.on('error', function(){
  console.log('数据库连接出错！');
});
db.on('open', function(){
  console.log('数据库连接成功！');
});
//这些都是固定套路


//声明schema,就是声明好数据格式
const userSchema = mongoose.Schema({
  username: String,
  password: String,
  // recheck: String,
  token: String,
  create_time: Date
});
//根据schema生成model
const model = {
  User: mongoose.model('User', userSchema)
};

module.exports = model;
