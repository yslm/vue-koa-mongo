<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

  </div>
</template>

<script>
  import axios from '../axios'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created(){
    //这里需要在查询一次。
    axios.getUser().then((res)=>{

      console.log(res);
      if(res.status === 401){
        //不成功跳转回登录页
        this.$router.push('/login');
        //并且清除掉这个token
        this.$store.dispatch('UserLogout');
      }else{
        //成功了就把data.result里的数据放入users，在页面展示
        this.users = res.data.result;
      }



    }).catch((err)=>{
      console.log(err);
    })

  },
  methods:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
