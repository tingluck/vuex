<template>
  <div>
    分类
    <p>store中的count:{{ count }}</p>
    <p>store中的double:{{double}}</p>
    <button @click="incream">+1</button>
    <button @click="increams(10)">+n</button>
    <button  @click='add'>异步+1</button>
    <button @click='addes(10)'>异步+n</button>
  </div>
</template>

<script>
//使用辅助函数形式，操作state和getter
import { mapMutations, mapState,mapActions,mapGetters } from "vuex";
export default {
  name: "MyclassCategory",

  data() {
    return {};
  },
  methods: {
    ...mapMutations(["incream", "increams"]), //映射方法，用到上面的事件
    ...mapActions(['add','addes'])
  },

  computed: {
    ...mapState(["count"]), //相当于下面的式子，利用辅助函数
    // count(){
    //     return this.$store.state.count
    // }
    ...mapGetters(['double'])
  },
};
</script>

<style lang="scss" scoped>
</style>