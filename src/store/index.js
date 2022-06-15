import axios from 'axios'
import Vue from 'vue'
// Vue.config.productionTip = false
// vuex的使用步骤
//1导入路由实例对象，文件夹中的index的文件，默认为默认加载的文件
import Vuex from 'vuex'
Vue.use(Vuex)
//导入user模块
import user from './modules/user'
import shop from './modules/shop'
//2创建store实例对象
const store = new Vuex.Store({
  state: { //定义全局的数据，这样每个组件都能使用修改state数据
    count: 0
  },
  mutations: { //存放所有同步让vue调控中也数字变，不能写异步
    incream(state) {
      state.count++
    },
    increams(state, step) { //加指定的数字
      state.count += step
    }
  },
  actions: { //异步，通过调用的上面的方法修改值，既可以写同部也可以写异步方法
    add(context) {
      context.commit('incream')
    },
    addes(context) {
      // context.commit('increams', step)
      axios.get('https://www.fastmock.site/mock/565243b100839f9e9020abf74449657b/api/random').then(res => {
        // console.log(res);
        context.commit('increams', res.data.data)
      })
    }
  },
  getters: { //相当于store计算属性，对state中数据进行加工处理，创建一个新数组
    double(state) {
      return state.count * 2
    }
  },modules:{
    user:user,
    shop:shop//模块名
  }
})
export default store