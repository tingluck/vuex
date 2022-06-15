<template>
<!-- 映射方式 -->
  <div>
    <p>我的
      
    </p>
    <!-- 定义二级路由的坑 -->
    <router-view></router-view>
     <p>store中user模块age：{{username}}--{{age}}</p>
    <p>计算属性：{{tentions}}</p>
      <p>
      <!-- 同步 -->
      <button @click='addAge'>age+1</button>
        <button @click='addAgeStep(10)'>age+10</button>
        <!-- 异步 -->
        <button @click='addAsync'>age+1</button>
        <button @click='addsAsync(10)'>age+10</button>
    </p>
  </div>
</template>

<script>
// 引入映射函数
import {mapState,mapGetters, mapActions,mapMutations} from "vuex";
export default {
  name: "MyclassMine",

  data() {
    return {};
  },
  created() {
    // console.log(this.$route.query);
  },computed:{
    ...mapState('user',['username','age']),
    ...mapGetters('user',['tentions'])
  },methods:{
    ...mapMutations('user',['addAge','addAgeStep']),
    ...mapActions('user',['addAsync','addsAsync'])
  }
};
</script>

<style lang="scss" scoped>
</style>