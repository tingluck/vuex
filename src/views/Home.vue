<template>
<!-- 使用标准语法操作一级模块 -->
  <div>
    <p>我是首页</p>
    <button @click="$router.go(-1)">返回上一页</button>
    <p>store中的{{ $store.state.count }}</p>
    <p>store中的计算属性{{$store.getters.double}}</p>
    <button @click="fn">+1</button>
    <button @click="fn1">+10</button>
      <button @click="fn2">+1异步</button>
       <button @click="fn3">+n异步</button>
  </div>
</template>

<script>
export default {
  name: "MyclassHome",

  data() {
    return {};
  },
  methods: {
    fn() {
      //   this.$store.state.count++;
      this.$store.commit("incream"); //调用main.js中的方法
    },
    fn1() {
      this.$store.commit("increams", 10);
    },
    fn2(){
         this.$store.dispatch('add')
    },
     fn3(){
         this.$store.dispatch('addes',10)
    }

  },
  created() {
    console.log(this.$store.state.count);
  },
  //   beforeRouteEnter(to, from, next) {
  //     //组件内的守卫：直接在组件内
  //     // 在渲染该组件的对应路由被验证前调用
  //     // 不能获取组件实例 `this` ！可用箭头函数传vm
  //     // 因为当守卫执行时，组件实例还没被创建！
  //     // next(vm=>{
  //     //     console.log(vm);
  //         //   if (from.path == '/cart') { //只有mine可以跳转
  //         //         next()
  //         //     } else {         //其他都不可以
  //         //         next(false)
  //         //     }
  //     // });
  //     // console.log(this);

  //   },
  //   beforeRouteUpdate(to, from, next) {
  //     // 在当前路由改变，但是该组件被复用时调用
  //     // 举例来说，对于一个带有动态参数的路径 `/users/:id`，在 `/users/1` 和 `/users/2` 之间跳转的时候，
  //     // 由于会渲染同样的 `UserDetails` 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
  //     // 因为在这种情况发生的时候，组件已经挂载好了，导航守卫可以访问组件实例 `this`
  //     next();
  //     //一般可以用于路由参数变化，进行
  //     console.log('login');
  //   },
  //   beforeRouteLeave(to, from, next) {
  //     // 在导航离开渲染该组件的对应路由时调用
  //     // 与 `beforeRouteUpdate` 一样，它可以访问组件实例 `this`
  //   },
};
</script>

<style lang="scss" scoped>
</style>