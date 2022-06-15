import Vue from 'vue'
import App from './App.vue'
import router from '@/router' //index文件默认为第一文件
import store from '@/store'
//3将store挂载绑定根实例上，每个组件都会访问
new Vue({
  router,
  store,
  // axios,
  render: h => h(App),
}).$mount('#app')