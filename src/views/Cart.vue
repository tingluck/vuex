<template>
<!-- 使用标准语法 -->
  <div>购物车
    <!-- 操作vuex中子模块user数据 -->
    <p>store中user模块age：{{$store.state.user.username}}--{{$store.state.user.age}}</p>
    <p>计算属性：{{$store.getters['user/tentions']}}</p>
    <p>
      <!-- 同步 -->
      <button @click='addAgefn'>age+1</button>
        <button @click='addAgefn1'>age+10</button>
        <!-- 异步 -->
        <button @click='addAgefn2'>age+1</button>
        <button @click='addAgefn3'>age+10</button>
    </p>
  </div>
</template>

<script>
export default {
  name: "MyclassCart",

  data() {
    return {};
  },
  created() {
//     console.log(this);
//    console.log(this.$route.params);
  },
  methods:{
    addAgefn(){
      this.$store.commit('user/addAge')//调试台里也加了，命名空间
    }
    , addAgefn1(){
      this.$store.commit('user/addAgeStep',10)//调试台里也加了，命名空间
    },addAgefn2(){
      this.$store.dispatch('user/addAsync')//调试台里也加了，命名空间
    },
    addAgefn3(){
      this.$store.dispatch('user/addsAsync',10)//调试台里也加了，命名空间
    }
  }
};
</script>

<style lang="scss" scoped>
</style>