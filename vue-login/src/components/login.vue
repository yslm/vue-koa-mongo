<template>
  <div class="login">
    <p>这是登录部分</p>
    <p>用户名</p>
    <input type="text" v-model="username">
    <p>密码</p>
    <input type="text" v-model="pwd">
    <br>
    <button @click="login">登录</button>

  </div>

</template>
<script>

  import axios from '../axios'
  export default {
    name:'login',
    data(){
      return{
        username:'',
        pwd:''
      }
    },
    methods:{
      login(){
        //获取用户名和密码，然后发送给后台
        let userInfo={username:this.username,pwd:this.pwd}
        //发送请求了

//        console.log(axios.userLogin);
          axios.userLogin(userInfo).then((res)=>{
            console.log(res);
            //成功，需要将token和username存起来，并且跳转到成功的页面
            let data=res.data;
            if(data.success){
              //登录成功
              let token=data.token;
              let time=data.create_time;
              let username=data.username;
              //存到store中
              this.$store.dispatch('userLogin',token);
              this.$store.dispatch('UserName',username);
              //跳转

              this.$router.replace('HelloWorld');



            }



          }).catch((err)=>{
            console.log(err);
          })


      }
    }
  }
</script>
<style></style>
