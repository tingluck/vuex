<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- 使用Home组件 -->
    <!-- <Home></Home> -->
    <!-- 切换路由来显示对应组件 -->
    <!-- <p> -->
    <!-- 声明式导航 -->
    <!-- <router-link to="/home">首页</router-link> -->
    <!-- 一。利用对象给地址栏参数 ，给一个对象设置属性 要加 ：，参数会在地址栏
      在this.$route.query中找参数
      -->
    <!-- <router-link :to="{ path: './mine', query: { name: '张艺兴' } }"
        >我的</router-link
      > -->
    <!-- 二。利用起名，路由规则也要其相应的name，参数不会在地址栏 在this.$route.params中找参数-->
    <!-- <router-link :to="{ name: 'cart', params: { name: '张' } }"
        >购物车</router-link
      > -->
    <!-- tag可以换标签 -->
    <!-- <router-link to="/cartegory" tag='span'>分类</router-link>
    </p>  -->
    <!-- 编程式导航 -->
    <p v-if="$route.path != '/login'">
      <span @click="fn({ path: '/home/'+id })">首页</span>
      <span @click="fn({ path: '/cartegory', query: { name: '张张' } })"
        >分类</span
      >
      <span @click="fn({ name: 'cart', params: { age: 18 } })">购物车</span>
      <span @click="fn({ path: '/mine' })">我的</span>
    </p>
    <!-- 定义路由坑 -->
    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Home from "./views/Home";
export default {
  name: "App",
  data() {
    return {
      id: 100,
    };
  },
  components: {
    // HelloWorld
    // Home, //注册组件
  },
  methods: {
    fn(obj) {
      // 编程式的第一种方式，绑定事件利用$router的path
      // this.$router.push(obj.path)
      // 方式二
      this.$router.push(obj);
      // console.log(this.$router.push(obj));
    },
  },
  created() {
    // console.log(this);
  },
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */

/* 选中样式，vue提供的*/
.router-link-active {
  background: purple;
}
</style>
