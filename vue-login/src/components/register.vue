<template>
  <div class="register">
    <p>这是注册部分</p>

    <p>用户名</p>
    <input type="text" v-model="username">
    <p>密码</p>
    <input type="text" v-model="pwd">
    <br>
    <button @click="register">注册</button>


  </div>


</template>
<script>
  import axios from '../axios'
  export default {
    name:'register',
    data(){
      return{
        username:'',
        pwd:''
      }
    },
    methods:{
      //点击注册，需要收集到信息，然后发送给后台
      register(){
        let userInfo={username:this.username,pwd:this.pwd}
        //发送请求

        axios.userRegister(userInfo).then((res)=>{
          console.log(res);
        }).catch((err)=>{
          console.log(err);
        })
      }
    }
  }
</script>
<style></style>
