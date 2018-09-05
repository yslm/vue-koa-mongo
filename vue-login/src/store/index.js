//这里面就是vuex的内容了

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state:{
    //这里面需要存储用户名以及token
    token:window.sessionStorage.getItem('token'),
    username:''
  },
  mutations:{
    //需要几个方法来操作token，包括登录时的记录存储token，登出时的销毁token，以及记录用户名

    LOGIN(state,data){
      state.token=data;//这个data就是外面传递进来的token载荷
      window.sessionStorage.setItem('token',data);
    },

    //登出
    LOGOUT(state,data){
      //需要销毁token
      window.sessionStorage.removeItem('token');
      state.token=null

    },

    USERNAME: (state, data) => {
      //把用户名存起来
      state.username = data;
      window.sessionStorage.setItem('username', data);
    }


  },
  actions:{
    userLogin({commit},data){
      commit('LOGIN',data)
    },

    //登出
    userLogout({commit},data){
      commit('LOGOUT',data)
    },
    UserName({ commit }, data){
      commit('USERNAME', data);
    }

  }


})

